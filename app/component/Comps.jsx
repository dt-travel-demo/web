import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/comps.scss';
import { Spin, Tag } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { App, CTYPE } from '../common';
import UserUtils from './profile/UserUtils';

function Loading() {
    return <div className='loading-spin'>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        <p>加载中...</p>
    </div>;
}

class ScenicList extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { list = [] } = this.props;

        return <ul className='ul-scenics'>
            {list.map((scenic, index) => {

                let { id, cover, title, descr, user = {}, pv = 0, commentNum = 0, likeNum = 0, tags = [] } = scenic;
                let { avatar = require('../assets/image/common/icon_author_default.png'), name } = user;

                return <li key={index} className='item' onClick={() => App.go(`/scenic/${id}`)}>
                    {cover && <img src={cover} className='cover' />}
                    <div className='a-info'>
                        <a className='title'>{title}</a>
                        <div className='descr'>{descr}</div>
                        <div className='extra'>
                            <div className='author'>
                                <img src={avatar} />
                                <a>{name}</a>
                            </div>
                            <div className='tags'>
                                {tags.map((tag, index) => {
                                    let rand = (index + 1) % 4;
                                    return <Tag color={CTYPE.colors[rand]} key={index}>{tag.title}</Tag>;
                                })}
                            </div>
                            <ul className='stat'>
                                <li className='pv'>{pv}</li>
                                <li className='like'>{likeNum}</li>
                                <li className='comment-num'>{commentNum}</li>
                            </ul>
                        </div>
                    </div>
                </li>
            })}
        </ul>
    }
}

class UserRank extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { list = [] } = this.props;

        return <ul className='user-rank'>
            {list.map((user, index) => {
                let { id, avatar = require('../assets/image/common/icon_author_default.png'), name, gender, profession } = user;
                return <li key={index}>
                    <img src={UserUtils.avatar(user)} className='avatar' />
                    <div className='u-info'>
                        <div className='name'>{name}</div>
                        <div className='profession'>{profession}</div>
                    </div>
                    <div className='more'>
                        <div className='btn'>访问主页</div>
                        <div className='title'>新手</div>
                    </div>
                </li>
            })}
        </ul>
    }
}

export {
    Loading, ScenicList, UserRank
};
