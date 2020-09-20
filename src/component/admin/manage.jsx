import React, { useState } from 'react';
import CheckAnswers from '../../container/checkAnswers/index';
import MgAnswers from '../../container/mgAnswers/index';
import { useHistory } from 'react-router';
import axios from 'axios';
import ManagersInfo from '../../container/ManagersInfo';
import './manage.scss';

const keyToWord = [
    '通用',
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
    const checktime = (i) => {
        if (i < 10) {
            let c = '0' + i
            return c
        } else {
            return i
        }
    }
    const checkgroup = (a) => {
        if (a === '1') {
            let b = '产品'
            return b
        } else if (a === '2') {
            let b = '设计'
            return b
        } else if (a === '3') {
            let b = '安卓'
            return b
        } else if (a === '4') {
            let b = 'IOS'
            return b
        } else if (a === '5') {
            let b = '前端'
            return b
        } else if (a === '6') {
            let b = '后台'
            return b
        } else if (a === '7') {
            let b = 'DevOps'
            return b
        }
    }
    // ! 下载文件的写法！！！！！！
    const download = () => {
        axios({
            method: 'get',
            url: '/join/api/control/file/download',
            params: {
                groups: which
            },
            responseType: 'blob'
        }).then((res) => {
            const content = res.data
            const blob = new Blob([content], { type: 'application.zip' })
            let presentTime = new Date()
            let month = presentTime.getMonth()
            let day = presentTime.getDate()
            let hour = presentTime.getHours()
            let m = presentTime.getMinutes()

            month = checktime(String(parseInt(month) + 1))
            day = checktime(day)
            hour = checktime(hour)
            m = checktime(m)
            let group = checkgroup(which)
            const fileName = group + '附件-' + month + day + hour + m + '.zip'
            if ('download' in document.createElement('a')) {
                const link = document.createElement('a')
                link.download = fileName
                link.style.display = 'none'
                link.href = URL.createObjectURL(blob)
                document.body.appendChild(link)
                link.click()
                URL.revokeObjectURL(link.href)
                document.body.removeChild(link)
            } else {
                navigator.msSaveBlob(blob, fileName)
            }
        })
    }
    if (which !== 8) {
        return (
            <div className="manage-main">
                <header>
                    <div className="title">{keyToWord[which]}</div>
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
                        <button className="download-btn" onClick={download}>
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
