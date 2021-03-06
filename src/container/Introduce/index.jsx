import React from 'react';

import dest from '../../images/dest.png';
import clock from '../../images/Clock.png';
import './index.scss';
import { calProgress, lastTime } from '../../util/time';
import { useEffect, useState } from 'react';
import axios from 'axios'

let status = calProgress();
let last = lastTime();

const Main = ({canAnswer}) => {
    const [progress, Setprogress] = useState(status);
    const [lastime, SetLastTime] = useState(last);
    const [startTime, setStartTime] = useState([])
    const [endTime, setEndTime] = useState([])
    useEffect(() => {
        let status = '';
        const middle = async () => {
            try {
                let res = await axios({
                    method: 'get',
                    url: '/join/api/user/exam/getdate',
                })
                if (res.data.code === 0) {
                    setStartTime(res.data.data.starttime)
                    setEndTime(res.data.data.closingtime)
                    const clear = setInterval(() => {
                        /**
                         * * 为什么需要用hooks存放时间信息呢？
                         * 因为页面的动态刷新需要根据state
                         */
                        status = calProgress(res.data.data.starttime);
                        if(status === 'ended') canAnswer(false) 
                        Setprogress(status);
                        SetLastTime(lastTime(res.data.data.closingtime));
                    }, 1000);
                    return () => {
                        // 清除定时器
                        clearInterval(clear);
                    };
                } else {
                    console.log(res.data.msg)
                }
            } catch (error) {
                console.error(error)
            }
        }
        middle()
    }, [canAnswer]);
    return (
        <div className="introduce">
            <div className="intr">
                <div className="text">
                    <div className="title">星辰工作室</div>
                    <p>
                        成立于1998年，星辰工作室作为校园互联网先驱，配备了丰富的软硬件开发资源，还拥有各个方向培养的方案和书籍。
                        不论使用macOS系统还是Windows系统，工作室都提供电脑可以上手开发。
                        除了来到工作室坐享各方向大佬的指导，还有更多福利等你来发现！
                    </p>
                </div>
                <div className="img">
                    <img src={dest} alt="dest" />
                </div>
            </div>
            <div className="intr">
                <div className="text">
                    <div className="title">答题简介</div>
                    <p>
                        选择感兴趣的方向进行答题，可以提交多个方向的答卷，
                        点击导航栏对应方向开始答题吧！
                        本次线上答题时间为{" " + startTime.slice(0, 3).join('-') + " " + startTime.slice(3).join(':') + " "}截止{" " + endTime.slice(0, 3).join('-') + " " + endTime.slice(3).join(':') + " "}，请在规定时间里面完成答题并提交答卷才算成功喔！
                    </p>
                </div>
                <div className="img">
                    <img src={clock} alt="colck" />
                    {
                        progress === 'ended' ?
                            <div className='remain-time webend'>答题已经结束！</div>
                            :
                            <>
                                <div className="clock-title">
                                    距离答题{progress === 'waiting' ? '开始' : '结束'}
                                    还有:
                                </div>
                                <div className="remain-time">
                                    {lastime[0]}天 {lastime[1]}:{lastime[2]}:{lastime[3]}
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;
