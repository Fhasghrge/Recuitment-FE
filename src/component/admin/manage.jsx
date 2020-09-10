import React, { useState } from 'react';
import CheckAnswers from '../../container/checkAnswers/index';
import MgAnswers from '../../container/mgAnswers/index';
import { useHistory } from 'react-router';
import axios from 'axios';
import ManagersInfo from '../../container/ManagersInfo';
import './manage.scss';

const keyToWord = [
    '产品',
    '设计',
    '安卓',
    'iOS',
    '前端',
    '后台',
    'DevOps',
    '管理',
];

const Manage = (props) => {
    const { which } = props;
    const [status, setStatus] = useState(0);
    const history = useHistory();
    
    // ! 下载文件的写法！！！！！！
    const downloadzip = () => {
        axios({
            method: 'get',
            headers: {
                'Content-Type': 'application/octet-stream',
            },
            url: `/control/file/download/?groups=${which}`,
        });
    };
    if (which !== 8) {
        return (
            <div className="manage-main">
                <header>
                    <div className="title">{keyToWord[which - 1]}</div>
                    <div
                        className="logout"
                        onClick={() => {
                            history.push('/adminLogin');
                            // * 修改全局状态
                        }}
                    >
                        退出登录
                    </div>
                </header>
                <main>
                    <div
                        className={
                            status !== 0 ? 'animate__backOutLeft hiden' : ''
                        }
                        onClick={() => setStatus(1)}
                    >
                        查看答题情况
                    </div>
                    <div
                        className={
                            status !== 0 ? 'animate__backOutRight hiden' : ''
                        }
                        onClick={() => setStatus(2)}
                    >
                        管理该方向题库
                    </div>
                    <div
                        className={
                            status !== 0
                                ? 'animate__zoomIn manageview'
                                : 'hiden'
                        }
                    >
                        <button
                            className="back-btn"
                            onClick={() => setStatus(0)}
                        >
                            返回
                        </button>
                        <button className="download-btn" onClick={downloadzip}>
                            该方向所有附件
                        </button>
                        {status === 1 ? (
                            <CheckAnswers group={which} />
                        ) : (
                            <MgAnswers group={which} />
                        )}
                    </div>
                </main>
            </div>
        );
    } else {
        return <ManagersInfo />;
    }
};

export default Manage;
