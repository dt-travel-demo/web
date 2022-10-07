import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
//首页
import HomeWrap from './component/HomeWrap';
import Home from './component/page/Home';
import Scenic from './component/page/Scenic';
import Scenics from './component/page/Scenics';

import SignWrap from './component/SignWrap';
import Signin from './component/signin/Signin';
import Signup from './component/signin/Signup';

import UCWrap from './component/UCWrap';
import Profile from './component/profile/Profile';
import ScenicEdit from './component/profile/ScenicEdit';

const routes = (
    <HashRouter>
        <Switch>

            <Redirect exact from='/' to='/home' />

            <Route path='/sign' children={() => (
                <SignWrap>
                    <Switch>
                        <Route path='/sign/in' component={Signin} />
                        <Route path='/sign/up' component={Signup} />
                    </Switch>
                </SignWrap>
            )} />

            <Route path='/' children={() => (
                <HomeWrap>
                    <Switch>
                        <Route path='/uc' children={() => (
                            <UCWrap>
                                <Switch>
                                    <Route path='/uc/profile' component={Profile} />
                                    <Route path='/uc/scenic-edit/:id' component={ScenicEdit} />
                                </Switch>
                            </UCWrap>
                        )} />
                        <Route path='/home' component={Home} />
                        <Route path='/scenic/:id' component={Scenic} />
                        <Route path='/scenics' component={Scenics} />
                    </Switch>
                </HomeWrap>
            )} />

        </Switch>
    </HashRouter>
);

export default routes;
