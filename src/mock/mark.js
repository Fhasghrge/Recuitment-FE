// 使用 Mock
import Mock from 'mockjs'
export default Mock.mock('/control/exam/mark', 'post', {
    code: 0,
    msg: 'success'
})
