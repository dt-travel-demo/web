import React from 'react';
import ReactDOM from 'react-dom';
import routers from './routes';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';
import UserProfile from './component/profile/UserProfile'
import 'assets/css/common.scss';

import zhCN from 'antd/lib/locale/zh_CN';

const stores = {
    userProfile: new UserProfile()
};

if (module.hot)
    module.hot.accept();

ReactDOM.render(
    <ConfigProvider locale={zhCN}><Provider {...stores}>{routers}</Provider></ConfigProvider>, document.getElementById('root'));
