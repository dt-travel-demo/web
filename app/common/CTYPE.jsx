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

        houseStyles: {
            box: Symbol('box'),
            flat: Symbol('flat')
        },

        colors: ['白色', '红色', '黄色', '土豪金', '绿色', '蓝色', '黑色', '紫色'],

        specs: ['30mmX40mm', '35mmX50mm'],

        roomTypes: [{ key: 'ROOM', label: '卧室' }, { key: 'HALL', label: '客餐厅' }, {
            key: 'KITCHEN',
            label: '厨房'
        }, { key: 'WASH', label: '卫生间' }],


        apartmentFeatureCodes: [{ label: '一室', key: '1ROOM' }, { label: '二室', key: '2ROOM' }, {
            label: '三室',
            key: '3ROOM'
        }, {
            label: '四室',
            key: '4ROOM'
        }, { label: '五室', key: '5ROOM' },
        { label: '无', key: '0HALL' }, { label: '一厅', key: '1HALL' }, { label: '二厅', key: '2HALL' }, {
            label: '三厅',
            key: '3HALL'
        },
        { label: '无', key: '0KITCHEN' }, { label: '一厨', key: '1KITCHEN' },
        { label: '无', key: '0WASH' }, { label: '一卫', key: '1WASH' }, { label: '二卫', key: '2WASH' }, {
            label: '三卫',
            key: '3WASH'
        }, {
            label: '四卫',
            key: '4WASH'
        }],

        roomStatus: [{ label: '未出租', val: 1, color: '#87d068' }, { label: '已出租', val: 2, color: '#f50' }, {
            label: '配置中',
            val: 3,
            color: '#FFC64B'
        }, {
            label: '下架',
            val: 4, color: '#BBBBBB'
        }],

        rentStatus: [{ label: '在租', val: 1, color: '#CF3427' }, { label: '已退租', val: 2, color: '#D8D8D8' }, {
            label: '已退租',
            val: 3,
            color: '#D8D8D8'
        }],

        billStatus: [{ label: '全部账单', val: 0 }, { label: '未审核', val: 1 }, { label: '已审核', val: 2 }, { label: '已废弃', val: 3 }],

        furniteresMap: [{ key: 'smartLock', label: '智能锁', icon: 'iconzhinengsuo' }, {
            key: 'heating',
            label: '供暖',
            icon: 'icon_heating'
        }, {
            key: 'elevator',
            label: '电梯',
            icon: 'icon_elevator'
        }, { key: 'freewifi', label: '免费wifi', icon: 'icon_wifi' }, { key: 'router', label: '路由器', icon: 'iconluyouqi' },
        { key: 'ac', label: '空调', icon: 'icon_ac' }, { key: 'centralAC', label: '中央空调', icon: 'icon_centralAC' }, {
            key: 'electricWaterHeater',
            label: '电热水器',
            icon: 'iconreshuiqi'
        }, { key: 'gasWaterHeater', label: '壁挂炉', icon: 'iconbigualu' }, {
            key: 'bathHeater',
            label: '浴霸',
            icon: 'icon_bathHeater'
        },
        { key: 'washer', label: '洗衣机', icon: 'iconxiyiji' }, {
            key: 'sofa',
            label: '沙发',
            icon: 'iconshafa'
        }, { key: 'teatable', label: '茶几', icon: 'iconchaji' }, { key: 'diningTable', label: '餐桌', icon: 'icon_diningTable' },
        { key: 'smokeExhaust', label: '油烟机', icon: 'iconyouyanji' }, {
            key: 'microwaveOven',
            label: '微波炉',
            icon: 'iconweibolu'
        }, {
            key: 'refrigerator',
            label: '冰箱',
            icon: 'iconbingxiang'
        }, { key: 'desk', label: '桌子', icon: 'iconzhuozi' }, { key: 'chair', label: '椅子', icon: 'iconyizi' },
        { key: 'bookrack', label: '书架', icon: 'iconshujia' }, { key: 'closet', label: '衣柜', icon: 'iconyigui' }, {
            key: 'bed',
            label: '床',
            icon: 'iconchuang'
        }, { key: 'mattress', label: '床垫', icon: 'iconchuangdian' }]

    };

})();

export default CTYPE;
