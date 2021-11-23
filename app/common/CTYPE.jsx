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
            card: Symbol('card'),
            fullBanner: Symbol('fullbanner'),
        },

    };

})();

export default CTYPE;
