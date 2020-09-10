import React, { useState } from 'react';
import { Anchor } from 'antd';
import DynamicAntdTheme from 'dynamic-antd-theme';

import Logo from '../../images/logo.png';
import Bg from '../../images/cloud.png';
import Progerss from '../../container/Progress/index';
import Introduce from '../../container/Introduce/index';
import Branch from '../../container/Branch/index';
import Questions from '../../container/Questions/index';

import './index.scss';

const { Link } = Anchor;

const Main = () => {
    const [group, setGroup] = useState('#main');
    return (
        <>
            <DynamicAntdTheme
                primaryColor={'#FF9C6E'}
                style={{ display: 'none' }}
            />
            <header className="logo-header">
                <img src={Logo} alt="StarStudio" className="logo" />
                <img src={Bg} alt="background" className="bg" />
            </header>
            <div className="main">
                <main>
                    <Anchor
                        affix={true}
                        bounds={10}
                        onChange={(key) => {
                            setGroup(key);
                        }}
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
                            default :
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
