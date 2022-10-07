import React from 'react';
import { App, CTYPE, U, Utils } from "../../common";
import '../../assets/css/page/profile.scss';
import { message, Button, Descriptions, DatePicker, Divider, Drawer, Form, Input, Radio, Select } from 'antd';

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const id_container = "profile-edit-drawer";
const FormItem = Form.Item;
const { formItemLayout } = CTYPE;
const { TextArea } = Input;

export default class ProfileEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            userProps: this.props.userProps
        };
    }

    save = () => {
        let { user = {} } = this.state;
        let { name } = user;
        if (U.str.isEmpty(name)) {
            message.warn("请输入姓名");
            return;
        }

        App.api('usr/user/save_profile', { user: JSON.stringify(user) }).then(() => {
            message.success('保存成功');
            this.props.parent.props.userProfile.setUserProfile(user);
            this.close();
        })

    }

    close = () => {
        Utils.common.closeModalContainer(id_container);
    }

    modUser = (field, val) => {
        let { user = {} } = this.state;
        user[field] = val;
        this.setState({ user });
    }

    renderSelect = (field, value, label) => {
        let { user = {}, userProps = {} } = this.state;
        let { userInfo = {} } = user;
        return <Form.Item  {...formItemLayout} label={label}>
            <Select style={{ width: 300 }} onChange={(val) => {
                userInfo[field] = val;
                this.modUser(field, userInfo);
            }} value={value}>
                <Select.Option value={0}>请选择</Select.Option>
                {userProps[`${field}s`].map((item, index) => {
                    let { key, val } = item;
                    return <Select.Option value={key} key={index}>{val}</Select.Option>
                })}
            </Select>
        </Form.Item>
    }

    render() {

        let { user = {} } = this.state;

        let { name, userInfo = {} } = user;
        let { gender, profession = 0, education = 0, birthDate, remark } = userInfo;

        let _birthDate = birthDate ? moment(new Date(birthDate), 'YYYY-MM-DD HH:mm Z') : null;

        return <Drawer
            title="修改资料"
            placement="left" width="600"
            getContainer={() => Utils.common.createModalContainer(id_container)}
            onClose={this.close}
            visible={true} footer={
                <div style={{ textAlign: 'right' }} >
                    <Button onClick={this.close} style={{ marginRight: 8 }}>
                        关闭
                  </Button>
                    <Button onClick={this.save} type="primary">
                        提交
                  </Button>
                </div>
            }>

            <div className='brief-info'>

                <Divider orientation="left" plain style={{ fontSize: '20px' }}>基本信息</Divider>

                <FormItem {...formItemLayout} label="姓名" required={true}>
                    <Input value={name} onChange={(e) => {
                        this.modUser('name', e.target.value);
                    }} />
                </FormItem>
                <Form.Item  {...formItemLayout} label="性别">
                    <Radio.Group onChange={(e) => {
                        userInfo.gender = e.target.value;
                        this.modUser('userInfo', userInfo);
                    }} value={gender}>
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item  {...formItemLayout} label="生日">
                    <DatePicker
                        showTime={false}
                        showToday={false}
                        allowClear={false}
                        format="YYYY-MM-DD"
                        placeholder="请选择生日"
                        value={_birthDate}
                        disabledDate={(v) => {
                            let date = new Date();
                            date.setFullYear(date.getFullYear() - 10);
                            return v && v.valueOf() > date.getTime();
                        }}
                        onChange={(v) => {
                            userInfo.birthDate = v.valueOf();
                            this.modUser('userInfo', userInfo);
                        }} />
                </Form.Item>

                <Divider orientation="left" plain style={{ fontSize: '20px' }}>我的资料</Divider>

                {this.renderSelect('education', education, '学历')}
                {this.renderSelect('profession', profession, '专业')}

                <Form.Item  {...formItemLayout} label="个性签名">
                    <TextArea value={remark} placeholder="请输入个性签名" onChange={(e) => {
                        userInfo.remark = e.target.value;
                        this.modUser('userInfo', userInfo);
                    }} />
                </Form.Item>

                {/* <Form.Item  {...formItemLayout} label="学历">
                    <Select style={{ width: 300 }} onChange={(val) => {
                        userInfo.education = val;
                        this.modUser('userInfo', userInfo);
                    }} value={education}>
                        <Option value={0}>请选择</Option>
                        {educations.map((item, index) => {
                            let { key, val } = item;
                            return <Option value={key}>{val}</Option>
                        })}
                    </Select>
                </Form.Item>

                <Form.Item  {...formItemLayout} label="学历">
                    <Select style={{ width: 300 }} onChange={(val) => {
                        userInfo.profession = val;
                        this.modUser('userInfo', userInfo);
                    }} value={profession}>
                        <Option value={0}>请选择</Option>
                        {professions.map((item, index) => {
                            let { key, val } = item;
                            return <Option value={key}>{val}</Option>
                        })}
                    </Select>
                </Form.Item> */}



            </div>
        </Drawer >;
    }
}
