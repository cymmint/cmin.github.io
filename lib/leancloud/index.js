/***!
 * origin: 摘星少年个人博客。
 * createtime: 2018-01-31
 * author: cmin
 * Copyright(c) 2018 http://cmin.me/
 */
function showTime(Counter){var query=new AV.Query(Counter),entries=[],$visitors=$(".leancloud_visitors");$visitors.each(function(){entries.push($(this).attr("id").trim())}),query.containedIn("url",entries),query.find().done(function(results){var COUNT_CONTAINER_REF=".leancloud-visitors-count";if(0===results.length)return void $visitors.find(COUNT_CONTAINER_REF).text(0);for(var i=0;i<results.length;i++){var item=results[i],url=item.get("url"),time=item.get("time"),element=document.getElementById(url);$(element).find(COUNT_CONTAINER_REF).text(time)}for(var i=0;i<entries.length;i++){var url=entries[i],element=document.getElementById(url),countSpan=$(element).find(COUNT_CONTAINER_REF);""==countSpan.text()&&countSpan.text(0)}}).fail(function(object,error){console.log("Error: "+error.code+" "+error.message)})}function addCount(Counter){var $visitors=$(".leancloud_visitors"),url=$visitors.attr("id").trim(),title=$visitors.attr("data-flag-title").trim(),query=new AV.Query(Counter);query.equalTo("url",url),query.find({success:function(results){if(results.length>0){var counter=results[0];counter.fetchWhenSave(!0),counter.increment("time"),counter.save(null,{success:function(counter){var $element=$(document.getElementById(url));$element.find(".leancloud-visitors-count").text(counter.get("time"))},error:function(counter,error){console.log("Failed to save Visitor num, with error message: "+error.message)}})}else{var newcounter=new Counter,acl=new AV.ACL;acl.setPublicReadAccess(!0),acl.setPublicWriteAccess(!0),newcounter.setACL(acl),newcounter.set("title",title),newcounter.set("url",url),newcounter.set("time",1),newcounter.save(null,{success:function(newcounter){var $element=$(document.getElementById(url));$element.find(".leancloud-visitors-count").text(newcounter.get("time"))},error:function(newcounter,error){console.log("Failed to create")}})}},error:function(error){console.log("Error:"+error.code+" "+error.message)}})}$(function(){var Counter=AV.Object.extend("Counter");1==$(".leancloud_visitors").length?addCount(Counter):$(".post-title-link").length>1&&showTime(Counter)});