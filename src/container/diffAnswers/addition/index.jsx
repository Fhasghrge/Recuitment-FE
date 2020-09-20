import React from 'react';

import { message, Tag } from 'antd';
import axios from 'axios'
import './index.scss'


const MyUpload = ({ title, ID, index }) => {
    const upload = async (f) => {
        try {
            let form = new FormData()
            form.append('ID', ID)
            for (let i = 0; i < f.target.files.length; i++) {
                let file = f.target.files[i]
                form.append('file', file)
            }
            const res = await axios({
                method: 'post',
                headers: { 'Content-Type': 'undefined' },
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
    // const props = {
    //     name: 'file',
    //     method: 'post',
    //     action: '/join/api/user/file/upload',
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     },
    //     // data: {
    //     //     ID: ID
    //     // },
    //     onChange(info) {
    //         if (info.file.status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (info.file.status === 'done') {
    //             message.success(`${info.file.name} 上传成功`);
    //         } else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} 上传失败`);
    //         }
    //     },
    // };
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
            {/* <Upload {...props}>
                <Button>
                    <UploadOutlined />上传附件
                </Button>
            </Upload> */}
        </div>
    );
};

export default MyUpload;
