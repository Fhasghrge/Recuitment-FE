// 使用 Mock
import Mock from 'mockjs'
export default Mock.mock('/join/api/user/exam/get', 'post', {
    "code": 0,
    "msg": "ok",
    "data": [
        {
            "type": 1,
            "options": [
                "hello",
                "help"
            ],
            "groups": 1,
            "ID": 1893,
            "title": "Which is short?",
            "answer": "help"
        },
        {
            "type": 2,
            "groups": 1,
            "ID": 1673,
            "options": [
                'unix',
                'linux',
                'window',
                'hongmengos'
            ],
            "title": "工作室的服务器操作系统主要是什么？"
        },
        {
            "type": 3,
            "groups": 1,
            "ID": 1173,
            "title": "你的家乡？",
            "answer": '安徽'
        },
        {
            "type": 4,
            "groups": 1,
            "ID": 1671,
            "title": "为什么加入工作室？",
            "answer": '好奇'
        },
        {
            "type": 5,
            "groups": 1,
            "ID": 1621,
            "title": "你觉得清水河畔APP应该怎么设计？"
        },
        {
            "type": 1,
            "options": [
                "hello",
                "help"
            ],
            "groups": 2,
            "ID": 1893,
            "title": "Which is short?",
            "answer": "help"
        },
        {
            "type": 2,
            "groups": 3,
            "ID": 1673,
            "options": [
                'unix',
                'linux',
                'window',
                'hongmengos'
            ],
            "title": "工作室的服务器操作系统主要是什么？"
        },
        {
            "type": 3,
            "groups": 4,
            "ID": 1173,
            "title": "你的家乡？",
            "answer": '安徽'
        },
        {
            "type": 4,
            "groups": 5,
            "ID": 1671,
            "title": "为什么加入工作室？",
            "answer": '好奇'
        },
        {
            "type": 5,
            "groups": 6,
            "ID": 1621,
            "title": "你觉得清水河畔APP应该怎么设计？"
        }
    ]
})
