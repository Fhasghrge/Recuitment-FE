// 使用 Mock
import Mock from 'mockjs'
export default Mock.mock('/join/api/user/exam/delete', 'post', {
    code: 0,
    msg: '删除成功'
})
