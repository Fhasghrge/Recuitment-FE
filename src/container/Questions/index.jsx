import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './index.scss';
import { message } from 'antd';
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
                    setQuestions(
                        res.data.data.filter((item) => {
                            if (group === 1 || group === 2) {
                                return item.groups === group
                            } else {
                                return (item.groups === group) || (item.groups === 0)
                            }
                        })
                    );
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
            {/* <div>{group} : questions</div> */}
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
