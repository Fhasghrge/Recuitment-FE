import React from 'react';
import debounce from '../../../util/debounce'
import { Checkbox, message, Tag } from 'antd';
import axios from 'axios'
import './index.scss'

// 多选题
const MyCheckbox = ({ options, title, ID, answer, index }) => {
    const onChange = async (e) => {
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
                <span dangerouslySetInnerHTML={{__html:title.replace(/[\r\n]/g, '<br/>')}}></span>
            </p>
            <Checkbox.Group
                options={options}
                defaultValue={answer}
                onChange={(e)=> debounce(onChange,500)(e)}
            />
        </div>
    );
};

export default MyCheckbox;
