import React, { useState } from 'react';
import CheckAnswers from '../../container/checkAnswers/index';
import MgAnswers from '../../container/mgAnswers/index';
import { useHistory } from 'react-router';
import axios from 'axios';
import ManagersInfo from '../../container/ManagersInfo';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import {Switch, Route, Link, useRouteMatch} from 'react-router-dom'
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
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const checktime = (i) => {
        if (i < 10) {
            let c = '0' + i
            return c
        } else {
            return i
        }
    }
    const checkgroup = (a) => {
        if (a === 1) {
            let b = '产品'
            return b
        } else if (a === 2) {
            let b = '设计'
            return b
        } else if (a === 3) {
            let b = '安卓'
            return b
        } else if (a === 4) {
            let b = 'IOS'
            return b
        } else if (a === 5) {
            let b = '前端'
            return b
        } else if (a === 6) {
            let b = '后台'
            return b
        } else if (a === 7) {
            let b = 'DevOps'
            return b
        }
    }

    const download = () => {
        setIsLoading(true) // 开启加载动画
        axios({
            method: 'get',
            url: '/join/api/control/file/download',
            params: {
                groups: which
            },
            responseType: 'blob' // 以字节流的形式下载文件
        }).then((res) => {
            const content = res.data
            const blob = new Blob([content], { type: 'application.zip' })

            // 创建文件名
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

            // 把二进制文件转换成浏览器<a>自动处理的能力
            if ('download' in document.createElement('a')) {
                const link = document.createElement('a')
                link.download = fileName
                link.style.display = 'none'
                link.href = URL.createObjectURL(blob)
                document.body.appendChild(link)
                link.click()
                URL.revokeObjectURL(link.href)
                document.body.removeChild(link)
                setIsLoading(false) // 结束加载动画
            } else { // 适配IE
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
                    <header>
                        <Link className='switch' to={`${url}/check`}>查看答题情况</Link>
                        <Link className='switch' to={`${url}/manage`}>管理该方向题库</Link>
                        <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            loading={isLoading}
                            className="download-btn"
                            onClick={download}
                        >
                            {isLoading? '下载中': '该方向所有附件'}
                        </Button>
                    </header>
                        <Switch>
                            <Route path={`${path}/check`}>
                                <CheckAnswers group={which}/>
                            </Route>
                            <Route path={`${path}/manage`}>
                                <MgAnswers group={which}/>
                            </Route>
                        </Switch>
                </main>
            </div>
        );
    } else {
        return <ManagersInfo />
    }
};

export default Manage;
