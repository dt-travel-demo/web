import React from 'react';
import { App, U, Utils } from "../../common";
import _Data from "../../common/data";
import '../../assets/css/page/scenic.scss';
import { Loading } from '../Comps';
import { Card } from 'antd';

const { linksgo = [] } = _Data;
export default class Scenic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.match.params.id),
            scenic: {},
            href: "#scenic/0",
            pages: document.getElementsByClassName('page'),
            margin: -600,
            margin2: 0
        };
    }

    componentDidMount() { }

    hrefChange = (index) => {
        let { href } = this.state
        href = "#scenic/0/" + index
        this.setState({ href: href })
    }

    render() {
        let { scenic = {}, href } = this.state;
        let { id = 0, title = "上海迪士尼", info = "上海迪士尼度假区位于上海浦东新区，是中国内地首个迪士尼度假区，你可以在此亲历许多全球迪士尼乐园中的“第一”，包括最大的迪士尼城堡、首个以海盗为主题的园区、最长的迪士尼花车巡游路线等，身临其境地感受神奇王国。上海迪士尼乐园分为七个各具特色的主题园区。", policy = "儿童* 游园当日年龄在3周岁（含）至11周岁（含）；或身高1.0米以上至1.4米（含1.4米）享受优惠票。 游园当日年龄在3周岁以下或身高1.0米及以下的婴幼儿免票入园。 以年龄为标准享受儿童票或婴幼儿免费入园（如上所述）的儿童或婴幼儿，入园时其监护人必须携带并出示能被接受的儿童或婴幼儿本人含出生日期及照片的政府签发的有效身份证原件（“官方身份证件”）。老年人* 60周岁（含）以上凭老年证或者身份证享受优惠票。残疾人* 凭残疾证享受优惠票", address = "河南省郑州市", time = "9月29日-10月7日 ...", telephone = "400-180-0000", price = 290, img = require('../../assets/image/common/景点.jpg'), salenum = 7330 } = scenic;
        // if (!id) {
        //     return <Loading />
        // }

        return <div className='scenic-page'>
            <div className='inner'>

                <div className='main-wrap'>
                    <h3 className="title">{title}</h3>
                    <div className="price">优惠价：
                        <span className='price-num'>
                            <i>￥</i>
                            {price}</span>
                        起</div>
                </div>

                <div className='details'>
                    <div className='img-wrap'>
                        <img src={img} />
                    </div>
                    <ul className='descr'>
                        <li>当月销量:
                            <span>{salenum} </span>
                            笔</li>
                        <li>景点电话:{telephone}</li>
                        <li>开放时间:{time}</li>
                        <li>景点地址:{address}</li>
                    </ul>
                </div>
            </div>


            <div className='linksgo' id="top-anchor">
                <ul>
                    {linksgo.map((item, index) => {
                        let { label } = item;
                        return <li key={index}>
                            <div className='active'>
                                <a href={href} onClick={() => this.hrefChange(index)}>{label}</a>
                            </div>
                        </li>
                    })}
                </ul>
            </div>

            <div className='book'>
                <div class="item">
                    <div id="after_sale/0/0" class="anchor-element"></div>

                </div>

                <div className='ticket-type'>
                    <p>门票种类：</p>
                    <div className='type-wrap'>
                        <p>成人票</p>
                        <p>儿童票</p>
                        <p>亲子票（1大1小）</p>
                        <p>家庭票（2大1小）</p>
                        <p>学生票</p>
                    </div>
                </div>

                <div className='ticker_content'>
                    <div>
                        <p className='ticket_header'>门票</p>
                    </div>

                    

                </div>
            </div>

            <div className='policy'>
                <h3>优惠政策</h3>
                <p>{policy}</p>

                <h3>优惠政策</h3>
                <p>{info}</p>
            </div>


        </div>;
    }
}
