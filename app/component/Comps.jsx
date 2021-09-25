import { Carousel, Icon } from 'antd-mobile';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from '_classnames@2.3.1@classnames';
import '../assets/css/comps.scss';
import { CTYPE, U } from '../common';

const { bannerTypes } = CTYPE;
class MyBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr: 0
        }
    }

    static propTypes = {
        list: PropTypes.array.isRequired,
        bannerType: PropTypes.symbol
    }

    static defaultProps = {
        bannerType: bannerTypes.banner
    };

    render() {
        let { curr } = this.state;
        let { list = [], bannerType } = this.props;

        let isCard = bannerType == bannerTypes.card;

        return <div className={classNames('my-banner', { 'banner-card': isCard })}>
            <Carousel selectedIndex={curr} infinite afterChange={(curr) => this.setState({ curr })} >
                {list.map((b, i) => {
                    let { img } = b;
                    return <img src={img} key={i} />
                })}
            </Carousel>

            {isCard && <div className="navigator">
                <Icon type="left" onClick={() => {
                    this.setState({
                        curr: curr == 0 ? (list.length - 1) : (curr - 1)
                    })
                }} />
                <p>{curr + 1}/{list.length}</p>
                <Icon type="right" onClick={
                    () => {
                        this.setState({
                            curr: curr == (list.length - 1) ? 0 : (curr + 1)
                        })
                    }
                } />
            </div>
            }
        </div>

    }
}

function TitleBar(props) {
    let { title, more = {} } = props;
    let { txt, action } = more;
    return <div className="title-bar">
        <p>{title}</p>
        {txt && <a onClick={() => {
            action && U.redirect.redirectByAction(action);
        }}>{txt}</a>}
    </div>

}

export { MyBanner, TitleBar };
