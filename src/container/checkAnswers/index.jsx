/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { Table, Input, InputNumber, Form } from 'antd';
import './index.scss';
import UserQuest from '../userQuest';

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    ID,
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
    useEffect(() => {
        const middle = async () => {
            try {
                const res = await axios({
                    method: 'post',
                    url: '/control/exam/status',
                    data: {
                        groups: group
                    }
                });
                if (res.data.code === 0) {
                    setData(res.data.data);
                } else {
                    message.warning(res.data.msg);
                }
            } catch (err) {
                console.log(err);
            }
        };
        middle();
    }, [group]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            width: '5%',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            width: '10%',
        },
        {
            title: '学号',
            dataIndex: 'stunum',
            width: '10%',
        },
        {
            title: '提交时间',
            dataIndex: 'time',
            width: '15%',
        },
        {
            title: '分数',
            dataIndex: 'score',
            width: '10%',
        },
        {
            title: '评卷人',
            dataIndex: 'judger',
            width: '20%',
        },
        {
            title: '锁定',
            dataIndex: 'lock',
            width: '10%',
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            render: (_, record) => {
                return (
                    <>
                        <a
                            onClick={() => {
                                setDetail(record.stunum)
                            }}
                            className="action"
                        >
                            查看试卷
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
            }),
        };
    });
    const [detail, setDetail] = useState(0);
    return (
        <div>
            {detail ? (
                <UserQuest group={group} stunum ={detail}/>
            ) : (
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
            )}
        </div>
    );
};

const CheckAnswers = ({ group }) => {
    return (
        <div className="mgAnswer">
            <EditableTable group={group} />
        </div>
    );
};

export default CheckAnswers;
