// 使用 Mock
import Mock from 'mockjs'
export default Mock.mock('/join/api/control/exam/status', 'post', {
    code: 0,
    msg: 'success',
    data: [
        {
            "ID": '111',            
            "key": '111',
            "name": "分数得",
            "stunum": "2018081311021",
            "time": "07/27 16:44:15",
            "score": 97,
            "judger": "Huang ZY",
            "lock": 1
        },
        {
            "ID": '112',            
            "key": '112',
            "name": "发顺丰的",
            "stunum": "2018XXXXXXXXX",
            "time": "07/27 16:44:15",
            "score": 92,
            "judger": "Huang ZY",
            "lock": 0
        },
        {
            "ID": '113',            
            "key": '113',
            "name": "发顺",
            "stunum": "2018XXXXXXXXX",
            "time": "07/27 16:44:15",
            "score": 87,
            "judger": "Huang ZY",
            "lock": 1
        },
        {
            "ID": '114',            
            "key": '114',
            "name": "让我",
            "stunum": "2018XXXXXXXXX",
            "time": "07/27 16:44:15",
            "score": 93,
            "judger": "Huang ZY",
            "lock": 1
        },
        {
            "ID": '115',            
            "key": '115',
            "name": "差错",
            "stunum": "2018XXXXXXXXX",
            "time": "07/27 16:44:15",
            "score": 34,
            "judger": "Huang ZY",
            "lock": 1
        },
        {
            "ID": '116',            
            "key": '116',
            "name": "啊啊是",
            "stunum": "2018XXXXXXXXX",
            "time": "07/27 16:44:15",
            "score": 37,
            "judger": "Huang ZY",
            "lock": 1
        },
        {
            "ID": '117',            
            "key": '117',
            "name": "当读到",
            "stunum": "2018XXXXXXXXX",
            "time": "07/27 16:44:15",
            "score": 87,
            "judger": "Huang ZY",
            "lock": 1
        },
        {
            "ID": '118',            
            "key": '118',
            "name": "帆帆发",
            "stunum": "2018XXXXXXXXX",
            "time": "07/27 16:44:15",
            "score": 54,
            "judger": "Huang ZY",
            "lock": 1
        },
    ]
})
