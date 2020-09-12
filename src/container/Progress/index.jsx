import React, { useState, useEffect } from 'react';
import { message, Tag, Popconfirm } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';
import Default from '../../images/default_avatar .png';
import './index.scss';

const Progerss = () => {
    const [lock, setLock] = useState(false);
    const [name, setName] = useState();
    const [college, setCollege] = useState();
    const history = useHistory();
    useEffect(() => {
        const middle = async () => {
            try {
                const res = await axios({
                    method: 'post',
                    url: '/join/api/user/userinfo/get',
                });
                if (res.data.code === 0) {
                    setLock(res.data.data.lock === 1);
                    setName(res.data.data.name);
                    setCollege(res.data.data.college);
                } else {
                    message.warning(res.data.msg);
                }
            } catch (err) {
                console.log(err);
            }
        };
        middle();
    }, []);
    const lockSubmit = async () => {
        try {
            const res = await axios({
                method: 'post',
                url: '/join/api/user/exam/lock',
            });
            if (res.data.code === 0) {
                message.success('您已提交试卷，请耐性等候！');
            } else {
                message.warning(res.data.msg);
            }
        } catch (err) {
            console.error(err);
        }
    };
    const dropSign = () => {
        history.push('/');
    };

    const cancel = (e) => {
        console.log(e);
        message.error('已经取消！');
    };
    return (
        <div className="progress">
            <div className="img">
                <img src={Default} alt="avatar" />
            </div>
            <div className="amain">
                <div className="username">{name}</div>
                <Tag className="college" color="orange">
                    {college}
                </Tag>
            </div>
            <div className="btns">
                <Popconfirm
                    title="只能提交一次，确认取消？"
                    onConfirm={lockSubmit}
                    onCancel={cancel}
                    disabled={lock !== false}
                    okText="确定"
                    cancelText="取消"
                    className='btn'
                >
                    <button disabled={lock !== false} >
                        提交
                    </button>
                </Popconfirm>
                <button onClick={dropSign}>退出</button>
            </div>
        </div>
    );
};

export default Progerss;
