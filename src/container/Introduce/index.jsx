import React from 'react';

import dest from '../../images/dest.png';
import clock from '../../images/Clock.png';
import './index.scss';
import { calProgress, lastTime } from '../../util/time';
import { useEffect, useState } from 'react';

let status = calProgress();
let last = lastTime();

const Main = () => {
    const [progress, Setprogress] = useState(status);
    const [lastime, SetLastTime] = useState(last);
    useEffect(() => {
        const clear = setInterval(() => {
            /**
             * * 为什么需要用hooks存放时间信息呢？
             * 因为页面的动态刷新需要根据state
             */
            Setprogress(calProgress());
            SetLastTime(lastTime());
        }, 1000);
        return () => {
            clearInterval(clear);
        };
    }, []);
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
                        本次线上答题时间为9.20 14:30截止9.27 14:30，请在规定时间里面完成答题并提交答卷才算成功喔！
                        点击导航栏对应方向开始答题吧！
                    </p>
                </div>
                <div className="img">
                    <img src={clock} alt="colck" />
                    <div className="clock-title">
                        距离答题{progress === 'waiting' ? '开始' : '结束'}
                        还有:
                    </div>
                    <div className="remain-time">
                        {lastime[0]}天 {lastime[1]}:{lastime[2]}:{lastime[3]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
