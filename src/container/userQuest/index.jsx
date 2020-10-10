import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

import axios from 'axios';
import { message, Table, Tag, Input } from 'antd';
import './index.scss'
const UserQuest = ({ group }) => {
    const {stunum, name} = useParams()
    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: '题目类型',
            dataIndex: 'type',
            key: 'key',
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
        },
        {
            title: '答案',
            dataIndex: 'answer',
        },
        {
            title: '评分',
            width: '10%',
            render: (_, record) => {
                const sumbit = async (e) => {
                    try {
                        const res = await axios({
                            method: 'post',
                            url: '/join/api/control/exam/mark',
                            data: {
                                stunum: stunum,
                                questionID: record.ID,
                                score: e.target.value,
                            },
                        });
                        if (res.data.code === 0) {
                            message.success('提交成功!');
                        } else {
                            message.warning(res.data.msg);
                        }
                    } catch (err) {
                        console.error(err);
                    }
                };
                return (
                    <>
                        <Input
                            placeholder="回车提交分数"
                            onPressEnter={sumbit}
                        />
                    </>
                );
            },
        },
    ];
    const [dataSource, setDataSource] = useState();
    useEffect(() => {
        const middle = async () => {
            try {
                const res = await axios({
                    method: 'post',
                    url: '/join/api/control/exam/get',
                    data: {
                        stunum,
                        groups: group,
                    },
                });
                if (res.data.code === 0) {
                    console.log(res.data);
                    setDataSource(res.data.data);
                } else {
                    message.warning(res.data.msg);
                }
            } catch (err) {
                console.log(err);
            }
        };
        middle();
    }, [group, stunum]);
    return (
        <div>
            <p>
                <span>姓名：{name} </span> 
                <span>学号：{stunum} </span> 
            </p>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
            ;
        </div>
    );
};

export default UserQuest;
