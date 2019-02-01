//   修改#change 点击次数判断
var n=0;	
var a=0;
$("#change").click(function(){
	n++;
	a = n%2;
	if (a==1) {
	$("#inp11").attr('disabled',false);
	$("#inp12").attr('disabled',false);
	$("#inp13").attr('disabled',false);
	$("#revise").attr('disabled',false);		
	$("#revise").css('background','#5093E1');		
	$("#revise").css('color','#fff');	
	$("#inp13").removeClass("none");
	$("#up").removeClass("none");
	$("#change").html('取消');
	};
	if (a==0) {
	$("#inp11").attr('disabled',true);
	$("#inp12").attr('disabled',true);
	$("#inp13").attr('disabled',true);
	$("#revise").attr('disabled',true);	
	$("#revise").css('background','#CDCDC1');		
	$("#inp13").addClass("none")
	$("#up").addClass("none")
	$("#change").html('修改');
	};
})

//图片预览
function changepic(obj) {
        //console.log(obj.files[0]);//获取上传文件的name
        var newsrc=getObjectURL(obj.files[0]);
        document.getElementById('show').src=newsrc;
    }
    //建立一個可存取到該file的url
    function getObjectURL(file) {
        var url = null ;
        //针对不同的浏览器
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }


//查询相应模块记录
window.onload=function(){
inquiry1();
}
function inquiry1(){
	var list;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://protal.zhengsj.top/system/get/1", true);
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        list = JSON.parse(xhr.responseText);
	        $("#inp11").val(list.theme);
	        $("#inp12").val(list.content);
	        $("#show").attr('src',"http://protal.zhengsj.top/"+list.fileName);
	    }
	};
xhr.send(null);
}
function inquiry2(){
	var list;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://protal.zhengsj.top/system/get/2", true);
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        list = JSON.parse(xhr.responseText);
	        $("#inp11").val(list.theme);
	        $("#inp12").val(list.content);
	        $("#show").attr('src',"http://protal.zhengsj.top/"+list.fileName);
	    }
	};
xhr.send(null);
}
function inquiry3(){
	var list;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://protal.zhengsj.top/system/get/3", true);
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        list = JSON.parse(xhr.responseText);
	        $("#inp11").val(list.theme);
	        $("#inp12").val(list.content);
	        $("#show").attr('src',"http://protal.zhengsj.top/"+list.fileName);
	    }
	};
xhr.send(null);
}
function inquiry4(){
	var list;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://protal.zhengsj.top/system/get/4", true);
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        list = JSON.parse(xhr.responseText);
	        $("#inp11").val(list.theme);
	        $("#inp12").val(list.content);
	        $("#show").attr('src',"http://protal.zhengsj.top/"+list.fileName);
	    }
	};
xhr.send(null);
}
function inquiry5(){
	var list;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://protal.zhengsj.top/system/get/5", true);
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        list = JSON.parse(xhr.responseText);
	        $("#inp11").val(list.theme);
	        $("#inp12").val(list.content);
	        $("#show").attr('src',"http://protal.zhengsj.top/"+list.fileName);
	    }
	};
xhr.send(null);
}
function inquiry6(){
	var list;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://protal.zhengsj.top/system/get/6", true);
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        list = JSON.parse(xhr.responseText);
	        $("#inp11").val(list.theme);
	        $("#inp12").val(list.content);
	        $("#show").attr('src',"http://protal.zhengsj.top/"+list.fileName);
	    }
	};
xhr.send(null);
}

// 表单提交后清空
$("#revise").click(function(){
	setTimeout(function(){
			$("#inp13").val('');
			$("#inp11").attr('disabled',true);
			$("#inp12").attr('disabled',true);
			$("#inp13").attr('disabled',true);
			$("#revise").attr('disabled',true);	
			$("#revise").css('background','#CDCDC1');		
			$("#inp13").addClass("none")
			$("#up").addClass("none")
			$("#change").html('修改');
		},500);
	setTimeout(function(){
			alert("提交成功！");
		},700);
})

//模块切换
var id = 1;
$("#go2").click(function(){
	id=2;
	$("#shift").val("2");
	$("#go2").addClass("now");
	$("#go1").removeClass("now");
	$("#go3").removeClass("now");
	$("#go4").removeClass("now");
	$("#go5").removeClass("now");
	$("#go6").removeClass("now");
	var newUrl = 'http://protal.zhengsj.top/system/update/2';    //设置新提交地址
	$("#apply-for-help").attr('action',newUrl);
	inquiry2();
})
$("#go1").click(function(){
	id=1;
	$("#shift").val("1");
	$("#go1").addClass("now");
	$("#go2").removeClass("now");
	$("#go3").removeClass("now");
	$("#go4").removeClass("now");
	$("#go5").removeClass("now");
	$("#go6").removeClass("now");
	var newUrl = 'http://protal.zhengsj.top/system/update/1';    //设置新提交地址
	$("#apply-for-help").attr('action',newUrl);
	inquiry1();
})
$("#go3").click(function(){
	id=3;
	$("#shift").val("3");
	$("#go3").addClass("now");
	$("#go2").removeClass("now");
	$("#go1").removeClass("now");
	$("#go4").removeClass("now");
	$("#go5").removeClass("now");
	$("#go6").removeClass("now");
	var newUrl = 'http://protal.zhengsj.top/system/update/3';    //设置新提交地址
	$("#apply-for-help").attr('action',newUrl);
	inquiry3();
})
$("#go4").click(function(){
	id=4;
	$("#shift").val("4");
	$("#go4").addClass("now");
	$("#go2").removeClass("now");
	$("#go3").removeClass("now");
	$("#go1").removeClass("now");
	$("#go5").removeClass("now");
	$("#go6").removeClass("now");
	var newUrl = 'http://protal.zhengsj.top/system/update/4';    //设置新提交地址
	$("#apply-for-help").attr('action',newUrl);
	inquiry4();
})
$("#go5").click(function(){
	id=5;
	$("#shift").val("5");
	$("#go5").addClass("now");
	$("#go2").removeClass("now");
	$("#go3").removeClass("now");
	$("#go4").removeClass("now");
	$("#go1").removeClass("now");
	$("#go6").removeClass("now");
	var newUrl = 'http://protal.zhengsj.top/system/update/5';    //设置新提交地址
	$("#apply-for-help").attr('action',newUrl);
	inquiry5();
})
$("#go6").click(function(){
	id=6;
	$("#shift").val("6");
	$("#go6").addClass("now");
	$("#go2").removeClass("now");
	$("#go3").removeClass("now");
	$("#go4").removeClass("now");
	$("#go5").removeClass("now");
	$("#go1").removeClass("now");
	var newUrl = 'http://protal.zhengsj.top/system/update/6';    //设置新提交地址
	$("#apply-for-help").attr('action',newUrl);
	inquiry6();
})



