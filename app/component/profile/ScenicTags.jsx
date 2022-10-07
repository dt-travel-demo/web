import React from 'react';
import { Modal, Table, Tabs, Tag, Divider, Spin } from 'antd';
import { App, U, Utils } from "../../common";

const TabPane = Tabs.TabPane;

const id_div = 'scenic_tags';

export default class ScenicTags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scenicId: this.props.scenicId,
            scenicTags: [],

            type: 1,
            list: [],
            loading: false,
            spining: false,

            opt: false
            
        };
    }

    componentDidMount() {
        this.loadProps();
        this.loadTags();
        this.loadScenicTags();
    }

    loadProps = () => {
        App.api('usr/scenic/tag_types').then((tagTypes) => {
            this.setState({ tagTypes });
        }
        );
    };

    loadTags = () => {
        this.setState({ loading: true });
        let { type } = this.state;
        App.api('usr/scenic/tags', { tagQo: JSON.stringify({ type }) }).then((tags) => {
            this.setState({
                list: tags, loading: false
            });
        }
        );
    };

    loadScenicTags = () => {
        App.api('usr/scenic/scenic_tags', { scenicId: this.state.scenicId }).then((scenicTags) => {
            this.setState({
                scenicTags
            });
        }
        );
    };

    tabClick = v => {
        this.setState({
            type: parseInt(v),
            list: []
        }, () => {
            this.loadTags();
        });
    };

    close = () => {
        Utils.common.closeModalContainer(id_div);
        this.state.opt && this.props.loadData();
    };

    saveScenicTag = (scenicId, tagId) => {
        this.setState({ spining: true })
        App.api('/usr/scenic/save_scenic_tag', { scenicId, tagId }).then(() => {
            this.loadScenicTags();
            this.setState({ opt: true, spining: false });
        });
    };

    removeScenicTag = (id, index) => {
        App.api('/usr/scenic/remove_scenic_tag', { id }).then(() => {
            let { scenicTags = [] } = this.state;
            this.setState({ scenicTags: U.array.remove(scenicTags, index), opt: true });
        });
    };

    render() {
        let { scenicId, scenicTags = [], tagTypes = [], type, list = [], loading, spining } = this.state;

        return <Modal title={'打标签'}
            getContainer={() => Utils.common.createModalContainer(id_div)}
            visible={true}
            width={'1000px'}
            footer={false}
            onCancel={this.close}>

            <Spin spinning={spining}>
                <Divider>已选标签</Divider>

                {scenicTags.map((scenicTag, index) => {
                    let { id } = scenicTag;
                    let { tag = {} } = scenicTag;
                    return <Tag closable onClose={() => this.removeScenicTag(id, index)} key={id + '-' + index}>
                        {tag.title}
                    </Tag>;
                })}

                <Divider>全部标签</Divider>

                <Tabs onChange={this.tabClick} activeKey={type.toString()}>
                    {tagTypes.map((t, i) => {
                        return <TabPane tab={t.val} key={t.key} />;
                    })}
                </Tabs>


                <Table columns={[{
                    title: '序号',
                    dataIndex: 'index',
                    align: 'center',
                    width: '60px',
                    render: (str, item, index) => index + 1
                }, {
                    title: '名称',
                    dataIndex: 'title',
                    align: 'center'
                }, {
                    title: '热度',
                    dataIndex: 'weight',
                    align: 'center',
                    width: '120px'
                }, {
                    title: '操作',
                    dataIndex: 'opt',
                    align: 'center',
                    width: '80px',
                    render: (obj, tag, index) => {
                        let { id } = tag;
                        let exist = scenicTags.find(item => item.tagId === id);
                        return exist ? '-/-' : <a onClick={() => this.saveScenicTag(scenicId, id)}>使用</a>;
                    }
                }]} rowKey={(record) => record.id} dataSource={list} loading={loading} pagination={false} />
            </Spin>

        </Modal>;

    }
}
