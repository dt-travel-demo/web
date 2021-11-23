import React from 'react';
import classNames from 'classnames';
import '../assets/css/dfyx.scss';
import { App, CTYPE, U } from '../common';
import _DATA from '../common/data';
import { AnalystRankList, MyBanner, TitleBar, Nav, Notice } from './Comps';
import CourseList from './course/CourseList';
import RecCourseList from './course/RecCourseList';

const { banners = [], cards = [], analysts = [], levels = [], cates = [] } = _DATA.home;
const { analysisTypes = [] } = _DATA.common;
const { messages = [] } = _DATA;
export default class Dfyx extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return <div className='dfyx-page'>

            <MyBanner list={banners} bannerType={CTYPE.bannerTypes.fullBanner} />

            <Nav list={cates} />

            <Notice list={messages} />

            <TitleBar title='免费公开课' more={{ txt: '查看更多', action: { act: 'courses' } }} />
            <CourseList list={[{}, {}, {}, {}]} />

            <TitleBar title='精选好课' more={{ txt: '查看更多', action: { act: 'courses' } }} />
            <RecCourseList list={[{}, {}, {}, {}]} />

        </div>;
    }
}
