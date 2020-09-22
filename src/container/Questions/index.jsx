import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './index.scss';
import { message, Tag } from 'antd';
import MyRadio from '../diffAnswers/radio/index';
import MyCheckbox from '../diffAnswers/check/index';
import MyInput from '../diffAnswers/input';
import MySimple from '../diffAnswers/simple';
import MyUpload from '../diffAnswers/addition';

const Questions = ({ group }) => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const middle = async () => {
            try {
                const res = await axios({
                    method: 'post',
                    url: '/join/api/user/exam/get',
                });
                if (res.data.code === 0) {
                    setQuestions(res.data.data.filter((item) => item.groups === group));
                } else {
                    message.warning(res.data.msg);
                }
            } catch (err) {
                console.log(err);
            }
        };
        middle();
    }, [group]);
    return (
        <>
            <Tag className = 'answer-type' color={group?'cyan': 'pink'}>{group? '专向题':  "通用题"}</Tag>
            <div>
                {questions.map((item, index) => {
                    switch (item.type) {
                        case 1:
                            return <MyRadio {...item} key={item.ID} index={index + 1} />;
                        case 2:
                            return <MyCheckbox {...item} key={item.ID} index={index + 1} />;
                        case 3:
                            return <MyInput {...item} key={item.ID} index={index + 1} />;
                        case 4:
                            return <MySimple {...item} key={item.ID} index={index + 1} />;
                        case 5:
                            return <MyUpload {...item} key={item.ID} index={index + 1} />;
                        default:
                            return <div>default</div>;
                    }
                })}
            </div>
        </>
    );
};

export default Questions;
