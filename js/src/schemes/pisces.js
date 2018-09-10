/***!
 * origin: 摘星少年个人博客。
 * createtime: 2018-09-10
 * author: cmin
 * Copyright(c) 2018 http://cmin.me/
 */
$(document).ready(function(){var $headerInner=$(".header-inner"),$sidebar=$("#sidebar"),getSidebarTop=function(){return $headerInner.height()+10},setSidebarMarginTop=function(sidebarTop){return $sidebar.css({"margin-top":sidebarTop})},mql=window.matchMedia("(min-width: 991px)");setSidebarMarginTop(getSidebarTop()).show(),mql.addListener(function(e){e.matches&&setSidebarMarginTop(getSidebarTop())})});