import React from 'react';
import classNames from 'classnames';
import '../assets/css/profile.scss';
import { App } from '../common';
import AnalystUtils from './AnalystUtils';
import { TitleBar } from './Comps'

let { analysisTabs = [] } = AnalystUtils;
export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        let { msgs = [''], user = {
            name: '会飞的金鱼',
            avatar: require('../assets/image/tmp/avatar/a-1.jpg')

        }, stat = {
            analystNum: 3, analysisNum: 12, activityNum: 2
        } } = this.state;


        let { name, avatar } = user;
        let { analystNum, analysisNum, activityNum } = stat;

        return <div className='profile-page'>

            <div className="tool-bar">

                <div className="tool scan" />
                <div className={classNames("tool", "msg", { "dot": msgs.length > 0 })}
                    onClick={() => App.go('/my-message')} />

            </div>
            <div className="user-info">
                <div className="name">
                    {name}
                </div>
                <div className="avatar">
                    <img src={avatar} />
                    <i />
                </div>
            </div>
            <ul className="stat">
                <li>
                    我的卡牌师<b>{analystNum}</b>
                </li>
                <li>
                    参与评测<b>{analysisNum}</b>
                </li>
                <li>
                    参与活动<b>{activityNum}</b>
                </li>
            </ul>



            <div className="entry">
                <TitleBar title='我的评测报告' more={{ txt: '查看全部', action: { act: 'PATH', payload: { path: '/my-analysis/0' } } }} />

                <ul>
                    {analysisTabs.slice(1, 4).map((t, i) => {
                        return <li key={i} onClick={() => App.go(`/my-analysis/${i + 1}`)}>
                            {t.label}
                        </li>
                    })}
                </ul>

            </div>

        </div>;
    }
}
