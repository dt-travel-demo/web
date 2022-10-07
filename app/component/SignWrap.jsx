import React from 'react';
import '../assets/css/page/signin.scss'

export default class SignWrap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <div className="signin-page">
            <div className='cover' />
            <div className='form-wrapper'>
                <div className='logo' />
                {this.props.children}
            </div>
            <div className='slogan'>放松身心，成就自我生活，尽在DT-旅游！</div>
        </div>
    }
}

