// 使用 Mock
import Mock from 'mockjs'


export default Mock.mock('/join/api/user/register', 'post', {
    code: 0,
    msg: "注册成功"
})
