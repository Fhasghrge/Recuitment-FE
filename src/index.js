import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css'
import 'antd/dist/antd.css'

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


ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={Login}></Route>
      <Route path='/main' exact component={Main}></Route>
      <Route path='/adminlogin' exact component={AdminLogin}></Route>
      <Route path='/admin' exact component={Admin}></Route>
      <Route path='*' component={NoMatch}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)