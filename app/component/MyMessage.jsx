import React from 'react';
import { Toast } from '_antd-mobile@2.3.4@antd-mobile';
import '../assets/css/my-message.scss';
import { U, _DATA } from '../common';

const { messages = [] } = _DATA;
export default class MyMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        U.setWXTitle('我的消息');
        setTimeout(this.initData, 1000)
    }

    initData = () => {

        let alla = document.body.getElementsByTagName("a");

        messages.map((msg) => {
            let { txt } = msg;
            let dom = U.htmlstr.html2dom(txt);
            let as = dom.getElementsByTagName("a");
            for (let i = 0; i < as.length; i++) {
                let a = as[i];
                let seq = a.dataset['seq'];
                if (seq) {
                    for (let j = 0; j < alla.length; j++) {
                        let aa = alla[j];
                        if (aa.dataset['seq'] == seq) {
                            aa.onclick = () => this.preview({ type: a.dataset['type'], id: a.dataset['id'] });
                        }
                    }
                }
            }
        })
    }

    preview = (data) => {
        let { type, id } = data;
        Toast.info(type + '-' + id);
    }

    render() {

        return <div className='my-message'>

            <ul>
                {messages.map((msg, index) => {
                    let { txt, createdAt } = msg;
                    return <li key={index}>
                        <p>{U.date.format(new Date(createdAt), 'MM-dd HH:mm')}</p>
                        <div className="rich-text-container" dangerouslySetInnerHTML={{ __html: txt }} />
                        <div className="more">查看更多</div>
                        <div className="clearfix" />
                    </li>
                })}
            </ul>
        </div>;
    }
}
