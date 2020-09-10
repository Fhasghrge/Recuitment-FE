// 使用 Mock
import Mock from 'mockjs'
export default Mock.mock('/user/userinfo/get', 'post', {
    "code": 0,
    "msg": "ok",
    "data": {
        "stunum": "2018081311021",
        "name": "张爽",
        "phonenum": "19982022435",
        "qqnum": "1969533391",
        "lock": 0,
        "college": "计算机科学与工程学院（网络空间安全学院）"
    },
    "debug": true
})
