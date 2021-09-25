import { Toast } from 'antd-mobile';
import React from 'react';
import '../assets/css/analyst-rank.scss';
import { U, _DATA } from '../common';
import { AnalystRankList, MySearchBar, NoData, SuperTitle } from './Comps';

const { analysts = [] } = _DATA.home;
export default class AnalystRank extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entry: 'rank',
            loaded: false
        };
    }

    componentDidMount() {
        this.setState({
            list: JSON.parse(JSON.stringify(analysts)),
            loaded: true
        })
    }

    loadData = () => {
        Toast.loading('数据加载中...');
        this.setState({ loaded: false })
        setTimeout(() => {
            let { kw } = this.state;
            let list = U.str.isEmpty(kw) ? JSON.parse(JSON.stringify(analysts)) : analysts.filter(item => item.name.indexOf(kw) > -1) || [];
            this.setState({
                list, loaded: true
            });
            Toast.hide();
        }, 800)

    }

    onSearch = (kw) => {
        this.setState({
            list: [], kw, entry: 'search'
        }, this.loadData)
    }

    render() {

        let { kw, entry, list = [], loaded } = this.state;
        let length = list.length;
        console.log(list);
        let isRank = entry == 'rank';

        let topList = [], restList = [];
        if (length > 0 && isRank) {
            topList = list.slice(0, Math.min(3, length));
            restList = list.length > 3 ? list.slice(3, length) : [];
            topList = U.array.swap(topList, 0, 1);
        }

        return <div className='analyst-rank-page'>

            <MySearchBar onSearch={this.onSearch} onCancel={() => {
                this.setState({ kw: null, entry: 'rank' }, this.loadData)
            }} />

            {loaded && isRank && <div className="top-box" >
                <SuperTitle title="卡牌师排行榜" />
                <ul>
                    {topList.map((item, i) => {
                        let { name, avatar } = item;
                        return <li key={i} >
                            <div className="avatar">
                                <div className="icon" />
                                <div className="inner">
                                    <img src={avatar} />
                                </div>
                            </div>
                            <div className="name">
                                <p>{U.str.shortStr(name, 4)}</p>
                                <i />
                            </div>

                        </li>
                    })}
                </ul>
            </div>}

            {loaded && <AnalystRankList list={isRank ? restList : list} offset={isRank ? 4 : 1} />}

            {loaded && length == 0 && <NoData />}

        </div>;
    }
}
