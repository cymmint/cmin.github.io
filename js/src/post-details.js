/***!
 * origin: 摘星少年个人博客。
 * createtime: 2018-09-10
 * author: cmin
 * Copyright(c) 2018 http://cmin.me/
 */
$(document).ready(function(){function initScrollSpy(){function removeCurrentActiveClass(){$(tocSelector+" "+activeCurrentSelector).removeClass(activeCurrentSelector.substring(1))}var tocSelector=".post-toc",$tocElement=$(tocSelector),activeCurrentSelector=".active-current";$tocElement.on("activate.bs.scrollspy",function(){var $currentActiveElement=$(tocSelector+" .active").last();removeCurrentActiveClass(),$currentActiveElement.addClass("active-current")}).on("clear.bs.scrollspy",removeCurrentActiveClass),$("body").scrollspy({target:tocSelector})}function initAffix(){var headerHeight=$(".header-inner").height(),footerOffset=parseInt($(".main").css("padding-bottom"),10),sidebarTop=headerHeight+10;$(".sidebar-inner").affix({offset:{top:sidebarTop,bottom:footerOffset}}),$(document).on("affixed.bs.affix",function(){updateTOCHeight(document.body.clientHeight-100)})}function initTOCDimension(){var updateTOCHeightTimer;$(window).on("resize",function(){updateTOCHeightTimer&&clearTimeout(updateTOCHeightTimer),updateTOCHeightTimer=setTimeout(function(){var tocWrapperHeight=document.body.clientHeight-100;updateTOCHeight(tocWrapperHeight)},0)}),updateTOCHeight(document.body.clientHeight-100);var scrollbarWidth=NexT.utils.getScrollbarWidth();$(".post-toc").css("width","calc(100% + "+scrollbarWidth+"px)")}function updateTOCHeight(height){height=height||"auto",$(".post-toc").css("max-height",height)}initScrollSpy(),NexT.utils.needAffix()&&initAffix(),initTOCDimension()}),$(document).ready(function(){var html=$("html"),TAB_ANIMATE_DURATION=200,hasVelocity=$.isFunction(html.velocity);$(".sidebar-nav li").on("click",function(){var item=$(this),activeTabClassName="sidebar-nav-active",activePanelClassName="sidebar-panel-active";if(!item.hasClass(activeTabClassName)){var currentTarget=$("."+activePanelClassName),target=$("."+item.data("target"));hasVelocity?currentTarget.velocity("transition.slideUpOut",TAB_ANIMATE_DURATION,function(){target.velocity("stop").velocity("transition.slideDownIn",TAB_ANIMATE_DURATION).addClass(activePanelClassName)}):currentTarget.animate({opacity:0},TAB_ANIMATE_DURATION,function(){currentTarget.hide(),target.stop().css({opacity:0,display:"block"}).animate({opacity:1},TAB_ANIMATE_DURATION,function(){currentTarget.removeClass(activePanelClassName),target.addClass(activePanelClassName)})}),item.siblings().removeClass(activeTabClassName),item.addClass(activeTabClassName)}}),$(".post-toc a").on("click",function(e){e.preventDefault();var targetSelector=NexT.utils.escapeSelector(this.getAttribute("href")),offset=$(targetSelector).offset().top;hasVelocity?html.velocity("stop").velocity("scroll",{offset:offset+"px",mobileHA:!1}):$("html, body").stop().animate({scrollTop:offset},500)}),NexT.motion.middleWares.sidebar=function(){var $tocContent=$(".post-toc-content");"post"!==CONFIG.sidebar.display&&"always"!==CONFIG.sidebar.display||$tocContent.length>0&&$tocContent.html().trim().length>0&&NexT.utils.displaySidebar()}});