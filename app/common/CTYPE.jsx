const CTYPE = (() => {

    return {
        pagination: { pageSize: 10 },

        namespace: {
            default: 'file'
        },
        //图片裁切工具比例
        imgeditorscale: {
            square: 1,
            rectangle_h: 0.5625,
            identity: 0.63
        },
        bannerTypes: {
            banner: Symbol('banner'),
            ad: Symbol('ad'),
            house: Symbol('house'),
            estate: Symbol('estate')
        },

        formItemLayout: {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        },

        colors: ['#f50', '#2db7f5', '#87d068', '#108ee9'],

        accountType: { mobile: 1 },
        userType: { user: 2 },



    };

})();

export default CTYPE;
