import React from 'react';
import '../assets/css/uc-wrap.scss'
import classnames from 'classnames';

import { App } from '../common';

const menus = [
    {
        path: '/uc/profile',
        keys: ['/uc/profile'],
        txt: '个人资料'
    }, {
        path: '/uc/scenics',
        keys: ['/uc/scenic'],
        txt: '我的出行'
    }, {
        path: '/uc/favors',
        keys: ['/uc/favors'],
        txt: '我的收藏'
    }
]
export default class UCWrap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let to = location.hash.split('#')[1];
        return <div className="uc-wrap">
            <div className='inner'>

                <div className='left-menu'>
                    <ul>
                        {menus.map((item, index) => {
                            let { path, keys = [], txt } = item;

                            let active = false;
                            keys.map((k) => {
                                if (to.indexOf(k) > -1) {
                                    active = true;
                                }
                            })
                            return <li key={index} className={classnames({ 'active': active })} onClick={() => App.go(path)}>{txt}</li>
                        })}
                    </ul>
                </div>
                <div className='main-container'>
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

