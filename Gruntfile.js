module.exports = function (grunt) {

    var M = {
		str: function(s) {
			return s < 10 ? '0' + s : s + '';
		},
        ver: function(isMs){ //版本时间
            var D = new Date();
			if(!!isMs) {
				return D.getTime().toString();
			} else {
				return M.str(D.getFullYear()) + M.str(D.getMonth() + 1) + M.str(D.getDate()) + '_' + M.str(D.getHours()) + M.str(D.getMinutes()) + M.str(D.getSeconds());
			}
        }
    };

    // 构建任务配置
    grunt.initConfig({

        //读取package.json的内容
        pkg: grunt.file.readJSON('package.json'),

        //注释文件描述
        meta: {
            banner: '/***!\n' +
            ' * origin: <%= pkg.description %>\n' +
            ' * createtime: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * author: <%= pkg.author %>\n' +
            ' * Copyright(c) <%= grunt.template.today("yyyy") %> <%= pkg.hostname %>\n' +
            ' */\n'
        },

        //压缩js
        uglify: {
            //文件头部输出信息
            options: {
                banner: '<%= meta.banner %>', //添加注释头
                mangleProperties: false, //是否混淆-属性 [慎用，混淆属性后可能后导致某些方法出错]
                mangle: false, //是否混淆-变量名
                drop_console: true, //删除console.*
                beautify: false //格式化JS
            },
            jsCompress: {
                files: [{
                    expand: true, //动态扩展
                    //相对路径
                    cwd: '<%= pkg.repository %>', //当前工作路径
                    dest: '<%= pkg.repository %>', //输出目录(直接覆盖)
                    src: ['**/*.js', '!**/*.min.js'], //要处理的文件格式 (不压缩 min.js)
                    ext: '.js' //目标文件路径中文件的扩展名
                }]
            }
        },

        //LESS
        less: {
            compile: {
                expand: true,
                cwd: '<%= pkg.repository %>',
                dest: '<%= pkg.repository %>',
                src: ["**/*.less", "!**/{var,base,fun,modal,cmin*}.less"],
                ext: ".css"
            }
        },

        //压缩css
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '<%= meta.banner %>',
                beautify: {
                    ascii_only: true //中文ascii化，非常有用，防止中文乱码
                },
                compatibility: 'ie8', //设置兼容模式
                noAdvanced: true //取消高级特性
            },
            cssCompress: {
                files: [
                    {
                        expand: true, //动态扩展
                        //flatten: true, //平坦输出
                        //相对路径
                        cwd: '<%= pkg.repository %>',
                        dest: '<%= pkg.repository %>',
                        src: ['**/*.css', '!**/*.min.css'],
                        ext: '.css'
                    }
                ]
            }
        },

        //CSS前端添加
        autoprefixer: {
            options: {
                browserslist: ['last 2 versions']
            },
            addPrefix: {
                expand: true,
                cwd: '<%= pkg.repository %>',
                dest: '<%= pkg.repository %>',
                src: ['**/*.css']
            }
        },

        //压缩图片
        imagemin: { //NodeJS V5 支持
            static: {
                options: {
                    optimizationLevel: 7, // png图片优化水平，3是默认值，取值区间0-7
                    svgoPlugins: [{ removeViewBox: false }]
                }
            },
            dynamic:{
                files: [{
                    expand: true,
                    cwd: '<%= pkg.repository %>',
                    src: ['**/*.{png,jpg,jpeg,gif,webp,svg,ico}'],
                    dest: '<%= pkg.repository %>'
                }]
            }
        },

        //压缩HTML
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                removeCommentsFromCDATA: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                //removeEmptyAttributes: true,
                //removeOptionalTags: true
            },
            html: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.repository %>',
                    dest: '<%= pkg.repository %>',
                    src: ['**/*.{html}']
                }]
            }
        }
    });


    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-uglify'); //JS压缩
    grunt.loadNpmTasks('grunt-contrib-less'); //less简析
    grunt.loadNpmTasks('grunt-contrib-cssmin'); //CSS压缩
    grunt.loadNpmTasks('grunt-autoprefixer'); //CSS前缀添加
    grunt.loadNpmTasks('grunt-contrib-imagemin'); //图像压缩
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); //HTML压缩


    // 执行的任务 - 顺序执行
    grunt.registerTask('default', [
        'uglify',
        'less',
        'cssmin',
        'autoprefixer',
        'imagemin',
        'htmlmin'
    ]);

};