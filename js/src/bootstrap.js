/***!
 * origin: 摘星少年个人博客。
 * createtime: 2018-09-10
 * author: cmin
 * Copyright(c) 2018 http://cmin.me/
 */
$(document).ready(function(){$(document).trigger("bootstrap:before"),NexT.utils.isMobile()&&window.FastClick.attach(document.body),NexT.utils.lazyLoadPostsImages(),NexT.utils.registerBackToTop(),$(".site-nav-toggle button").on("click",function(){var $siteNav=$(".site-nav"),ON_CLASS_NAME="site-nav-on",isSiteNavOn=$siteNav.hasClass(ON_CLASS_NAME),animateAction=isSiteNavOn?"slideUp":"slideDown",animateCallback=isSiteNavOn?"removeClass":"addClass";$siteNav.stop()[animateAction]("fast",function(){$siteNav[animateCallback](ON_CLASS_NAME)})}),CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),NexT.utils.embeddedVideoTransformer(),NexT.utils.addActiveClassToMenuItem(),NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar),$(document).trigger("motion:before"),CONFIG.motion&&NexT.motion.integrator.bootstrap(),$(document).trigger("bootstrap:after")});