import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import JSEncrypt from 'jsencrypt';

import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';
import { useHistory } from 'react-router';
const AdminLogin = (props) => {
    const history = useHistory();
    useEffect(() => {
        // if (props.islogin) {
        //     props.history.push('/manage');
        // }
    });
    const onFinish = async (values) => {
        try {
            const { username, password } = values;
            const bodyFormData = new FormData();
            bodyFormData.set('username', username);
            bodyFormData.set('password', password);
            const userinfo = await axios({
                method: 'post',
                url: '/join/api/control/login',
                headers: { 'Content-Type': 'multipart/form-data' },
                data: bodyFormData,
            });
            if (userinfo.data.code === 0) {
                history.push('/admin');

            } else {
                message.warning('登录失败，请检查账户和密码！')
            }
        } catch (err) {
            console.log('登陆失败', err);
        }
    };

    return (
        <div className="adminlogin">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <h2>星辰工作室招新答题后台</h2>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AdminLogin;
