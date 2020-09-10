import React from 'react';

import ChiLogo from '../../images/logo.png';
import EGLogo from '../../images/font.png';
import LoginFrom from '../../container/loginform/index';
import './Login.scss';

const Login = (props) => {
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
