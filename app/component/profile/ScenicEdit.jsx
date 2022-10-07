import React from 'react';
import { Button, Card, Form, Input, message } from 'antd';
import { App, CTYPE, U } from "../../common";
import { PosterEdit } from "../common/CommonEdit";
import HtmlEditor from "../../common/HtmlEditor";
import '../../assets/css/common/common-edit.scss';
import { SaveOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

export default class ScenicEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.match.params.id),

            scenic: {},
            loading: false
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        let { id } = this.state;
        if (id > 0) {
            // App.api('/usr/scenic/scenic', { id }).then(scenic => {
            //     this.setState({ scenic });
            // });
        }
    };

    handleSubmit = () => {
        let { scenic = {} } = this.state;
        let { title = '', descr = '', cover } = scenic;
        if (U.str.isEmpty(title)) {
            message.warn('请添加标题');
        } else if (title.length > 100) {
            message.warn('标题长度不能超过100');
        } else if (U.str.isEmpty(descr)) {
            message.warn('请添加简介');
        } else if (descr.length > 200) {
            message.warn('简介长度不能超过200');
        } else if (U.str.isEmpty(cover)) {
            message.warn('请添加封面图');
        } else {
            this.setState({ loading: true });
            App.api('/usr/scenic/save', { scenic: JSON.stringify(scenic) }).then(() => {
                message.success('保存成功');
                this.setState({ loading: false });
                setTimeout(() => {
                    App.go('/uc/scenics');
                }, 500);
            }, () => this.setState({ loading: false }));
        }
    };

    render() {
        let { scenic = {}, loading } = this.state;
        let { id, title, descr, content, cover } = scenic;
        return <div className='scenic-edit-page'>

            <div className='common-edit-page'>

                <Card title={id ? '编辑文章' : '新建文章'} extra={<Button type="primary" icon={<SaveOutlined />}
                    loading={loading} onClick={() => {
                        this.handleSubmit();
                    }}>保存</Button>}>

                    <FormItem
                        required={true}
                        {...CTYPE.formItemLayout} label='文章标题'>
                        <Input placeholder="请输入文章标题" maxLength={100}
                            value={title}
                            onChange={(e) => {
                                this.setState({
                                    scenic: {
                                        ...scenic,
                                        title: e.target.value
                                    }
                                });
                            }} />
                    </FormItem>

                    <FormItem
                        required={true}
                        {...CTYPE.formItemLayout} label='文章简介'>
                        <Input.TextArea rows={4} placeholder="请输入文章简介" maxLength={200}
                            value={descr}
                            onChange={(e) => {
                                this.setState({
                                    scenic: {
                                        ...scenic,
                                        descr: e.target.value
                                    }
                                });
                            }} />
                    </FormItem>

                    <PosterEdit title='封面图' required={true} type='scale' scale={'140*80'} img={cover} syncPoster={(url) => {
                        scenic.cover = url;
                        this.setState({
                            scenic
                        });
                    }} />

                    <FormItem
                        required={true}
                        {...CTYPE.formItemLayout} label="文章内容">
                        <HtmlEditor content={content} syncContent={(content) => {
                            this.setState({
                                scenic: {
                                    ...scenic,
                                    content
                                }
                            });
                        }} />
                    </FormItem>
                </Card>
            </div>
        </div>;

    }
}
