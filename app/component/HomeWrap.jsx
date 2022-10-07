import React from 'react';

import '../assets/css/home-wrap.scss';
import { Utils, App } from "../common";
import NavLink from "../common/NavLink";
import { Avatar, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { inject, observer } from 'mobx-react';

@inject("userProfile")
@observer
export default class HomeWrap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            setTimeout(() => {
                Utils.common.scrollTop();
            }, 500);
        });

        App.api('usr/user/touch_profile').then((profile) => {
            let { user = {} } = profile;
            this.props.userProfile.setUserProfile(user);
        });

    }

    render() {

        let user = this.props.userProfile.getUserProfile || {};

        return <div className='home-wrap'>

            <div className='top-bar'>
                <div className='inner'>
                    <div className='logo' />
                    <ul className='menu'>
                        <li>
                            <NavLink to='/home'>首页</NavLink>
                        </li>
                        <li>
                            <NavLink to='/scenics'>景点</NavLink>
                        </li>
                    </ul>

                    <div className='signin'>
                        {!!user.id &&
                            <Dropdown trigger="click" overlay={<div className="uc-menu">
                                <Menu>
                                    <Menu.Item>
                                        <a onClick={() => App.go('/uc/profile')}>个人中心</a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a onClick={() => {
                                            App.logout();
                                            App.go('/sign/in');
                                        }}>退出登录</a>
                                    </Menu.Item>
                                </Menu>
                            </div>}>

                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <Avatar src={user.userInfo.avatar} size={24} />
                                    &nbsp;&nbsp;{user.name} <DownOutlined />
                                </a>
                            </Dropdown>
                        }
                        {!user.id && <a onClick={() => App.go('/sign/in')}>登录</a>}
                    </div>

                    <div className='search-input'>
                        <input placeholder='请输入关键词' />
                        <div className='btn' />
                    </div>


                </div>
            </div>

            <div className='inner-page'>
                {this.props.children}
            </div>


        </div>;
    }
}
