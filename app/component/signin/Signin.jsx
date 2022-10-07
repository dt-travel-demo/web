import React from 'react';
import { App, U } from "../../common";
export default class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        U.setWXTitle('登录');
    }

    signin = () => {
        let { user } = this.state;
        // App.api('usr/user/signin', {
        //     user: JSON.stringify(user)
        // }).then(res => {
        //     let { user = {}, userSession = {} } = res;
        //     App.saveCookie('user-profile', JSON.stringify(user));
        //     App.saveCookie('user-token', userSession.token);
            App.go('/');
        // })
    };

    render() {

        let { user = {} } = this.state;
        let { mobile, password } = user;
        return <div className="form">

            <div className='input-wrapper'>
                <div className="line">
                    <input placeholder="请输入手机号" value={mobile} onChange={(e) => {
                        this.setState({
                            user: {
                                ...user,
                                mobile: e.target.value
                            }
                        })
                    }} />
                </div>
                <div className="line">
                    <input type="password" placeholder="请输入密码" value={password} onChange={(e) => {
                        this.setState({
                            user: {
                                ...user,
                                password: e.target.value
                            }
                        })
                    }} />
                </div>

            </div>
            <div className='btn' onClick={this.signin}>登录</div>
            <a className='signup' onClick={() => App.go('/sign/up')}>注册</a>
        </div>

    }
}

