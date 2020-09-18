import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Drawer, List } from 'antd-mobile'
import Logo from '../../images/logo.png';
import Bg from '../../images/cloud.png';
import Webicon from '../../images/icon/web.png'
import Homeicon from '../../images/icon/home.png'
import Pmicon from '../../images/icon/chanpin.png'
import Designicon from '../../images/icon/shejitu.png'
import Beicon from '../../images/icon/houtai.png'
import Devopsicon from '../../images/icon/bushudian.png'
import Androidicon from '../../images/icon/anzhuo.png'
import Iosicon from '../../images/icon/ios.png'
import Progerss from '../../container/Progress/index';
import Introduce from '../../container/Introduce/index';
import Branch from '../../container/Branch/index';
import Questions from '../../container/Questions/index';

import './index.scss';

const { Link } = Anchor;

const Main = () => {
    const [group, setGroup] = useState('#main');
    const [isOpen, setIsOpen] = useState(false)
    const sidebar = (
        <List className='siderbar-style'>
            <List.Item onClick={(e) => {
                setIsOpen(false)
                setGroup('#main')
            }} key="main" >
                <img src={Homeicon} alt="homoicon" />
                <span>主页</span>
                </List.Item>
            <List.Item onClick={(e) => {
                setIsOpen(false)
                setGroup('#pm')
            }} key="pm">
                <img src={Pmicon} alt="pmicon" />
                <span>产品</span>
                </List.Item>
            <List.Item onClick={(e) => {
                setIsOpen(false)
                setGroup('#design')
            }} key="design">
                <img src={Designicon} alt="designicon" />
                <span>设计</span>
                </List.Item>
            <List.Item onClick={(e) => {
                setIsOpen(false)
                setGroup('#fe')
            }} key="fe">
                <img src={Webicon} alt="webicon" />
                <span>前端</span>
                </List.Item>
            <List.Item onClick={(e) => {
                setIsOpen(false)
                setGroup('#be')
            }} key="be">
                <img src={Beicon} alt="beicon" />
                <span>后台</span>
                </List.Item>
            <List.Item onClick={(e) => {
                setIsOpen(false)
                setGroup('#devops')
            }} key="devops" title="DevOps">
                <img src={Devopsicon} alt="devopsicon" />
                <span>Devops</span>
                </List.Item>
            <List.Item onClick={(e) => {
                setIsOpen(false)
                setGroup('#android')
            }} key="android">
                <img src={Androidicon} alt="androidicon" />
                <span>Android</span>
                </List.Item>
            <List.Item onClick={(e) => {
                setIsOpen(false)
                setGroup('#ios')
            }} key="ios">
                <img src={Iosicon} alt="iosicon" />
                <span>iOS</span>
                </List.Item>
        </List>
    );
    const onOpenChange = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <header className="logo-header">
                <div onClick={onOpenChange} className='drawer-logo'>开始答题</div>
                <img src={Logo} alt="StarStudio" className="logo" />
                <img src={Bg} alt="background" className="bg" />
            </header>
            <Drawer
            // the mobile drawer component hide all click event, so make z-index = -1
                className={isOpen? "" : "my-drawer"}
                style={{ minHeight: document.documentElement.clientHeight }}
                enableDragHandle

                contentStyle={{ color: '#A6A6A6', 
                                textAlign: 'center', 
                                display: 'none', 
                                backgroundColor: 'white',
                            }}
                sidebar={sidebar}
                open={isOpen}
                onOpenChange={onOpenChange}
            >
            </Drawer>
            <div className="main">
                <main>
                    <Anchor
                        affix={true}
                        bounds={10}
                        onChange={(key) => {
                            setGroup(key);
                        }}
                        onClick={
                            // 防止路由模式和喵点冲突
                            (e) => {
                                e.preventDefault()
                            }
                        }
                        className="navs"
                    >
                        <Link href="#main" title="主页"></Link>
                        <Link href="#pm" title="产品"></Link>
                        <Link href="#design" title="设计"></Link>
                        <Link href="#fe" title="前端"></Link>
                        <Link href="#be" title="后台"></Link>
                        <Link href="#devops" title="DevOps"></Link>
                        <Link href="#android" title="Andriod"></Link>
                        <Link href="#ios" title="iOS"></Link>
                    </Anchor>
                    {(() => {
                        switch (group) {
                            case '#main':
                                return (
                                    <main id="main">
                                        <Progerss name={'星辰'} />
                                        <Introduce />
                                        <Branch className="branch" />
                                    </main>
                                );
                            case '#pm':
                                return (
                                    <main className="branch-answer" id="pm">
                                        <div className="group-name">产品组</div>
                                        <Questions group={1} />
                                    </main>
                                );
                            case '#design':
                                return (
                                    <main className="branch-answer" id="design">
                                        <div className="group-name">设计组</div>
                                        <Questions group={2} />
                                    </main>
                                );
                            case '#fe':
                                return (
                                    <main className="branch-answer" id="fe">
                                        <div className="group-name">前端组</div>
                                        <Questions group={5} />
                                    </main>
                                );
                            case '#be':
                                return (
                                    <main className="branch-answer" id="be">
                                        <div className="group-name">后台组</div>
                                        <Questions group={6} />
                                    </main>
                                );
                            case '#devops':
                                return (
                                    <main className="branch-answer" id="devops">
                                        <div className="group-name">
                                            DevOps组
                                        </div>
                                        <Questions group={7} />
                                    </main>
                                );
                            case '#android':
                                return (
                                    <main
                                        className="branch-answer"
                                        id="android"
                                    >
                                        <div className="group-name">安卓组</div>
                                        <Questions group={3} />
                                    </main>
                                );
                            case '#ios':
                                return (
                                    <main className="branch-answer" id="ios">
                                        <div className="group-name">iOS组</div>
                                        <Questions group={4} />
                                    </main>
                                );
                            default:
                                return (
                                    <div>error</div>
                                )
                        }
                    })()}
                </main>
            </div>
        </>
    );
};

export default Main;
