import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Divider } from 'antd';

import '../../assets/css/page/rec-course-list.scss';


export default class RecCourseList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        list: PropTypes.array.isRequired,
    }


    render() {
        let { list = [] } = this.props;

        return <div className='rec-course-list'>
            <ul >
                {list.map((b, i) => {
                    return <li key={i}>
                        <div className="btm-info">
                            <div className="title">
                                <span>营养师</span>
                                2021年二级造价工程师高校全程训练营这里是标题
                            </div>
                            <div className="stat">
                                <div className="left">
                                    共12章
                                    <Divider type="vertical" />
                                    24节
                                    <Divider type="vertical" />
                                    46课时
                                </div>
                                <div className="trainer">
                                    主讲老师：周杰伦
                                </div>
                            </div>

                            <div className="btm">
                                <div className="price">
                                    <div className='num'>已购买2344</div>
                                    <div className="price">¥<span>1999.00</span>起</div>
                                </div>
                                <div className="btn">报名课程</div>
                            </div>
                        </div>
                    </li>
                })}

                <div className='clearfix' />
            </ul>
        </div>

    }
}
