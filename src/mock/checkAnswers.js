import Mock from 'mockjs'
export default Mock.mock('`/control/exam/status`', 'post', {
  "code": 0,
  "msg": "ok",
  "data": [
    {
      "name": "hzy",
      "stunum": "2018XXXXXXXXX",
      "time": "07/27 16:44:15",
      "score": 97,
      "judger": "Huang ZY"
    },
    {
      "name": "hz1",
      "stunum": "2019XXXXXXXXX",
      "time": "09/27 11:47:35"
    }
  ]
})
