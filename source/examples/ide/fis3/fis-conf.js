fis.require('jello')(fis);

// dev 配置
fis.match('::package', {
    packager: fis.plugin('map', {
        '/static/js/sea-combine.js': [
          '/static/js/sea.js',
          '/static/js/sea-config.js',
        ]
    })
});
fis.match("*.less", {
    release: false
});
fis.match(/static\/less\/(.*pages)\.less/i, {
    parse: fis.plugin('less-2.x'),
    release: '/static/css/$1.css'
});



// Debug 配置
// 打包配置
fis.media('debug')
.match('::package', { // packTo 配置
    packager: fis.plugin('map', {
        '/static/js/sea-combine.js': [
          '/static/js/sea.js',
          '/static/js/sea-config.js',
        ]
    }),
    spriter: fis.plugin('csssprites', {
        margin: '10',
        "background-size": "100px 100px"
    })
})
.match("*.less", { // 处理 less， 压缩 css
    release: false
}).match(/static\/less\/(.*pages)\.less/i, {
    parse: fis.plugin('less-2.x'),
    useSprite: true,
    release: '/static/css/$1.css'
}).match('/static/less/(**.png)', {
    release: '/static/images/$1'
});






// 打包配置
fis.media('prod')
.match('::package', { // packTo 配置
    packager: fis.plugin('map', {
        '/static/js/sea-combine.js': [
            '/static/js/sea.js',
            '/static/js/sea-config.js',
        ]
    })
})
.match('*', {
    useMap: true
})
.match('*.png', { // 压缩 png  fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor'),
    url : '/lldq$0'
})
.match('*.{jpg,jpeg}', { // fis-optimizer-png-compressor 插件进行压缩，已内置
    url : '/lldq$0'
})
.match('*.js', { // 压缩 js，但不压缩 min.js // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js', {
        mangle: {
            except: ['exports', 'module', 'require', 'define', '$']
        },
        compress : {
            drop_console: true
        }
    }),
    url : '/lldq$0'
}).match('*.min.js',{
    optimizer: false
})
.match("*.less", { // 处理 less， 压缩 css， fis-parser-less 插件进行压缩
    release: false
}).match(/static\/less\/(.*pages)\.less/i, {
    optimizer: fis.plugin('clean-css'),
    parse: fis.plugin('less-2.x'),
    release: '/static/css/$1.css',
    url : '/lldq/static/css/$1.css'
}).match('*.css', {
    optimizer: fis.plugin('clean-css'),
    url : '/lldq$0'
})
.match('*.jsp', { // 处理 jsp
        release: '/pages/wap/$0'
    }).match('index.jsp', {
        release: false
    }).match('/page/{*,**/*}.jsp', {
        release: '/pages/wap/$0'
    }
);


// fis.media('upload')
// .match('/static/**.{png,jpg}', {
//     useHash: true,
//     useMap: true,
//     release: '$0',
//     domain: "http://o97bq8v56.bkt.clouddn.com/",
//     deploy: fis.plugin('qiniu', {
//         accessKey: 'l4iPF8EZT4b5owEBpHV9njqB5Zq-vbAIUMtOuPjz',
//         secretKey: 'uvwX-1XX-YE6jaszH1FOL9D2CFN7Muu09wbc72HZ',
//         bucket: 'blog'
//     })
// })