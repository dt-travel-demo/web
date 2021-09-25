import React from 'react';
import classNames from '_classnames@2.3.1@classnames';
import '../assets/css/home.scss';
import { App, CTYPE, U } from '../common';
import _DATA from '../common/data';
import { MyBanner, TitleBar } from './Comps';

const { banners = [], cards = [], analysts = [], levels = [] } = _DATA.home;
const { analysisTypes = [] } = _DATA.common;
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return <div className='home-page'>

            <MyBanner list={banners} />

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

            <MyBanner list={cards} bannerType={CTYPE.bannerTypes.card} />

            {analysisTypes.length > 0 && <React.Fragment>
                <TitleBar title="经典测试2" />
                <ul className='ul-analysis-grid'>
                    {analysisTypes.map((t, i) => {
                        let { key, label } = t;
                        let noBtm = false;
                        if (analysisTypes.length % 2 == 0) {
                            noBtm = i >= analysisTypes.length - 2;
                        }

                        return <li key={i} onClick={() => {
                            App.go(`/analysis/${key}`);
                        }} className={classNames(`bg-${key}`, { 'li-no-btm': noBtm })}>
                            <div className="label">{label}</div>
                        </li>
                    })}
                </ul>
            </React.Fragment>}


            <TitleBar title="卡牌师推荐" more={{ txt: '排行榜', action: { act: 'ANALYST_RANK' } }} />

            <ul className="ul-analysts">
                {analysts.map((item, i) => {
                    let { name, avatar, level, grade, num, slogan } = item;
                    let levelItem = levels.find(item => item.id == level) || {};
                    return <li key={i}>
                        <div className="index">
                            <span>{i + 1}</span>
                        </div>
                        <div className="avatar">
                            <img src={avatar} />
                        </div>
                        <div className="detail">
                            <div className="name">
                                <p>{U.str.shortStr(name, 4)}</p>
                                <div className={`nameplate nameplate-${levelItem.id}`}>
                                    <span>{levelItem.name}</span>
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
