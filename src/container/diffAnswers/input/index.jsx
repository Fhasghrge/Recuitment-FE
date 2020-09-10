import React from 'react';
import { Input, message,Tag } from 'antd';
import axios from 'axios'
import './index.scss'

const MyInput = ({ ID, title, answer, index }) => {
    const onChange = async (e) => {
        console.log(e.currentTarget.value);
        try {
            const res = await axios({
                method:'post',
                url:'/user/exam/answer',
                data: {
                    ID: ID,
                    answer: e.currentTarget.value
                }
            })
            if(res.data.code === 0) {
                console.log("check:" + e);
                message.success('答案提交成功')
            }else {
                message.error('答案上传失败!')
            }
        }catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='input-answer'>
            <p>
                <Tag color='geekblue'>{index}</Tag>
                {title}</p>
            <div className="tips">(回车提交)</div>
            <Input onPressEnter={onChange} placeholder={answer} />
        </div>
    );
};

export default MyInput;
