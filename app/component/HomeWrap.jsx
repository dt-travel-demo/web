import React from 'react';

import '../assets/css/home-wrap.scss';
import { Utils } from "../common";
import NavLink from "../common/NavLink";

export default class HomeWrap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            setTimeout(() => {
                Utils.common.scrollTop();
            }, 500);
        });
    }

    render() {

        return <div className='home-wrap'>

            <ul className="main-menu">
                <li>
                    <NavLink to='/home'>
                        <div className="icon home" />
                        <p>首页</p>
                    </NavLink>
                </li>
                <li className="c-btn">
                    <div className="icon start" />
                </li>
                <li>
                    <NavLink to='/profile'>
                        <div className="icon profile" />
                        <p>个人中心</p>
                    </NavLink>
                </li>
            </ul>

        </div>;
    }
}
