import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios'
import './index.scss'
const { Option } = Select;

const FormLayoutDemo = () => {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        try{  
            const res = await axios({
                method:'post',
                url: '/join/api/control/admin/new',
                data: {
                    username: values.username,
                    password: values.password,
                    groups: values.group
                }
            })
            if(res.data.code === 0) {
                message.success('添加成功')
            }else {
                message.warning(res.data.msg)
            }
        }catch (err) {
            console.error(err)
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
                layout={'inline'}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className='add-manager'
            >
                <Form.Item label="组别" name="group">
                    <Select  style={{ width: 120 }}>
                        <Option value="1">产品</Option>
                        <Option value="2">设计</Option>
                        <Option value="3">安卓</Option>
                        <Option value="4">iOS</Option>
                        <Option value="5">前端</Option>
                        <Option value="6">后台</Option>
                        <Option value="7">DevOps</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="username" label="用户名">
                    <Input placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input placeholder="请输入密码" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        新增管理员
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default FormLayoutDemo;
