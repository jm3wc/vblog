module.exports = {
    base: '/dist/',
    title: '链知',
    description: 'Just playing around.',
    themeConfig: {
        // 导航
        nav: [
            // 单个导航
            { text: '首页', link: '/' },
            // 下拉框
            {
                text: "前端开发",
                items: [
                    { text: 'HTML', link: './html' },
                    { text: 'CSS', link: './css' },
                    { text: 'JavaScript', link: './js' },
                    { text: 'ECMAScript6', link: './es6' },
                    { text: 'TypeScript', link: './ts' },
                    { text: 'Git', link: './git' },
                    { text: 'React', link: './react' },
                    { text: 'Vue2', link: './vue2' },
                    { text: 'Vue3', link: './vue3' },
                    { text: 'Node.js', link: './node' },
                    { text: '微信小程序开发', link: './小程序' },
                    { text: 'UniApp', link: './uniapp' },
                    { text: '公众号开发', link: './公众号开发' },
                ]
            },
            {
                text: "PHP",
                items: [
                    { text: '环境搭建', link: '/PHP环境搭建' },
                    { text: 'PHP语法', link: '/PHP语法' },
                    { text: 'Mysql', link: '/mysql' },
                    { text: 'PHP应用', link: '/PHP应用' },
                    { text: 'Composer', link: '/Composer' },
                    { text: 'Thinkphp5.0', link: '/Thinkphp5' },
                    { text: 'Laravel5.6', link: '/Laravel8.5' },
                ],
            },
            {
                text: "网络技术",
                items: [
                    { text: 'TCP/IP协议', link: '/tcpip' },
                    { text: '常见网络命令', link: '/常见网络命令' },
                    { text: '计算机网络', link: '/计算机网络' },
                ],
            },
            {
                text: "运维技术",
                items: [
                    { text: '运维技术', link: '/运维技术' },
                    { text: 'AD域', link: '/AD域' },
                ],
            },
            {
                text: "知识碎片",
                items: [
                    { text: '页面布局', link: '/页面布局' },
                    { text: 'Grid 网格布局', link: '/Grid' },
                    { text: 'Flex 布局', link: '/Flex布局' },
                    { text: 'Less', link: '/less' },
                    { text: 'Sass', link: '/Sass' },
                    { text: 'Canvas', link: '/canvas' },
                    { text: 'JS文档', link: '/JavaScirpt' },
                    { text: 'Node环境搭建', link: '/node环境' },
                    { text: 'JQuery笔记', link: '/jq' },
                    { text: 'Echarts', link: '/echarts' },
                    { text: 'Nginx', link: '/nginx' },
                    { text: 'WordPress', link: '/wordpress' },
                    { text: 'Linux', link: '/linux' },
                ],
            },
            {
                text: "资料分享",
                items: [
                    { text: 'TCP/IP协议', link: 'https://pan.baidu.com/s/1ZRR5l9UMSE99cwLruO9tbA#list/path=%2F' },
                    { text: '网络工程师', link: 'https://pan.baidu.com/s/1LAkV5vQZR1QSyUlv0V6tzQ#list/path=%2F' },
                    { text: 'Linux镜像', link: 'https://pan.baidu.com/s/1mZ6v2Mv0clzMv5tT6_Sobg' },
                    { text: 'Web开发电子书', link: 'https://pan.baidu.com/s/1tByRfM5z4vLywmTt206YZg' },
                    { text: '心理学电子书', link: 'https://pan.baidu.com/s/1zMu6k27Nc6dONGYU8HkC3g#list/path=%2F' },
                    { text: '摄影教程', link: 'https://pan.baidu.com/s/1xiefaWxBqawjg3amStiEKg#list/path=%2F' },
                    { text: '系统激活工具', link: 'https://pan.baidu.com/s/17o_LlD0vxgobMb7e1uXgew#list/path=%2F' },
                    { text: 'office软件', link: 'https://pan.baidu.com/s/1rIBUwPMCTZfPaXI7_HDQ4Q#list/path=%2F' },
                    { text: '计算机维修教程', link: 'https://pan.baidu.com/s/1WSR2TY7-a7PqWB3gYDMv2Q#list/path=%2F' },
                    { text: '英语资料', link: 'https://pan.baidu.com/s/1q5OUrn1k2KTMo6ODU2p9cg#list/path=%2F' },
                    { text: '简历模板', link: 'https://pan.baidu.com/s/1PWLQ5T3PYL5af6Kfo_3NRg#list/path=%2F' },
                    { text: '教资', link: 'https://pan.baidu.com/s/1w0MpJVWiZG5DWj5JjuB74A#list/path=%2F' },
                    { text: '网络工程实战', link: 'https://pan.baidu.com/s/18rxOl7mgSa7jo_QNoXlVOQ#list/path=%2F' },
                    { text: '安防弱点资料', link: 'https://pan.baidu.com/s/1bgoxESvPMmjY6-qHFvj8TQ#list/path=%2F' },
                    { text: 'Adobe软件', link: 'https://pan.baidu.com/s/1JWyRm9L_J1-tU5Ee18ud_Q#list/path=%2F' },
                    { text: 'PPT模板', link: 'https://pan.baidu.com/s/1PXBqWDf4qtIjiVVlijxQtQ#list/path=%2F' },
                    { text: '软考系统集成', link: 'https://pan.baidu.com/s/1Y8q4vXkx9FUpi0U3a7rJKw' },
                    { text: 'ChatGPT', link: '/ChatGPT' },
                ],
            },
        ],

        // 底部
        footer: {
            // message: '如有侵权请联系删除!',
            // copyright: '知否  © 2020-2023',
            message: '<a style="text-decoration: none;" href="http://fxl.web3v.work/images/ewm1.jpg">如有侵权请联系删除!</a>',
            copyright: '链知 © 2010-2024'
        }
    },


}