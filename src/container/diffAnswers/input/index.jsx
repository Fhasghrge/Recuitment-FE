import React from 'react';
import { Input, message, Tag, Tooltip } from 'antd';
import debounce from '../../../util/debounce'
import axios from 'axios'
import './index.scss'

const MyInput = ({ ID, title, answer, index }) => {
    const onChange = async (e) => {
        try {
            const res = await axios({
                method: 'post',
                url: '/join/api/user/exam/answer',
                data: {
                    ID: ID,
                    answer: e.currentTarget.value
                }
            })
            if (res.data.code === 0) {
                message.success('答案提交成功')
            } else {
                message.error('答案上传失败!')
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='input-answer'>
            <p>
                <Tag color='geekblue'>{index}</Tag>
                <span dangerouslySetInnerHTML={{ __html: title.replace(/[\r\n]/g, '<br/>') }}></span>
            </p>
            <Tooltip placement="bottomLeft" color='#f6ab6c' trigger='focus' title="回车提交">
                <Input onPressEnter={(e) => debounce(onChange, 500)(e)} defaultValue={answer}
                />
            </Tooltip>
        </div>
    );
};

export default MyInput;
