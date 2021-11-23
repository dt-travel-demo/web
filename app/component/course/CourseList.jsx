import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '../../assets/css/page/course-list.scss';


export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        list: PropTypes.array.isRequired,
    }


    render() {
        let { list = [] } = this.props;

        return <div className='course-list'>
            <ul >
                {list.map((b, i) => {
                    let { img=require('../../assets/image/tmp/course/course.jpg') } = b;
                    return <li key={i}>
                        <img src={img} />
                        <div className="btm-info">
                            <div className="title">这里是课程的标题</div>
                            <div className="num">2344人已报名</div>
                        </div>
                    </li>
                })}

                <div className='clearfix' />
            </ul>
        </div>

    }
}
