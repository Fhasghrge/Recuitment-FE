import React from 'react';
import debounce from '../../../util/debounce'
import { Checkbox, message, Tag } from 'antd';
import axios from 'axios'
import './index.scss'

//洗牌算法
function shuffle(array) { 
    let arrayLength = array.length,   
        randomIndex, //随机数   
        tempItem; //临时存储元素  
    for (let i = arrayLength - 1; i >= 0; i--) {    
        randomIndex = Math.floor(Math.random() * (i + 1));    
        tempItem = array[randomIndex];    
        array[randomIndex] = array[i];    
        array[i] = tempItem;  
    }  
    return array;
}
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
                options={shuffle(options)}
                defaultValue={answer}
                onChange={(e)=> debounce(onChange,500)(e)}
            />
        </div>
    );
};

export default MyCheckbox;
