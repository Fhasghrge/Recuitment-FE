// 使用 Mock
import Mock from 'mockjs'
export default Mock.mock('/join/api/control/exam/get', 'post', {
    code: 0,
    msg: 'ok',
    data: [
        {
            ID: 18,
            type: 3,
            answer: "（选做题）菲茨定律是什么，举一处你所使用的产品中应用到菲茨定律的地方。",
        },
        {
            ID: 19,
            type: 2,
            answer: "（选做题）你认为产品经理需要哪些能力?",
        },
        {
            ID: 20,
            type: 5,
            answer: "（选做题）如果给微信增加一个功能，你打算增加什么样的功能，请具体阐述功能、使用场景以及原因。",
        },
        {
            ID: 21,
            type: 1,
            answer: "（选做题）分析拼多多与传统电商的不同。（你可以从功能点、场景、用户群等角度来分析）",
        },
        {
            ID: 22,
            type: 4,
            answer: "（选做题）什么是交互设计？分享一下令你印象深刻的一个交互设计。",
        },
        {
            ID: 23,
            type: 4,
            answer: "（选做题）分享一下你眼中的共享单车市场。",
        },
        {
            ID: 24,
            type: 4,
            answer: "（选做题）微信红包为什么不能被撤回？为什么IM软件几乎都不允许转发语音消息？",
        },
    ]
})
