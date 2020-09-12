import React from 'react';

import { Upload, message, Button,Tag } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './index.scss'


const MyUpload = ({ title, ID, index }) => {
    const props = {
        name: 'file',
        method: 'post',
        action: '/join/api/user/file/upload',
        headers: {
            authorization: 'authorization-text',
            'Content-Type': 'multipart/form-data',
        },
        data: {
            ID: ID
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} 上传成功`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} 上传失败`);
            }
        },
    };
    return (
        <div className='addition-answer'>
            <p>
                <Tag color='geekblue'>{index}</Tag>
                {title}</p>
            <Upload {...props}>
                <Button>
                    <UploadOutlined />上传附件
                </Button>
            </Upload>
        </div>
    );
};

export default MyUpload;
