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

        </div>;
    }
}
