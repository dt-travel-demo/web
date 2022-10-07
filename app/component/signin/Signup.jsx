import React from 'react';
import { App, CTYPE, U } from "../../common";
import { message } from 'antd';
import classnames from 'classnames';
export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valCode: {
                userType: CTYPE.userType.user,
                accountType: CTYPE.accountType.mobile
            },
            count: 60,
            disabled: false
        };
        this.timerId = 0;
    }

    componentDidMount() {
        U.setWXTitle('注册');
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    sendValCode = () => {
        let { valCode = {} } = this.state;
        let key = new Date().getTime();
        valCode.key = key;
        App.api("common/gen_valCode_reset_pwd", {
            valCode: JSON.stringify(valCode)
        }).then(() => {
            this.startTimer();
            this.setState({
                disabled: true, valCode
            });
            message.success("验证码发送成功请注意查收");
        });
    };

    startTimer = () => {
        this.timerId = setInterval(() => {

            let { count } = this.state;

            if (count - 1 <= 0) {
                this.setState({
                    disabled: false,
                    count: 60
                });
                clearInterval(this.timerId);
            } else {
                this.setState({
                    disabled: true,
                    count: count - 1
                });
            }
        }, 1000);
    };

    signup = () => {
        let { user = {} ,valCode={}} = this.state;
        let { account } = valCode;
        let { password } = user;
        if (!U.str.isChinaMobile(account)) {
            message.warn("请填写正确的手机号");
            return;
        }
        // if (U.str.isEmpty(code)) {
        //     message.warn("请填写验证码");
        //     return;
        // }
        if (!U.str.passwordLengthValid(password)) {
            message.warn("密码格式不正确");
            return;
        }
        // App.api('usr/user/signup', {
        //     user: JSON.stringify(user),
        //     // valCode: JSON.stringify(valCode)
        // }).then(() => {
        //     message.success('注册成功，请登录');
            setTimeout(() => {
                App.go('/sign/in');
            }, 1000)
        // })
    };

    modValCoe = (field, val) => {
        let { valCode = {} } = this.state;
        valCode[field] = val;
        this.setState({ valCode });
    }

    modUser = (field, e) => {
        let { user = {} } = this.state;
        user[field] = e.target.value;
        this.setState({ user });
    }

    render() {

        let { valCode = {}, user = {}, disabled, count } = this.state;
        let { name, password } = user;
        let { account} = valCode;

        let isMobile = U.str.isChinaMobile(account);

        return <div className="form">

            <div className='input-wrapper'>
                <div className="line">
                    <input placeholder="姓名" value={name} onChange={(e) => {
                        this.modUser('name', e);
                    }} />
                </div>
                <div className="line">
                    <input placeholder="请输入手机号" value={account} onChange={(e) => {
                        let _account = U.str.trim(e.target.value);
                        this.modValCoe('account', _account);
                    }} />
                </div>
                {/* <div className="line">
                    <input maxLength={6} value={code} className="code-input" placeholder="请输入验证码"
                        onChange={(e) => {
                            this.modValCoe('code', e.target.value);
                        }}
                    />
                    <div className={classnames("code-btn", { "disabled": disabled || !isMobile })}
                        onClick={() => isMobile && !disabled && this.sendValCode()}>
                        {disabled ? `${count}秒后获取` : '获取验证码'}
                    </div>
                </div> */}
                <div className="line">
                    <input type="password" placeholder="请输入密码" value={password} onChange={(e) => {
                        this.modUser('password', e);
                    }} />
                </div>
            </div>

            <div className='btn' onClick={this.signup}>注册</div>
            <a className='signup' onClick={() => App.go('/sign/in')}>登录</a>
        </div>

    }
}

