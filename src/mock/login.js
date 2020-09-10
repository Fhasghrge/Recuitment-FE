// 使用 Mock
import Mock from 'mockjs'
export default Mock.mock('/user/login', 'post', {
    code: 0,
    msg: '登录成功'
})
