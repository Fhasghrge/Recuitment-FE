import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { message, Table, Tag, Input } from 'antd';
const UserQuest = ({ group, stunum }) => {
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
                            url: '/control/exam/mark',
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
                    url: '/control/exam/get',
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
