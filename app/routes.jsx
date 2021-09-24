import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
//首页
import HomeWrap from './component/HomeWrap';

const routes = (
    <HashRouter>
        <Switch>

            <Redirect exact from='/' to='/home' />

            <Route path='/' children={() => (
                <HomeWrap>
                    <Switch>
                    </Switch>
                </HomeWrap>
            )}>
            </Route>
        </Switch>
    </HashRouter>
);

export default routes;
