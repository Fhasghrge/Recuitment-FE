import React, { useState } from 'react';
import { Menu } from 'antd';
import './index.scss';
// import {useHistory} from 'react-router-dom'

const Branch = () => {
    const [current, setCurrent] = useState('pm');
    const handleClick = (e) => {
        setCurrent(e.key);
    };
    const introdInfos = {
        pm: `
            如果你有很好的沟通能力和逻辑能力，并且总是充满着想法，那快把目光聚集到这里吧！
            在产品的岗位上，不一定要有亲自写代码的能力，你要做的是从策划到设计产品的雏形，再到按期保证开发进度，最后展现产品并交由客户验收。
            我们要你有能力协调各方，统筹全局。当然，如果你还了解一定的技术，那更是锦上添花！
            `,
        fe:
            '你可曾思考过，日常浏览的网页，手机上的小程序，是如何呈现到你面前的？你是否想过拥有一个自己的个人主页？Web前端开发是从网页制作演变而来的，名称上有很明显的时代特征，随着互联网发展，网页不再只是承载单一的文字和图片，各种丰富媒体让网页的内容更加生动，网页上软件化的交互形式为用户提供了更好的使用体验，这些都是基于前端技术实现的。加入StarStudio前端组，会使你能够运用常用的前端技术，包括JavaScript、CSS、HTML等传统技术与概念性较强的交互式设计，和艺术性较强的视觉设计等等。',
        design: `
            对美的追求是艺术行无止境的不竭动力，比起美仑美奂的设计让你眼花缭乱，创造美或许更能满足你的欲望，运用手中的软件，创造你想要的尤物，星辰工作室设计组能满足你的愿望！
            在这里，你将能掌握这些创造工具——
            ◆图像编辑 Adobe Photoshop
            ◆矢量绘图 Adobe IIIustrator
            ◆视频/建模Adobe After Effects、Cinema 4D
            ◆常用UI设计 Sketch、Adobe XD
            在这里，你将有机会进行UI设计和平面设计，无限满足你对美的追求
            `,
        be:
            '后台的小星星，日常必不可缺少的是各种后台变成语言（PHP,java等），结合数据库、服务器等共同组建一个功能完善的web服务器端，实现数据的处理、分析与下发，性能的优化等工作。只要你有学习的热情和团队合作，欢迎加入我们',
        devops:
            '合格运维的日常是进行工作室服务器、各种线上服务的基础运维。我们也将进行服务发布、更新和维护。Starstudio DevOps期待你的加入',
        android:
            'Android开发，我们需要你有良好的java和Android开发基础，能够熟练的使用git和数据库，能够在开发过程中善于和其他方向交流，对待问题能够有自己的思考和创造。我们更希望你能够有学习新事物的能力和决心',
        ios: `你有用过苹果的设备么？
                你喜欢苹果的设计理念么？
                加入我们吧，iOS小分队将带领你创造自己的APP，
                在苹果强大的跨平台支持下，你的一套代码将能适配iOS、iPadOS、macOS等多方平台，
                学一技而致以多用，心动了么？
                
                偷偷告诉你，
                比起其他方向，iOS组更像一个果粉的大家庭，
                在这里，你可以学会如何让你的设计“果味”十足，
                可以第一时间交流最新的技术资讯，
                可以在水群中学到macOS的实用技巧，
                更可以～～跟着群友提升“垃圾佬”的自我修养～～。
                
                我们诚心邀您加入星辰工作室iOS组，与我们一同迸发自己的热诚，一同在互联网的时代中不断学习、成长！`,
    };
    // const history = useHistory()

    return (
        <div className='branch'>
            <header className='branch-title'>方向简介</header>
            <main>
                <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                >
                    <Menu.Item key="pm">产品</Menu.Item>
                    <Menu.Item key="design">设计</Menu.Item>
                    <Menu.Item key="fe">前端</Menu.Item>
                    <Menu.Item key="be">后台</Menu.Item>
                    <Menu.Item key="devops">DevOps</Menu.Item>
                    <Menu.Item key="android">Android</Menu.Item>
                    <Menu.Item key="ios">iOS</Menu.Item>
                </Menu>
                <p className="branch-introd">{introdInfos[current]}</p>
            </main>
            {/* <footer className='goto-answer'>
                <button onClick={() => {
                    // ! change to the fixed position
                    console.log(current)
                    history.push('#fe')                    
                }}>进入答题</button>
            </footer> */}
        </div>
    );
};

export default Branch;
