import { Toast } from 'antd-mobile';
import React from 'react';
import classNames from 'classnames';
import '../assets/css/my-analysis.scss';
import { U, _DATA } from '../common';
import AnalystUtils from './AnalystUtils';
import { MyTabs, NoData } from './Comps';

const { analysisTypes = [] } = _DATA.common;
const { analysisList = [] } = _DATA.analysis;
const { analysisTabs = [] } = AnalystUtils;
export default class MyAnalysis extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: this.props.match.params.tabIndex,
            loaded: false
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        Toast.loading('数据加载中...', 1, null, false);
        this.setState({ loaded: false })
        setTimeout(() => {
            let { tabIndex } = this.state;
            let statusArr = analysisTabs[tabIndex].statusArr;
            let list = analysisList.filter(item => statusArr.length == 0 || statusArr.indexOf(item.status) > -1) || [];
            this.setState({
                list, loaded: true
            });
            Toast.hide();
        }, 800)
    }

    onChange = (key, tabIndex) => {
        this.setState({ tabIndex }, this.loadData);
    }

    render() {

        let { tabIndex, list = [], loaded } = this.state;
        let length = list.length;

        console.log(tabIndex)

        return <div className='my-analysis'>

            <MyTabs tabs={analysisTabs} tabIndex={tabIndex} onChange={this.onChange} />

            {loaded && <ul className="ul-analysis">
                {list.map((item, i) => {
                    let { title, type, createdAt, status, activityType } = item;

                    let typeItem = analysisTypes.find(item => item.key == type) || {};

                    return <li key={i} >
                        <img className='icon' src={typeItem.icon} />

                        <div className="content">
                            <div className="top">
                                <div className="title">
                                    {U.str.shortStr(title, 10)}
                                </div>
                                {activityType == 2 && <div className="tag">卡牌之夜</div>}
                            </div>
                            <div className="time">{U.date.format(new Date(createdAt), 'yyy-MM-dd HH:mm')}</div>
                        </div>
                        {status == 5 && <div className="btn">去评价</div>}
                    </li>
                })}
            </ul>}

            {loaded && length == 0 && <NoData />}

        </div>;
    }
}
