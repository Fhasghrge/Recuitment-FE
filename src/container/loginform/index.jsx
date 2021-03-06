import React, { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';

import './index.scss';
import { useHistory } from 'react-router';

const ChangeLogin = () => {
    // 受控表单
    const [username, setUsername] = useState();
    const [passwd, setPasswd] = useState();
    const history = useHistory();
    const loginSubmit = async () => {
        if (username && passwd) {
            try {
                let res = await axios({
                    method: 'post',
                    url: '/join/api/user/login',
                    data: {
                        stunum: username,
                        password: passwd,
                    },
                });
                if (res.data.code === 0) {
                    history.push('/main');
                } else {
                    message.error('登录失败');
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            message.warning('请输入账户和密码！');
        }
    };
    return (
        <form
            className="login-form"
            onSubmit={(event) => {
                loginSubmit();
                // 防止表单提交是默认刷新页面
                event.preventDefault();
            }}
        >
            <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="学号"
            />
            <input
                type="password"
                name="passwd"
                autoComplete="on"
                onChange={(e) => setPasswd(e.target.value)}
                placeholder="密码"
            />
            <input type="submit" value="确定登录" />
        </form>
    );
};
const ChangeSignIn = () => {
    const [realName, setRealName] = useState();
    const [stdnum, setStdnum] = useState();
    const [tel, setTel] = useState();
    const [qqnum, setQqnum] = useState();
    const [passwd, setPasswd] = useState();
    const [repeat, setRepeat] = useState();
    const updatePasswd = async () => {
        try {
            const res = await axios({
                method: 'post',
                url: '/join/api/user/portal/change',
                data: {
                    stunum: stdnum,
                    newpassword: passwd,
                    name: realName,
                    phonenum: tel,
                    qqnum: qqnum,
                },
            });
            if (res.data.code === 0) {
                message.info('密码更新成功,请前往登录!');
            } else {
                message.info(res.data.msg);
            }
        } catch (err) {
            console.log(err);
        }
    }
    const register = async () => {
        if (realName && stdnum && tel && qqnum && passwd && repeat) {
            if (passwd === repeat) {
                if (!(/^20\d{6,17}$/.test(stdnum))) {
                    message.warning('请填写正确的学号！')
                } else if (!/^1[3-9]\d{9}$/.test(tel)) {
                    message.warning('手机电话号码有误，请重填！')
                } else {
                    try {
                        const res = await axios({
                            method: 'post',
                            url: '/join/api/user/register',
                            data: {
                                stunum: stdnum,
                                password: passwd,
                                name: realName,
                                phonenum: tel,
                                qqnum: qqnum,
                            },
                        });
                        if (res.data.code === 0) {
                            message.info('注册成功,请前往登录!');
                        } else if (res.data.code === -80) {
                            updatePasswd()
                        } else {
                            message.info(res.data.msg);
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            } else {
                message.error('请输入相同的两次密码！');
            }
        } else {
            message.warning('请输入完整信息！');
        }
    };
    return (
        <form
            className="signin"
            onSubmit={(event) => {
                register();
                event.preventDefault();
            }}
        >
            <input
                type="text"
                name="realName"
                onChange={(e) => setRealName(e.target.value)}
                placeholder="真实姓名"
            />
            <input
                type="text"
                name="schoolid"
                onChange={(e) => setStdnum(e.target.value)}
                placeholder="学号"
            />
            <input
                type="text"
                name="tele"
                onChange={(e) => setTel(e.target.value)}
                placeholder="手机号（联系方式）"
            />
            <input
                type="text"
                name="qqnum"
                onChange={(e) => setQqnum(e.target.value)}
                placeholder="QQ号"
            />
            <input
                type="password"
                autoComplete="on"
                name="passwd"
                onChange={(e) => setPasswd(e.target.value)}
                placeholder="密码"
            />
            <input
                type="password"
                autoComplete="on"
                name="repasswd"
                onChange={(e) => setRepeat(e.target.value)}
                placeholder="重复密码"
            />
            <input type="submit" value="确定注册" />
        </form>
    );
};

const LoginForm = ({ changeToMain }) => {
    const [isLogin, setisLogin] = useState(true);
    return (
        <div className="loginForm box">
            <div className="btns">
                <div
                    className={isLogin ? 'selected btn' : 'btn'}
                    onClick={() => setisLogin(true)}
                >
                    登录
                </div>
                <div
                    className={!isLogin ? 'selected btn' : 'btn'}
                    onClick={() => setisLogin(false)}
                >
                    注册
                </div>
            </div>
            {
                isLogin ?
                    <ChangeLogin changeToMain={changeToMain} />
                    :
                    <ChangeSignIn />
            }
        </div>
    );
};
export default LoginForm;
