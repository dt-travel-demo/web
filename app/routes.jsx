import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import HomeWrap from './component/HomeWrap';
import Profile from './component/Profile';
import Analysis from './component/Analysis';
import AnalystRank from './component/AnalystRank';
import MyAnalysis from './component/MyAnalysis';
import MyMessage from './component/MyMessage';
import Dfyx from './component/Dfyx';

const routes = (
    <HashRouter>
        <Switch>

            <Redirect exact from='/' to='/home' />

            <Route path='/analysis/:type' component={Analysis} />
            <Route path='/analyst-rank' component={AnalystRank} />
            <Route path='/my-analysis/:tabIndex' component={MyAnalysis} />
            <Route path='/my-message' component={MyMessage} />

            <Route path='/' children={() => (
                <HomeWrap>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/dfyx' component={Dfyx} />
                        <Route path='/profile' component={Profile} />
                    </Switch>
                </HomeWrap>
            )}>
            </Route>
        </Switch>
    </HashRouter>
);

export default routes;
