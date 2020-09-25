import React from 'react';
import { Radio, message,Tag } from 'antd';
import axios from 'axios'
import debounce from '../../../util/debounce'
import './index.scss'
// 单选题

//洗牌算法，每次重新渲染页面都会进行重新洗牌
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
const MyRadio = ({ options, title, answer, ID, index }) => {
    const changeOptions = async (e) => {
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
                {shuffle(options).map((item) => {
                    return <Radio.Button key={item} className='option' value={item}>{item}</Radio.Button>;
                })}
            </Radio.Group>
        </div>
    );
};

export default MyRadio;
