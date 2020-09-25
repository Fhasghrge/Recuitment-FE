import React, { useState, useEffect } from 'react';
import { message, Tag, Popconfirm } from 'antd';
import axios from 'axios';
import Default from '../../images/default_avatar .png'
import { useHistory } from 'react-router';
import './index.scss';

// ? waiting for complete
// function setCookie(cname, cvalue ='', exdays=-1) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires+"; path=/";//path=/是根路径
// }

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
        // !失效 如何清除cookie？
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        history.push('/');
    };

    const cancel = (e) => {
        message.error('已经取消！');
    };
    return (
        <div className="progress">
            <div className='img-box'>
                <div className="img">
                    <img src={Default} alt="avatar" />
                </div>
            </div>
            <div className="amain">
                <div className="username">{name}</div>
                <Tag className="college" color="orange">
                    {college}
                </Tag>
            </div>
            <div className="btns">
                <Popconfirm
                    title="只能提交一次，请确认？"
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
                <button className='logout' onClick={dropSign}>退出</button>
            </div>
        </div>
    );
};

export default Progerss;
