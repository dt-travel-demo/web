import { Carousel, Icon, SearchBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from '_classnames@2.3.1@classnames';
import '../assets/css/comps.scss';
import { CTYPE, U, Utils, _DATA } from '../common';
import AnalystUtils from './AnalystUtils';
const { levels = [] } = _DATA.home;
const { bannerTypes } = CTYPE;
class MyBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr: 0
        }
    }

    static propTypes = {
        list: PropTypes.array.isRequired,
        bannerType: PropTypes.symbol
    }

    static defaultProps = {
        bannerType: bannerTypes.banner
    };

    render() {
        let { curr } = this.state;
        let { list = [], bannerType } = this.props;

        let isCard = bannerType == bannerTypes.card;

        return <div className={classNames('my-banner', { 'banner-card': isCard })}>
            <Carousel selectedIndex={curr} infinite afterChange={(curr) => this.setState({ curr })} >
                {list.map((b, i) => {
                    let { img } = b;
                    return <img src={img} key={i} />
                })}
            </Carousel>

            {isCard && <div className="navigator">
                <Icon type="left" onClick={() => {
                    this.setState({
                        curr: curr == 0 ? (list.length - 1) : (curr - 1)
                    })
                }} />
                <p>{curr + 1}/{list.length}</p>
                <Icon type="right" onClick={
                    () => {
                        this.setState({
                            curr: curr == (list.length - 1) ? 0 : (curr + 1)
                        })
                    }
                } />
            </div>
            }
        </div>

    }
}

function TitleBar(props) {
    let { title, more = {} } = props;
    let { txt, action } = more;
    return <div className="title-bar">
        <p>{title}</p>
        {txt && <a onClick={() => {
            action && U.redirect.redirectByAction(action);
        }}>{txt}</a>}
    </div>
}

function AnalystRankList(props) {

    //normal mixed without
    let { list = [], indexStyle = 'normal', offset = 1 } = props;

    return <ul className={"ul-analysts"}>
        {list.map((item, i) => {
            let { name, avatar, level, grade, num, slogan } = item;
            let levelItem = levels.find(item => item.id == level) || {};
            return <li key={i} onClick={() => AnalystUtils.analystDetail(item)}>
                <div className={classNames("index", indexStyle)}>
                    <span>{i + offset}</span>
                </div>
                <div className="avatar">
                    <img src={avatar} />
                    <i />
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
}


function SuperTitle(props) {
    let { title } = props;
    return <div className="super-title">
        <span>{title}</span>
    </div>
}

function MySearchBar(props) {
    let { placeholder = '搜索卡牌师名称', onSearch, onCancel } = props;
    return <div className='my-search-bar'>
        <SearchBar placeholder={placeholder} onSubmit={(value) => onSearch && onSearch(value)} onClear={() => onCancel && onCancel()} />
    </div>
}

function NoData(props) {
    let { txt = '暂无内容' } = props;
    return <div className="no-data">
        <p>{txt}</p>
    </div>
}

class AnalystDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
    }

    close = () => {
        let { id } = this.props;
        Utils.common.closeModalContainer(id);
    }

    render() {
        let { analyst = {} } = this.props;

        let { name, avatar, level, grade, number = 'SCCS000012', slogan } = analyst;
        let levelItem = levels.find(item => item.id == level) || {};

        let { rank = 12, joined = 234, score = 34591 } = {};

        return <div>
            <div className="analyst-detail-wrapper">
                <div className="analyst-detail">
                    <div className="inner">


                        <div className={classNames("avatar", `avatar-${levelItem.id}`)}>
                            <img src={avatar} />
                            <div className={`nameplate nameplate-${levelItem.id}`}>
                                {levelItem.name}
                            </div>
                        </div>

                        <div className="name">
                            <p>{U.str.shortStr(name, 4)}</p>
                            <div className={`nameplate nameplate-${levelItem.id}`}>
                                {grade}
                            </div>
                        </div>
                        <div className="number">{number}</div>

                        <div className="slogan">{slogan}</div>

                        <ul className="stat">
                            <li>
                                <p>{rank}</p>
                                <label>当前排名</label>
                            </li>
                            <li>
                                <p>{joined}</p>
                                <label>参与测评</label>
                            </li>
                            <li>
                                <p>{score}</p>
                                <label>TA的积分</label>
                            </li>
                        </ul>

                        <div className="close" onClick={this.close} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export { MyBanner, TitleBar, AnalystRankList, SuperTitle, MySearchBar, NoData, AnalystDetail };
