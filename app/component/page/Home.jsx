import React from 'react';
import { App, U } from "../../common";
import '../../assets/css/page/home.scss';
import { Divider } from 'antd';
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        U.setWXTitle('首页');
        this.loadData();
    }

    loadData = () => {
        // App.api('/common/home/home').then((home = {}) => {
        //     let { pvScenics = [], commentScenics = [], latestScenics = [], tagTypes = [], latestUsers = [] } = home;
        //     this.setState({ pvScenics, commentScenics, latestScenics, tagTypes, latestUsers });
        // })
    }

    scenic = scenic => {
        App.go(`/scenic/${scenic.id}`)
    }
    render() {

        return <div className='home-page'>
            <div className='inner'>
                <a onClick={() => {
                    this.scenic({ id: 0 })
                }}>景点详情</a>
            </div>

        </div>;
    }
}
