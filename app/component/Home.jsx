import { Carousel } from 'antd-mobile';
import React from 'react';
import '../assets/css/home.scss';
import { App } from '../common';
import _DATA from '../common/data';
import { TitleBar } from './Comps';

const { banners = [], analysts = [] } = _DATA.home;
const { analysisTypes = [] } = _DATA.common;
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return <div className='home-page'>

            <Carousel infinite >
                {banners.map((b, i) => {
                    let { img } = b;
                    return <img src={img} key={i} />
                })}
            </Carousel>

            <TitleBar title="经典测试" />
            <ul className='ul-analysis-flat'>
                {analysisTypes.map((t, i) => {
                    let { key, label, intro } = t;
                    return <li key={i} onClick={() => {
                        App.go(`/analysis/${key}`);
                    }} className={`bg-${key}`}>
                        <div className="label">{label}</div>
                        <div className="intro">{intro}</div>
                    </li>
                })}
            </ul>

            <TitleBar title="经典测试" more={{ txt: '排行榜', action: { act: 'ANALYST_RANK' } }} />

            <ul className="ul-analysts">
                {analysts.map((item, i) => {
                    let { name, avatar, level, grade, num, slogan } = item;
                    return <li key={i}>
                        <div className="index">
                            <span>{i + 1}</span>
                        </div>
                        <div className="avatar">
                            <img src={avatar} />
                        </div>
                        <div className="detail">
                            <div className="name">
                                <p>{name}</p>
                                <div className="nameplate">
                                    <span>{level}</span>
                                    <span>{grade}</span>
                                </div>
                            </div>
                            <div className="stat">
                                参与解析 <span>{num}</span> 次
                            </div>
                            <div className="slogan">{slogan}</div>
                        </div>
                    </li>
                })}
            </ul>

        </div>;
    }
}
