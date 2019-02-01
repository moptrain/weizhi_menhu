window.onload=function(){
loadXMLDoc();
}

//选中效果
var last=0;
function fun(idd){
		$("#"+last).parent().css('border','none');
		var path=$("#"+idd).attr('src');
		$('#imgBig').attr('src',path);
		$("#"+idd).parent().css('border','2.5px solid #222');
		last=idd;
		function bar(){
		return last;
					  }
		return bar;
}

//禁用按钮


// 排列
function loadXMLDoc(){
var myObj;
var j,i;
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://protal.zhengsj.top/swiper/list", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        myObj = JSON.parse(xhr.responseText);
        $(".slide img").remove();        
        for (i = 0; i < myObj.photolist.length; i++) {
            x = myObj.photolist[i].imgurl;
            y = myObj.photolist[i].id;
            j=i+1;
            $('#pi'+j).prepend("<img />");
            $('#pi'+j).children("img").attr('src',x);
            $('#pi'+j).children("img").attr('id',y);
            $('#pi'+j).children("img").on("click",function(){
            	fun(this.id);
            });
        }
    }
};
xhr.send(null);
}

//下移
var bar=fun();
$(document).ready(function(){
  	bar();	
  $("#next").click(function(){
    $.post("http://protal.zhengsj.top/swiper/manage/move",
    {
      	code:"1",
		id:""+last
    },
    function(){
    	loadXMLDoc();    
    			} );
    var  pre= $('#'+last).parent().attr("id");
    var bor = $('#'+last).parent().next().attr("id");
  	$("#"+pre).css('border','none');
  	$("#"+bor).css('border','2.5px solid #222');
  	if( "bor" == "pi5"){
  		console.log(bor);
  		rightpage();
  	};
  	console.log(bor);
                 			 });
});

//上移

$(document).ready(function(){
  	bar();
  	console.log(last);
  $("#last").click(function(){
    $.post("http://protal.zhengsj.top/swiper/manage/move",
    {
      	code:"-1",
		id:""+last
    },function(){
    	loadXMLDoc();
    			} );
    var  pre1= $('#'+last).parent().attr("id");
    var bor1 = $('#'+last).parent().prev().attr("id");
  	$("#"+pre1).css('border','none');
  	$("#"+bor1).css('border','2.5px solid #222');
  });
});


//删除
$(document).ready(function(){
	  	bar();
  $("#delate").click(function(){
    $.post("http://protal.zhengsj.top/swiper/manage/del",
    {
		id:""+last
    },function(){
    	 loadXMLDoc();
    	 $("#del").css("z-index","-1");
    });
  });
});



//下面左右切换按钮
function rightpage(){
	$('.page1').css('left', '-690px');
	$('.page2').css('left', '0px');
}
function leftpage(){
	$('.page1').css('left', '0px');
	$('.page2').css('left', '690px');
}


	   function openD(){
	   	$("#del").css("z-index","1")
	   }
	   function closeD(){
	   	$("#del").css("z-index","-1")
	   }

