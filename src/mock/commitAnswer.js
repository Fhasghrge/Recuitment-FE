// 使用 Mock
import Mock from 'mockjs'
export default Mock.mock('/user/exam/answer', 'post', {
    code: 0,
    msg: '提交成功'
})
