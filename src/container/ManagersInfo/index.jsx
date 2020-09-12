import React, { useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import NewManager from '../../container/newManager/index';
import { Table, Popconfirm, message, Tag } from 'antd';
import { useState } from 'react';

const handleDelete = async (id) => {
    try {
        const res = await axios({
            method: 'post',
            url: '/join/api/control/admin/del',
            data: {
                ID: id
            }
        })
        if(res.data.code === 0) {
            message.success('删除成功')
        }else {
            message.warning(res.data.msg)
        }
    }catch(err) {
        console.error(err)
    }
};
const columns = [
    {
        title: 'ID',
        dataIndex: 'ID',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.id - b.id,
    },
    {
        title: '组类',
        dataIndex: 'groups',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.group - b.group,
        render: groups => (
            <>
                {
                    (() => {switch(groups) {
                        case 1: 
                        return (
                            <Tag color='magenta'>产品</Tag>
                        )
                        case 2: 
                        return (
                            <Tag color='red'>设计</Tag>
                        )
                        case 3: 
                        return (
                            <Tag color='volcano'>安卓</Tag>
                        )
                        case 4: 
                        return (
                            <Tag color='orange'>Ios</Tag>
                        )
                        case 5: 
                        return (
                            <Tag color='gold'>前端</Tag>
                        )
                        case 6: 
                        return (
                            <Tag color='lime'>后台</Tag>
                        )
                        case 7: 
                        return (
                            <Tag color='green'>Devops</Tag>
                        )
                        default :
                        return (
                            <Tag color='red'>其他</Tag>
                        )
                    }})()
                }
            </>
        )
    },
    {
        title: '用户名',
        dataIndex: 'username',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => (
            <Popconfirm
                title="确定删除？"
                onConfirm={() => handleDelete(record.ID)}
            >
                <div className="delete-btn">删除</div>
            </Popconfirm>
        ),
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

const ManagersInfo = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const middle = async () => {
            try {
                const res = await axios({
                    method: 'post',
                    url: '/join/api/control/admin/list',
                });
                if(res.data.code === 0) {
                    setData(res.data.data)
                }else {
                    message.warning(res.data.msg)
                }
                console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        middle();
    }, []);
    return (
        <div>
            <NewManager />
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                pagination={false}
            />
        </div>
    );
};

export default ManagersInfo;
