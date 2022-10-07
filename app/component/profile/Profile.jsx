import React from 'react';
import { App, CTYPE, U, Utils } from "../../common";
import '../../assets/css/page/profile.scss';
import { message, Descriptions, Divider } from 'antd';
import { Loading } from '../Comps';
import ProfileEdit from './ProfileEdit';
import { inject, observer } from 'mobx-react';
@inject("userProfile")
@observer
export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userProps: {}
        };
    }

    componentDidMount() {
        U.setWXTitle('个人中心');
        // App.api('usr/user/props').then((userProps) => {
        //     this.setState({ userProps });
        // });
    }

    syncImg = (img) => {
        let user = this.props.userProfile.getUserProfile || {};
        let { userInfo = {} } = user;
        user.userInfo = {
            ...userInfo,
            avatar: img
        };
        // App.api('usr/user/save_profile', { user: JSON.stringify(user) }).then(() => {
        //     message.success('头像已更新');
        //     this.props.userProfile.setUserProfile(user);
        // })
    };

    render() {
        let user = this.props.userProfile.getUserProfile || {};
        let { userProps = {} } = this.state;

        if (!user.id) {
            return <Loading />
        }

        let { name, userInfo = {}, createdAt, mobile = "123456"} = user;
        let { avatar = require('../../assets/image/common/icon_author_default.png'), gender = 2, profession = 0, education = 0, birthDate, constellation, remark = '这个人很懒，啥都没写' } = userInfo;

        let { professions = [], educations = [] } = userProps;

        let _profession = professions.find(item => item.key == profession) || { val: '未知' };
        let _education = educations.find(item => item.key == education) || { val: '未知' };

        return <div className='profile-page'>

            <div className='brief-info'>

                <Divider orientation="left" plain style={{ fontSize: '20px' }}>基本信息</Divider>

                <div className='user-info'>
                    <div className='avatar' onClick={
                        () => Utils.common.showImgEditor(CTYPE.imgeditorscale.square, avatar, this.syncImg)
                    }>
                        <img className='img' src={avatar} />
                        <div className='cover' />
                    </div>
                    <div className='u-info'>
                        <div className='name'>{name}</div>
                        <div className='btn' onClick={() => {
                            Utils.common.renderReactDOM(<ProfileEdit user={user} userProps={userProps} parent={this} />);
                        }}>编辑资料</div>
                    </div>
                </div>
                <Divider orientation="left" plain style={{ fontSize: '20px' }}>我的资料</Divider>
                <Descriptions bordered>
                    <Descriptions.Item label="手机号">{mobile}</Descriptions.Item>
                    <Descriptions.Item label="性别">{gender == 2 ? '女' : '男'}</Descriptions.Item>
                    <Descriptions.Item label="注册时间">{U.date.format(new Date(createdAt), "yyyy-MM-dd HH:mm")}</Descriptions.Item>
                    <Descriptions.Item label="生日">{U.date.format(new Date(birthDate), 'MM-dd')}</Descriptions.Item>
                    <Descriptions.Item label="星座">{constellation}</Descriptions.Item>

                    <Descriptions.Item label="学历">{_education.val}</Descriptions.Item>
                    <Descriptions.Item label="专业">{_profession.val}</Descriptions.Item>
                    <Descriptions.Item label="备注">{remark}</Descriptions.Item>
                </Descriptions>
            </div>
        </div >;
    }
}
