import React, {useEffect} from 'react';

import ChiLogo from '../../images/logo.png';
import EGLogo from '../../images/font.png';
import LoginFrom from '../../container/loginform/index';
import './Login.scss';

const Login = () => {

    /**
     ** 通常在副作用中执行 网络请求、 手动修改dom、 记录日志的操作
     ** 执行不更新状态的副作用以防止重复的修改无限递归
     ** 源码中更具effectTag对节点删除，是进行useEffect的中返回函数的执行
     ** layout阶段对useEffect本身的回调和销毁做清理
     *
     * ? vh所计算的依据很令人迷惑，可以使用相对稳定的window.innerHeight代替
     * vh根据“布局视口”的高度计算的
     * vh首先由safari提出，由后续浏览器跟进支持
     * vh在safari上计算的依据不受软键盘占用的影响
     * 但是在安卓手机上，软键盘影响了vh的计算，每当软键盘弹出就会重新计算
     * 不同的浏览器的渲染引擎对于window.innerheight的计算也不相同，
     * 这里的在火狐浏览器还是不适配，但是移动端主流浏览器已经适配
     * 
     * 补充： 这里大概率收到布局视口影响,布局视口收到软键盘影响
     */
    useEffect(() => {
        const initViewport = function (height) {
            let metaEl = document.querySelector('#viewportMeta');
            let content =
                'height=' +
                height +
                ',width=device-width,initial-scale=1.0,user-scalable=no';
            // metaEl.setAttribute('name', 'viewport');
            metaEl.setAttribute('content', content);
        };
        const realHeight = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight;
        initViewport(realHeight);
    }, [])
    return (
        <div className="login">
            <div className="logos">
                <img src={ChiLogo} alt="chineseLogo" className="logo" />
                <img src={EGLogo} alt="EGLogo" className="p1" />
                <h2 className="p2">2020年秋季招新答题系统</h2>
            </div>
            <div className="form">
                <LoginFrom />
            </div>
        </div>
    );
};

export default Login;
