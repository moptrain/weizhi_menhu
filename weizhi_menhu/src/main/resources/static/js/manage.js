window.onload=function(){
	get();
}

//查询管理员list
function get(){
  $.post("http://xiean999.uicp.io:11867/user/list",{},
  function(data,status){
    var list=[];
    list = data.data;
    for (var i = 0; i < list.length; i++) {
    	if (list[i].power == "ROLE_ADMIN") {
    	var x=document.getElementById('showresult').insertRow(1);
    	var y=x.insertCell(0);
    	var z=x.insertCell(1);
    	y.innerHTML= list[i].name;
    	z.innerHTML= '<button id="de" onclick="openD(this)">删除</button> <button id="cha" onclick="openC(this)">修改密码</button>';
    }
    if (list[i].power == "ROLE_SUPER") {
    	var x=document.getElementById('showresult').insertRow(1);
    	var y=x.insertCell(0);
    	var z=x.insertCell(1);
    	y.innerHTML= list[i].name;
    	z.innerHTML= '<button id="cha" onclick="openC(this)">修改密码</button>';
    	$(y).addClass('red');
    }
    }
  });
}


$("#delate").click(function ban() {
	 $("#super").attr("disabled",true);
})
$("#back").click(function submit() {
	$("#super").removeAttr('disabled');
})
$("#no").click(function submit() {
	$("#super").removeAttr('disabled');
})

//添加
	   function openP(){
	   	$("#plusWin").css("z-index","1")
	   }

/*****************************清空表单输入**********************/
	   function closeP(){
	   	$("#plusWin").css("z-index","-1");
	   	$("#inp1").val("");
	   	$("#inp2").val("");
	   }
	   function closeC(){
	   	$("#change").css("z-index","-1");
	   	$("#inp4").val("");
	   }


//删除
function openD(b){
	   	$("#del").css("z-index","1");
	   	var person;
	   	person = $(b).parent().prev().html();
	   	$("#delName").val(person);
}

	   function closeD(){
	   	$("#del").css("z-index","-1")
	   }

//修改密码
function openC(a){
	$("#change").css("z-index","1");
	var person;
	person = $(a).parent().prev().html();
	$("#changeName").val(person);
}

//刷新
$("#put1").click(function(){
	setTimeout(function(){
		location.reload();		
	}, 500);
})
$("#relDel").click(function(){
	setTimeout(function(){
		location.reload();		
	}, 500);
})
$("#put2").click(function(){
	setTimeout(function(){
		location.reload();		
	}, 500);
})

/*********************************输入检查**************************/
//添加
function checkInput(){
    var text1 = $("#inp1").val();
    var text2 = $("#inp2").val();
    if(text1!=""&&text2!=""&&text1!=null&&text2!=null){
        changeBtnable();
    }else{
    	changeBtndisable();
    }
}
function changeBtnable(){
    $("#put1").attr("disabled",false);
    $("#put1").css('background','#5093E1');
    $("#put1").css('color','#fff');
}
function changeBtndisable(){
    $("#put1").attr("disabled",true);
}
//修改密码
function checkInput2(){
    var text3 = $("#changeName").val();
    var text4 = $("#inp4").val();
    if(text3!=""&&text4!=""&&text3!=null&&text4!=null){
        changeBtnable2();
    }else{
    	changeBtndisable2();
    }
}
function changeBtnable2(){
    $("#put2").attr("disabled",false);
    $("#put2").css('background','#5093E1');
    $("#put2").css('color','#fff');
}
function changeBtndisable2(){
    $("#put2").attr("disabled",true);
}