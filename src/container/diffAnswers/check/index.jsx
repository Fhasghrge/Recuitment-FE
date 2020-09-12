import React from 'react';
import { Checkbox, message, Tag } from 'antd';
import axios from 'axios'
import './index.scss'


const MyCheckbox = ({ options, title, ID, answer, index }) => {
    const onChange = async (e) => {
        console.log(e);
        try {
            const res = await axios({
                method:'post',
                url:'/join/api/user/exam/answer',
                data: {
                    ID: ID,
                    answer: e
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
        <div className='checkbox-answer'>
            <p>
                <Tag color='geekblue'>{index}</Tag>
                {title}</p>
            <Checkbox.Group
                options={options}
                defaultValue={answer}
                onChange={onChange}
            />
        </div>
    );
};

export default MyCheckbox;
