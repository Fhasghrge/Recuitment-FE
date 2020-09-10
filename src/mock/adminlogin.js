import Mock from 'mockjs'
export default Mock.mock('/control/login', 'post', {
    code: 0,
    msg: '登录成功' 
})
