import React from 'react';
import { _DATA } from '../common';

let { analysisTypes = [] } = _DATA.common;

export default class Analysis extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.match.params.type,
        };
    }


    componentDidMount() {
        let { type } = this.state;

        let item = analysisTypes.find(item => item.key == type) || {};
        this.setState({
            item
        })

    }

    render() {

        let { item = {} } = this.state;
        let { label, intro } = item;

        return <div >

            {label}
            <br />
            {intro}
            
        </div>;
    }
}
