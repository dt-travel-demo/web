import React from 'react';

import '../assets/css/home-wrap.scss';
import { Utils, _DATA } from "../common";
import NavLink from "../common/NavLink";

import classnames from 'classnames';

const { analysisTypes = [] } = _DATA.common;

export default class HomeWrap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPiker: false
        };
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            setTimeout(() => {
                Utils.common.scrollTop();
            }, 500);
        });
    }

    showPicker = (showPiker = false) => {
        this.setState({ showPiker })
    }

    render() {

        let { showPiker } = this.state;

        return <div className='home-wrap'>

            {this.props.children}

            <ul className="main-menu">
                <li>
                    <NavLink to='/home'>
                        <div className="icon home" />
                        <p>首页</p>
                    </NavLink>
                </li>
                <li className="c-btn" onClick={() => {
                    this.showPicker(true);
                }}>
                    <div className="icon start" />
                </li>
                <li>
                    <NavLink to='/profile'>
                        <div className="icon profile" />
                        <p>我的</p>
                    </NavLink>
                </li>
            </ul>

            <div className={classnames("overlay", { 'overlay-fadein': showPiker }, { 'overlay-fadeout': !showPiker })} onClick={() => this.showPicker()} />
            <div className={classnames('start-picker', { 'start-picker-fadein': showPiker }, { 'start-picker-fadeout': !showPiker })}>
                <ul>
                    {analysisTypes.map((t, i) => {
                        let { key, label } = t;
                        return <li key={i}>
                            <i className={`i-${key}`} />
                            <p>{label}</p>
                        </li>

                    })}
                </ul>

                <div className="close" onClick={() => this.showPicker()} />
            </div>

        </div>;
    }
}
