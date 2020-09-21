import React from 'react';
import { Radio, message,Tag } from 'antd';
import axios from 'axios'
import debounce from '../../../util/debounce'
import './index.scss'
// 单选题
const MyRadio = ({ options, title, answer, ID, index }) => {
    const changeOptions = async (e) => {
        console.log(e.target.value);
        try {
            const res = await axios({
                method:'post',
                url:'/join/api/user/exam/answer',
                data: {
                    ID: ID,
                    answer: e.target.value
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
        <div className='radio-answer'>
            <p>
                <Tag color='geekblue'>{index}</Tag>
                <span dangerouslySetInnerHTML={{__html:title.replace(/[\r\n]/g, '<br/>')}}></span>
            </p>
            <Radio.Group onChange={(e) => debounce(changeOptions,500)(e)} defaultValue={answer}  size='small'>
                {options.map((item) => {
                    return <Radio.Button key={item} className='option' value={item}>{item}</Radio.Button>;
                })}
            </Radio.Group>
        </div>
    );
};

export default MyRadio;
