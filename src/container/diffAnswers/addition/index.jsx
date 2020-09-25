import React from 'react';

import { message, Tag } from 'antd';
import axios from 'axios'
import './index.scss'


const MyUpload = ({ title, ID, index }) => {
    const upload = async (f) => {
        try {
            let form = new FormData()
            form.append('ID', ID)
            // upload file array， foreach item and append to file
            for (let i = 0; i < f.target.files.length; i++) {
                let file = f.target.files[i]
                form.append('file', file)
            }
            const res = await axios({
                method: 'post',
                headers: { 'Content-Type': 'multipart/form-data' },
                url: '/join/api/user/file/upload',
                data: form
            })
            if (res.data.code === 0) {
                message.success('上传成功！')
            } else {
                message.warning(res.data.msg)
            }
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className='addition-answer'>
            <p>
                <Tag color='geekblue'>{index}</Tag>
                <span dangerouslySetInnerHTML={{__html:title.replace(/[\r\n]/g, '<br/>')}}></span>
            </p>
            <input
                type="file"
                onChange={(e) => upload(e)}
            />
            <div className='tips'>
                <span>Tips:</span>上传的文件会覆盖之前上传的文件
            </div>
        </div>
    );
};

export default MyUpload;
