var isQQ = /qq\/\d+/i.test(navigator.userAgent);
var isWeiXin = /MicroMessenger/i.test(navigator.userAgent);

$(function () {
	
	

	var iosUrl = 'https://itunes.apple.com/cn/app/missq/id987828635?mt=8';
	var androidUrl = 'http://a.app.qq.com/o/simple.jsp?pkgname=quq.missq';
	
	var weiLink = 'http://a.app.qq.com/o/simple.jsp?pkgname=quq.missq&g_f=991653';
	
	divWxGuide = $('div.weixin-guide-mask');
	divWxGuide.click(function() {
		divWxGuide.hide();
    });
	
	$('[rel="down"]').click(function () {
		// 安卓未上线提示
//		if (/android/i.test(navigator.userAgent)){
//			alert('安卓版近期上线，敬请期待，么么哒');
//			return false;
//		}
		
		window.location.href = weiLink;
		return false;
		
		
		// 没有应用宝链接,临时使用
		if (isWeiXin || isQQ) {
			divWxGuide.show();
			return false;
		}
		
		// 苹果设备走应用宝断链接
		if (/ipad|iphone|mac/i.test(navigator.userAgent)){
			window.location.href = 'http://mp.weixin.qq.com/mp/redirect?url=' + encodeURIComponent(iosUrl);
		} else if (/android/i.test(navigator.userAgent) && (isWeiXin || isQQ)) {
			//divWxGuide.show();
			//return false;
			window.location.href = 'http://mp.weixin.qq.com/mp/redirect?url=' + encodeURIComponent(androidUrl);
		} else {
			window.location.href = 'http://mp.weixin.qq.com/mp/redirect?url=' + encodeURIComponent(androidUrl);
		}
	});
	
	$('.favor_do').click(function(){
		alert('第一轮大赛投票结束！');
		return;
		var favorId = $(this);
		
		if($(favorId).attr("data-value")==1){
			
			return;
		}
	/*	var dataids = $(favorId).attr("data-id");
		if(dataids==8085 || dataids==8082){
			alert("投票次数已达上限，请明天再投！");
			return;
		}
		*/
		
		
		
		$.getJSON($(favorId).attr("base-id")+'/share/favor', {id: $(this).attr("data-id")}, function (ret) {	
			alert(ret.message);
			if (ret.code >= 0) {
				//$.Prompt(ret.message);
				$(favorId).find('img').attr('src','../../dist/images/sister/btn_big_gray.png');
				$(favorId).parent().next().html(ret.data);
				$(favorId).attr("data-value",1);
			}
		});
		
	});
	
	$('.sister-sizeimg').each(function(){
		
		var hh = $(this).width()*1.5;
		$(this).css("height",$(this).width()*1.5);
	})
});

function reslushImgf(){
$('.sister-sizeimg').each(function(){
		var hh = $(this).width()*1.5;
		$(this).css("height",$(this).width()*1.5);
	})
}


function favorthis(favorId){
	
	alert('第一轮大赛投票结束！');
	return;
	
	if($(favorId).attr("data-value")==1){
		
		return;
	}
	$.getJSON($(favorId).attr("base-id")+'/share/favor', {id: $(favorId).attr("data-id")}, function (ret) {
		//$.Prompt(ret.message);
		alert(ret.message);
		if (ret.code >= 0) {
			$(favorId).find('img').attr('src','../../dist/images/sister/btn_big_gray.png');
			$(favorId).parent().next().html(ret.data);
			$(favorId).attr("data-value",1);
		}
	});
	
}