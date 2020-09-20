import React, { useState, lazy, Suspense } from 'react';
import { Menu } from 'antd';

import Normal from '../../images/normal.png'
import PM from '../../images/icon/chanpin.png';
import FE from '../../images/icon/web.png';
import BE from '../../images/icon/houtai.png';
import Design from '../../images/icon/shejitu.png';
import Dev from '../../images/icon/bushudian.png';
import Android from '../../images/icon/anzhuo.png';
import iOS from '../../images/icon/ios.png';
import Setting from '../../images/icon/setting.png'

import './index.scss';
import Loading from '../../container/Loading/index';
import Logo from '../../images/logo.png';

const Main = lazy(() => import(/* webpackChunkName: "about"*/ './manage'));

const Admin = (props) => {
    const [key, setKey] = useState(0);
    const select = (item) => {
        setKey(Number(item.key));
    };

    return (
        <div className="admin">
            <div className="navs">
                <img src={Logo} alt="logo" className="logo" />
                <Menu
                    className="nav"
                    mode="inline"
                    style={{ width: 256 }}
                    onSelect={select}
                >
                    <Menu.Item key="0">
                        <img src={Normal} alt="normal" />
                        <div>通用</div>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <img src={PM} alt="pm" />
                        <div>产品</div>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <img src={FE} alt="fe" />
                        <div>前端</div>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <img src={BE} alt="be" />
                        <div>后台</div>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <img src={Design} alt="design" />
                        <div>设计</div>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <img src={Dev} alt="DevOps" />
                        <div>DevOps</div>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <img src={Android} alt="andriod" />
                        <div>安卓</div>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <img src={iOS} alt="ios" />
                        <div>iOS</div>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <img src={Setting} alt="setting" />
                        <div>管理</div>
                    </Menu.Item>
                </Menu>
            </div>
            <main>
                {/* waiting for beautify the transform */}
                <Suspense fallback={<Loading />}>
                    <Main which={key}></Main>
                </Suspense>
            </main>
        </div>
    );
};

export default Admin;
