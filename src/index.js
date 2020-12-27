import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'

import 'normalize.css/normalize.css'
import 'antd-mobile/dist/antd-mobile.css';  
import 'antd/dist/antd.css'

import store from './store'

import Login from './component/login/Login.jsx'
import Main from './component/main/index'
import Admin from './component/admin/index'
import AdminLogin from './component/adminLogin/index'
import NoMatch from './component/Nomatch/index'

// mock the responese when test
// import './mock/login.js'
// import './mock/register'
// import './mock/checkAnswers'
// import './mock/adminlogin'
// import './mock/exam'
// import './mock/userinfo'
// import './mock/commitAnswer'
// import './mock/deleteAnswer'
// import './mock/queslists'
// import './mock/userAnswer'
// import './mock/userexam'
// import './mock/mark'
const routerStore = new RouterStore()

const stores = {
  routerStore,
  ...store
}

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <Switch>
        <Route path='/' exact component={Login}></Route>
        <Route path='/main' exact component={Main}></Route>
        <Route path='/adminlogin' exact component={AdminLogin}></Route>
        <Route path='/admin'  component={Admin}></Route>
        <Route path='*' component={NoMatch}></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)