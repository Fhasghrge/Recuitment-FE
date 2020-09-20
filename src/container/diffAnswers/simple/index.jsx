import React from 'react';
import { Input, message, Tag,Tooltip } from 'antd';
import axios from 'axios';
import './index.scss';
const { TextArea } = Input;

const MySimple = ({ title, ID, answer, index }) => {
    const onChange = async (e) => {
        console.log(e.currentTarget.value);
        try {
            const res = await axios({
                method: 'post',
                url: '/join/api/user/exam/answer',
                data: {
                    ID: ID,
                    answer: e.currentTarget.value,
                },
            });
            if (res.data.code === 0) {
                console.log('check:' + e);
                message.success('答案提交成功');
            } else {
                message.error('答案上传失败!');
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="simple-answer">
            <p>
                <Tag color="blue">{index}</Tag>
                <span dangerouslySetInnerHTML={{__html:title.replace(/[\r\n]/g, '<br/>')}}></span>
            </p>
            <Tooltip placement="bottomLeft" color='#f6ab6c' trigger='focus' title="回车提交">
                <TextArea
                    onPressEnter={onChange}
                    allowClear
                    rows={4}
                    placeholder={answer}
                />
            </Tooltip>
        </div>
    );
};

export default MySimple;
