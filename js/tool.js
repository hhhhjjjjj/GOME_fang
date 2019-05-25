
//通过id获取元素  id 需要是一个string ，页面当中需要有这个id名  如果页面上没有此id的标签，则返回一个null
function byId(id) {
	return document.getElementById(id);
};

// function getElementById(id) {
// 	return .....
// }


/*
说明： 
	功能：超级小清新的选项卡切换  只要tabSwitch( option ) 就可以自动生成
	by:author
	参数说明：
	传一个配置选项，在函数调用的时候，会快速生成一个选项卡功能  事件默认是onclick

var option2 = {
	data:[
		{
			title:"选项1",
			content:"内容1"
		},
		{
			title:"选项2",
			content:"内容2"
		}
	],
	id:"container2",
	ev:"onmouseover"
};
 */
function tabSwitch(option) {
    var ev = option.ev || 'onclick';
	var id = option.id;
	var data = option.data;
	var len = data.length;
	var num = 0;
	
	var oBox = document.getElementById(id);

	var aButton = oBox.getElementsByTagName('button');
	var oCon = oBox.getElementsByTagName('div');

	var strHTML = '';
	for(var i=0;i<len;i++){

		strHTML += '<button>'+ data[i].title +'</button>';

	};
	strHTML += '<div class="con">'+ data[num].content +'</div>';
	oBox.innerHTML = strHTML;
	aButton[0].className = 'active';
	for(var i=0;i<len;i++){

		aButton[i].index = i;
		aButton[i][ev] = function () {
			
			for(var i=0;i<len;i++){
				aButton[i].className = '';	
			};

			aButton[this.index].className = 'active';
			oCon[0].innerHTML = data[this.index].content;
		};

	};
};


/*
		1: 获取哪个元素  obj( object )
		2：样式属性  attr( string )
	 */

 function getStyle(obj,attr) {

 	var value = '';

	value = window.getComputedStyle ? getComputedStyle(obj)[attr] : obj.currentStyle[attr];
	
	return value;
 };


//补零操作
function toZerto(num) {	

		return num >= 10 ? ''+num : '0'+num;
};

/*

	var d1 = new Date();
	console.log( d1.format('yyyy-MM-dd') );

	var d2 = new Date();
	console.log( d2.format('yyyy-MM-dd hh:mm:ss') );

 */

Date.prototype.format = function(format)
{
	 var o = {
	 "M+" : this.getMonth()+1, //month
	 "d+" : this.getDate(),    //day
	 "h+" : this.getHours(),   //hour
	 "m+" : this.getMinutes(), //minute
	 "s+" : this.getSeconds(), //second
	 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
	 "S" : this.getMilliseconds() //millisecond
	 }
	 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
	 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	 for(var k in o)if(new RegExp("("+ k +")").test(format))
	 format = format.replace(RegExp.$1,
	 RegExp.$1.length==1 ? o[k] :
	 ("00"+ o[k]).substr((""+ o[k]).length));
	 return format;
};

	


//获取滚动条滚动的距离

function scrollTop() {
	return document.body.scrollTop || document.documentElement.scrollTop;
};

/*
事件绑定函数与取消事件绑定
ele ：为哪个元素绑定事件
ev : 绑定什么事件
fn ：兼听的函数
 bind( oBtn,'click',fn2 )
 */
function bind(ele,ev,fn) {
	
	if( ele.addEventListener ){

		ele.addEventListener(ev,fn,false);

	}else{
		ele.attachEvent('on'+ev,fn);
	};

};

function cancelEv(ele,ev,fn) {
	if( ele.removeEventListener ){

		ele.removeEventListener(ev,fn,false);

	}else{
		ele.detachEvent('on'+ev,fn);
	};
};

//缓冲运动
/*

	obj 元素对象
	json 必须是键值对儿的形式 属性和目标位置 属性名称必须是元素style上面存在的属性  
	注意： obj和json是必须传  endFn是回调函数。可传可不传

 */

function sMove(obj,json,endFn) {
	
	
	clearInterval(obj.timer);//aDiv[2].timer = undefined   aDiv[1].timer = undefined
	obj.timer = setInterval(function () {
		
		var flag = true;//假设所有的属性都到达目标位置，则为true
		for( var attr in json ){

			var target = json[attr];
			//console.log(attr);//属性|键  width/top
			//291.9px ->parseInt 291
			if( attr=='opacity' ){
				var cur = parseFloat( getStyle( obj,'opacity' ) )*100;
			}else{
				var cur = parseInt( getStyle( obj,attr ) );
			};		
			
			//document.title = getStyle( obj,attr );

			var speed = (target-cur)/10 ;

			speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed )

			//0.9
			//清除定时器的位置
			
			if( cur != target ){
				flag = false;
			};

			var newCur = speed + cur;
			//291+0.9=291.9   291+1
			if( attr=='opacity' ){
				obj.style.opacity = newCur/100;
				obj.style.filter = 'alpha(opacity='+ newCur +')';
			}else{
				obj.style[attr] = newCur + 'px';
			};
		};
		

		if( flag ){//flag 还为true 则都到达目标位置
			clearInterval(obj.timer);
			endFn && endFn();
		};




	},30);
};




//cookie相关

 //设置cookie
function setCookie(key,val,day) {
	var d = new Date();

	d.setDate( d.getDate() + day );

	document.cookie = key+'='+ val +';expires='+d;
};
//获取所有的cookie
function getCookie(argument) {
	var cookies = document.cookie;
	var data = {};
	var cookieArr = cookies.split('; ');
	// console.log( cookieArr );

	for( var i=0;i<cookieArr.length;i++ ){

		var cArr = cookieArr[i].split('=');

		data[cArr[0]] = cArr[1];
	};
	return data;

};

//key  删除cookie
function removeCookie(key) {
	setCookie(key,'',-1);
};


//ajax封装  通过异步回调的形式拿到结果
function ajax(url,successFn,failFn) {
		//1 创建对象
	if( window.XMLHttpRequest ){
		var ajax = new XMLHttpRequest();
	}else{
		var ajax = new ActiveXObject('Microsoft.XMLHTTP');
	};
	//2 建立连接
	//get post 
	ajax.open('get',url,true);//false:同步  true 异步
	//3 发送请求 去
	ajax.send();
	
	//4接收数据  只要服务器和客户端发送数据交互，一定会触发这个onreadystatechange事件
	ajax.onreadystatechange = function () {
		
		if( ajax.readyState == 4 ){
		
			if( ajax.status == 200 ){
				//console.log( ajax.responseText );
				//return ajax.responseText;//大写的错误
				successFn( ajax.responseText )
			}else{
				//console.log('fail')
				failFn && failFn(ajax.status);
			};
		};
	};

	
};


function getPostion(obj) {
	var pos = {};
	pos.l = 0;
	pos.t = 0;
	while( obj ){
		pos.l+=obj.offsetLeft;
		pos.t+=obj.offsetTop;
		obj = obj.offsetParent;
	};
	return pos;
};

function goScrollTop( target,endFn ) {
	
	clearInterval( document.timer );
	document.timer = setInterval(function () {
		
		var cur = document.body.scrollTop || document.documentElement.scrollTop;
		var speed = (target-cur)/10 ;

		speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );

		var newCur = speed + cur;
		document.body.scrollTop = newCur;
		document.documentElement.scrollTop = newCur;
		if( newCur == target ){
			clearInterval(document.timer);
			endFn && endFn();
		};
	});

};