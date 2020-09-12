/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { Table, Input, InputNumber, Popconfirm, Form, Tag } from 'antd';
import NewAnswer from '../newAnswer/index'
import './index.scss';

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    ID,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    key={ID}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const EditableTable = ({ group }) => {
    const [form] = Form.useForm();
    const [data, setData] = useState();
    const [editingKey, setEditingKey] = useState('');
    useEffect(() => {
        const middle = async () => {
            try {
                const res = await axios({
                    method: 'post',
                    url: '/join/api/control/question/list',
                    data: {
                        groups: group,
                    },
                });
                if (res.data.code === 0) {
                    setData(res.data.data);
                    console.log(res.data.data[0].options);
                } else {
                    message.warning(res.data.msg);
                }
            } catch (err) {
                console.log(err);
            }
        };
        middle();
    }, [group]);
    const isEditing = (record) => record.ID === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            ...record,
        });
        setEditingKey(record.ID);
    };
    const deleteItem = async (record) => {
        console.log(record);
        try {
            const res = await axios({
                method: 'post',
                url: '/join/api/control/question/del',
                data: {
                    ID: record.ID,
                },
            });
            if (res.data.code === 0) {
                message.success('删除成功！');
            } else {
                message.error('删除失败' + res.data.msg);
            }
        } catch (err) {
            console.error(err);
        }
    };
    const cancel = () => {
        setEditingKey('');
    };

    const save = async (record) => {
        const row = await form.validateFields();
        saveSubmit({
            ...record,
            ...row
        });
    };
    const saveSubmit = async (record) => {
        console.log(record);
        try {
            const res = await axios({
                method: 'post',
                url: '/join/api/control/question/change',
                data: {
                    ID: record.ID,
                    type: record.type,
                    groups: record.groups,
                    title: record.title,
                    options: record.options,
                }
            });
            if(res.data.code === 0 ){
                message.success('修改成功')
            }else {
                message.error('修改失败' + res.data.msg)
            }
        } catch (err) {
            console.error(err);
        }
        setEditingKey('');
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            width: '5%',
        },
        {
            title: '类型',
            dataIndex: 'type',
            width: '5%',
            render: (type) => (
                <>
                    {(() => {
                        switch (type) {
                            case 1:
                                return <Tag color="blue">单选题</Tag>;
                            case 2:
                                return <Tag color="geekblue">多选题</Tag>;
                            case 3:
                                return <Tag color="lime">填空题</Tag>;
                            case 4:
                                return <Tag color="orange">简答题</Tag>;
                            case 5:
                                return <Tag color="#55acee">附件题</Tag>;
                            default:
                                return <Tag color="red">未知题型</Tag>;
                        }
                    })()}
                </>
            ),
        },
        {
            title: '题目',
            dataIndex: 'title',
            width: '70%',
            editable: true,
        },
        // ! 这里失败了
        // {
        //     title: '选项',
        //     dataIndex: 'options',
        //     // key: 'options',
        //     width: '5%',
        //     render: (options) => <>{options}</>,
        //     // editable: true,
        //     // render: (options) => (
        //     //     <>
        //     //         {options.map((option) => {
        //     //             // let color = option.answer === 1 ? 'green' : 'geekblue';
        //     //             // return (
        //     //             //     <Tag color={color} key={option.content}>
        //     //             //         {option.content}
        //     //             //     </Tag>
        //     //             // );
        //     //             return(
        //     //                 <div>{option.content}</div>
        //     //             )
        //     //         })}
        //     //     </>
        //     // ),
        // },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            // href="javascript:;"
                            onClick={() => save(record)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            确定
                        </a>
                        <Popconfirm title="确定？" onConfirm={cancel}>
                            <a>取消</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <>
                        <a
                            disabled={editingKey !== ''}
                            onClick={() => edit(record)}
                        >
                            编辑
                        </a>
                        <a
                            onClick={() => deleteItem(record)}
                            className="action"
                        >
                            删除
                        </a>
                    </>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={false}
            />
        </Form>
    );
};

const MgAnswers = ({ group }) => {
    return (
        <div className="mgAnswer">
            <div className="addMg"><NewAnswer group={group}/></div>
            <EditableTable group={group} />
        </div>
    );
};

export default MgAnswers;
