const _DATA = {

    common: {
        analysisTypes: [{
                key: 1,
                label: '性格测试',
                intro: '这里一段话介绍性格测试',
                icon: require('../assets/image/analysis/icon-analysis-type-1.png')
            },
            {
                key: 2,
                label: '职场测试',
                intro: '这里一段话介绍职场测试',
                icon: require('../assets/image/analysis/icon-analysis-type-2.png')
            },
            {
                key: 3,
                label: '亲子测试',
                intro: '这里一段话介绍亲子测试',
                icon: require('../assets/image/analysis/icon-analysis-type-3.png')
            },
            {
                key: 4,
                label: '情感测试',
                intro: '这里一段话介绍情感测试',
                icon: require('../assets/image/analysis/icon-analysis-type-4.png')
            }
        ]


    },

    home: {
        banners: [{
                img: require('../assets/image/tmp/banner/banner-999.jpg')
            },
            {
                img: require('../assets/image/tmp/banner/banner-1.png')
            },
            {
                img: require('../assets/image/tmp/banner/banner-2.png')
            },
            {
                img: require('../assets/image/tmp/banner/banner-3.png')
            }
        ],
        cates: [{
                img: require('../assets/image/tmp/cate/cate-1.png'),
                name: '公考类型'
            },
            {
                img: require('../assets/image/tmp/cate/cate-1.png'),
                name: '公考类型'
            },
            {
                img: require('../assets/image/tmp/cate/cate-1.png'),
                name: '公考类型'
            },
            {
                img: require('../assets/image/tmp/cate/cate-1.png'),
                name: '公考类型'
            },{
                img: require('../assets/image/tmp/cate/cate-1.png'),
                name: '公考类型'
            },
            {
                img: require('../assets/image/tmp/cate/cate-1.png'),
                name: '公考类型'
            },
            {
                img: require('../assets/image/tmp/cate/cate-1.png'),
                name: '公考类型'
            },
            {
                img: require('../assets/image/tmp/cate/cate-1.png'),
                name: '公考类型'
            }
        ],
        cards: [{
                img: require('../assets/image/tmp/card/card-1.png')
            },
            {
                img: require('../assets/image/tmp/card/card-2.png')
            },
            {
                img: require('../assets/image/tmp/card/card-3.png')
            }
        ],

        levels: [{
            id: 1,
            name: '卡牌导师'
        }, {
            id: 2,
            name: '卡牌大师'
        }, {
            id: 3,
            name: '卡牌师'
        }],

        analysts: [{
            name: '新黛拉',
            avatar: require('../assets/image/tmp/avatar/a-1.jpg'),
            level: 1,
            grade: '卡皇',
            num: 123,
            slogan: '擅长情感分析，专业解答，看破迷局'
        }, {
            name: '新黛拉2',
            avatar: require('../assets/image/tmp/avatar/a-2.jpg'),
            level: 1,
            grade: '卡皇',
            num: 23,
            slogan: '擅长情感分析，专业解答，看破迷局'
        }, {
            name: '新黛拉3',
            avatar: require('../assets/image/tmp/avatar/a-3.jpg'),
            level: 3,
            grade: '卡皇',
            num: 1467,
            slogan: '擅长情感分析，专业解答，看破迷局,擅长情感分析，专业解答，看破迷局'
        }, {
            name: '新黛拉4新黛拉4新黛拉4新黛拉4新黛拉4新黛拉4新黛拉4新黛拉4新黛拉4',
            avatar: require('../assets/image/tmp/avatar/a-4.jpg'),
            level: 2,
            grade: '卡皇',
            num: 123,
            slogan: '擅长情感分析，专业解答，看破迷局'
        }, {
            name: '新黛拉5',
            avatar: require('../assets/image/tmp/avatar/a-2.jpg'),
            level: 3,
            grade: '卡皇',
            num: 123,
            slogan: '擅长情感分析，专业解答，看破迷局'
        }]
    },

    analysis: {
        analysisList: [{
                title: '性格测试报告',
                createdAt: 1632728967000,
                status: 5,
                type: 1,
                activityType: 2
            }, {
                title: '情感测试报告',
                createdAt: 1631728967000,
                status: 6,
                type: 4,
                activityType: 1
            }, {
                title: '亲子测试报告',
                createdAt: 1631998967000,
                status: 5,
                type: 3,
                activityType: 1
            }, {
                title: '职场测试报告',
                createdAt: 1633998967000,
                status: 6,
                type: 2,
                activityType: 2
            }, {
                title: '情感测试报告',
                createdAt: 1631728967000,
                status: 5,
                type: 4,
                activityType: 1
            }, {
                title: '情感测试报告',
                createdAt: 1631728967000,
                status: 6,
                type: 4,
                activityType: 1
            }

        ]
    },

    // id?
    // type 1.system 2.analyst 3.user 
    // fromId 0 system >0 analystId | userId
    // toId self
    // json  payload:{
    //          type:'' //coupon  product trade 
    //          renferId,
    //         txt:'',
    // imgs: [],
    // audio: {},
    // video: {},
    // redpack: {},
    // location: {},
    // coupon: {},
    // product:{},
    // trade:{}
    //     },
    // createdAt:xxx
    // readAt:xxx
    //  user:{},
    //  analyst:{}

    messages: [{
            txt: '邀请你来玩 <a data-seq="1-1" data-type="1" data-id="1" >情感测试</a>，快去看看吧～<a href="www.baidu.com" >百度一下 你就知道</a>',
            createdAt: 1630810567234
        },
        {
            txt: '你的测试报告已出，快去看看吧～',
            createdAt: 1633410567234
        },
        {
            txt: '邀请你来玩 <a data-seq="1-2" data-type="1" data-id="2">职场测试</a>，快去看看吧～',
            createdAt: 1632810567234
        }
    ]



};


export default _DATA;