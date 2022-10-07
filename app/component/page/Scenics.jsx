import React from 'react';
import { App, CTYPE, U, Utils } from "../../common";
import '../../assets/css/page/scenics.scss';
import { Pagination } from 'antd';
import { ScenicList, Loading } from '../Comps';
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],

            pagination: {
                pageSize: CTYPE.pagination.pageSize,
                current: 0,
                total: 0
            },
        };
    }

    componentDidMount() {
        U.setWXTitle('文章');
        this.loadData();
    }

    loadData = () => {
        this.setState({ loading: true });
        let { pagination = {} } = this.state;
        App.api('common/home/scenics', {
            scenicQo: JSON.stringify({
                pageNumber: pagination.current,
                pageSize: pagination.pageSize
            })
        }).then((result) => {
            let { content = [] } = result;
            let pagination = Utils.pager.convert2Pagination(result);
            this.setState({
                list: content,
                pagination,
                loading: false
            });
        });
    };

    handleTableChange = (pagination) => {
        this.setState({
            pagination
        }, this.loadData);
    };


    render() {

        let { list = [], pagination = {}, loading } = this.state;
        if (loading) {
            return <Loading />
        }

        return <div className='scenics-page'>
            <div className='inner'>

                <ScenicList list={list} />

                <Pagination current={pagination.current} total={pagination.total} />

            </div>

        </div>;
    }
}
