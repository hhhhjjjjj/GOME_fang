/*-------页面头部分广告------*/ 
	var top_he=document.getElementById('top_header');
 	var close_box=document.getElementById('close_top_box');
 	close_box.onmouseenter=function(){
 		close_box.style.background='black';

 	}
 	close_box.onmouseleave=function(){
 		close_box.style.background='';
 	}
 	close_box.onclick=function(){
 		top_he.style.display='none';
 	}

 	/*-------公共头部分----------*/ 
 	var ohuiyuan=document.getElementById('huiyuan');
 	var ai=ohuiyuan.getElementsByTagName('i')[0];
 	// console.log(ohuiyuan);
 	ohuiyuan.onmouseenter=function(){
 		ohuiyuan.style.borderBottom='none';
    	ohuiyuan.style.background='#fff';
     	// ohuiyuan.style.color='#474747';
     	ai.style.backgroundPosition='-60px -455px';
        $('#huiyuan .public_drop_box').css('height','auto');
     	$('#huiyuan b a').css('color','red');
     	
 	}
 	ohuiyuan.onmouseleave=function(){
 		ohuiyuan.style.borderBottom='';
    	ohuiyuan.style.background='';
     	ohuiyuan.style.color='';
     	ai.style.backgroundPosition='';
     	$('#huiyuan .public_drop_box').css('height','0');
     	$('#huiyuan b a').css('color','');
 	}


 	var icon_prev=document.getElementById('icon_prev');
 	var icon_next=document.getElementById('icon_next');
 	var icon_lunbo=document.getElementById('icon_lunbo');
 	// console.log(icon_lunbo);
 	var aul=icon_lunbo.getElementsByTagName('ul')[0];
 	// console.log(aul);
 	var num=0;
 	var icon_lunboWidth=icon_lunbo.offsetWidth;
 	 // console.log(icon_lunboWidth);
 	icon_next.onclick=function(){
 		num++;
 		 //left:-243X0px;
 		// left:-243X1px;
 		// left:-243X2px;
 		if(num>2){
 			num=2;
 		}
 		var target = -(num)*icon_lunboWidth;
 		sMove(aul,{ left: target });
 	}
 	icon_prev.onclick=function(){
 		num--;
 		 //left:-243X0px;
 		// left:-243X1px;
 		// left:-243X2px;
 		if(num<0){
 			num=0;
 		}
 		var target = -(num)*icon_lunboWidth;
 		sMove(aul,{ left: target });
 	}


 	var guomei_home=document.getElementById('guomei_home');
    var drop_down_box=document.getElementById('drop_down_box');
    // console.log(drop_down_box);
    var bi=guomei_home.getElementsByTagName('i')[0];
    guomei_home.onmouseenter=function(){
    	 // $('#guomei_home a').css('color','red');
    	guomei_home.style.background='#fff';
    	// guomei_home.style.borderBottom='none';
    	drop_down_box.style.display='block';
    	guomei_home.style.height='31px';
    	bi.style.backgroundPosition='-60px -455px';


    }
     guomei_home.onmouseleave=function(){
    	// $('#drop_down_box').css('display','block');
    	guomei_home.style.background='';
    	guomei_home.style.borderBottom='';
    	drop_down_box.style.display='none';
    	bi.style.backgroundPosition='';


    }
/*--------头部over--------*/ 

	var search_type_list=document.getElementById('search_type_list');
	var ali=search_type_list.getElementsByTagName('li');
	var search_type_dropdown=document.getElementById('search-type-dropdown');
	var aspan=search_type_dropdown.getElementsByTagName('span')[0];

	var keyLabel=document.getElementById('keyLabel');
	var bli=keyLabel.getElementsByTagName('li');
	console.log(bli);
	var alen=ali.length;
	var keyLabelWidth=keyLabel.offsetWidth;
	for(let i=0;i<alen;i++){
		// ali[i].index=i;
		ali[i].onclick=function(){
		aspan.innerHTML=ali[i].innerHTML;
		if(i==0){
			keyLabel.style.display='block';
		}else{
			keyLabel.style.display='none';

		}		
	}
}
    var num=0;
	setInterval(function(){
		num++;
		
		if(num==4){
			num=0;
		}
		for(var i=0;i<alen;i++){
			bli[i].style.display='none';
		}
		bli[num].style.display='block';
		// console.log(num);
	},5000);
    
/*------搜索框部分over-------*/ 
+function(){
	var hdrsideRoll=document.getElementById('hdrsideRoll');
	var adnavside=document.getElementById('adnavside');
	var bul=adnavside.getElementsByTagName('ul')[0];
	var cli=bul.getElementsByTagName('li');
	var clen=cli.length;
	var hdr_btn_up=document.getElementById('hdr_btn_up');
	var hdr_btn_down=document.getElementById('hdr_btn_down');
	var adnavsideHeight=adnavside.offsetHeight;
    var num=1;
    bul.style.top=-(num)*adnavsideHeight+'px';
    console.log(clen);
    console.log(adnavsideHeight);
	 hdr_btn_down.onclick=function(){
	 	num++;
	 	if(num>clen-1){
	 		num=2;
	 		bul.style.top=-(num-1)*adnavsideHeight+'px';
	 	}
	 	// console.log(num);
	 	var target=-(num)*adnavsideHeight;
	 	sMove(bul, {top:target});

	 }

	 hdr_btn_up.onclick=function(){
	 	num--;
	 	if(num<0){
	 		num=2;
		bul.style.top=-(num+1)*adnavsideHeight+'px';
	 	}
	 	var target=-(num)*adnavsideHeight;
	 	sMove(bul, {top:target});	
	 }

	 function autoplay(){
	 	num++;
	 	if(num>clen-1){
	 		num=2;
	 		bul.style.top=-(num-1)*adnavsideHeight+'px';
	 	}
	 	// console.log(num);
	 	var target=-(num)*adnavsideHeight;
	 	sMove(bul, {top:target});
	 };
	 var timer=setInterval(autoplay,3000);
	hdrsideRoll.onmouseenter=function(){
	 	clearTimeout(timer);
	 }
	hdrsideRoll.onmouseleave=function(){
	 timer=setInterval(autoplay,3000);
	}

}();



	var lisnav=document.getElementById('lisnav');
	var dli=lisnav.getElementsByTagName('li');
	var loading1_sync=document.getElementById('loading1_sync');
	var subnav=document.getElementById('subnav');
	var fullcategory=loading1_sync.children;
	var dlen=dli.length;
	console.log(fullcategory);
	for(let i=0;i<dlen;i++){
		dli[i].onmouseenter=function(){
			for(let i=0;i<dlen;i++){
				fullcategory[i].style.display='none';
			}
			fullcategory[i].style.display='block';
			loading1_sync.style.display='block';
			subnav.style.display='block';
		}
		dli[i].onmouseleave=function(){
			loading1_sync.style.display='none';
			subnav.style.display='none';
		}
	}

	
		// $(".focus_img_l").on('mouseenter',function(){
		// 	$(".focuslayer_img").animate({"width":950},1000);
		// });
		var gm_main=document.getElementById('gm_main');
		var focus_box=document.getElementById('focus_box');
		var eli=focus_box.getElementsByTagName('li');
		var btn_pre=document.getElementById('pre');
		var btn_nex=document.getElementById('nex');
		var nav=document.getElementById('nav');
		var fli=nav.getElementsByTagName('li');

		// $(".pre").on('mouseenter',function(){

		// })
		console.log(btn_nex);
		var elen=eli.length;
		var focus_box_num=0;
		btn_nex.onclick=function(){
			focus_box_num++;
			if(focus_box_num>elen-1){
				focus_box_num=0;
			}
			_tab_focus(focus_box_num);
			

	}
	function _tab_focus(focus_box_num){
		for(let i=0;i<elen;i++){
				// eli[i].style.display='none';
				fli[i].className='';
				eli[i].style.opacity = '0';
				eli[i].style.display='none';
			}
			// console.log(i);
			// eli[focus_box_num].style.display='block';

			fli[focus_box_num].className='cur';
			eli[focus_box_num].style.display='block';
			sMove(eli[focus_box_num],{
			opacity:100
		})

	}
		btn_pre.onclick=function(){
			focus_box_num--;
			if(focus_box_num<0){
				focus_box_num=elen-1;
			}
			_tab_focus(focus_box_num);
			
	}


	// var timer=null;
	var timer=setInterval(function(){
		focus_box_num++;
		if(focus_box_num==elen){
			focus_box_num=0;
		}
		_tab_focus(focus_box_num);
	},3000)

	gm_main.onmouseenter=function(){
		clearInterval(timer);
	}
	gm_main.onmouseleave=function(){
		timer=setInterval(function(){
		focus_box_num++;
		if(focus_box_num==elen){
			focus_box_num=0;
		}
		_tab_focus(focus_box_num);
	},3000)
}

	for(let i=0;i<elen;i++){
		fli[i].onmouseenter=function(){
			focus_box_num=i;
			// clearInterval(timer);
     		_tab_focus(focus_box_num);
		}
		// fli[i].onmouseleave=function(){
		// 		timer=setInterval(function(){
		// 		focus_box_num++;
		// 		if(focus_box_num==elen){
		// 			focus_box_num=0;
		// 		}
		// 		_tab_focus(focus_box_num);
		// 	},3000)
		// }
		
	}

	var icon_tab_wrap=document.getElementById('icon_tab_wrap');
	var icon_server=document.getElementById('icon_server');
	var bspan=icon_tab_wrap.getElementsByTagName('span')[0];
   
	var gli=icon_server.children;

	for(let i=0;i<3;i++){
		gli[i].onmouseenter=function(){
			// fli[i].style.display='list-item';
			bspan.style.display='block';
			sMove(icon_tab_wrap, {top:69});
			var target=(i+1)*39+45*i;
			sMove(bspan,{left:target});
		}
		gli[i].onmouseleave=function(){
			// fli[i].style.display='list-item';
			sMove(icon_tab_wrap, {top:69});
			
		}
	}
	$('#icon_tab_wrap > a').click(function(){
		// $('#icon_tab_wrap').css('top','435px');
		sMove(icon_tab_wrap, {top:435});
	})
/*--------main部分over----------*/ 

	var flage=1;
	// console.log($('.list .first'));
    $('.nexbtn').click(function(){
    	if(flage){
    		$('.list .first').css('display','none');
    		$('.list .two').css('display','block');
    		flage=0;
    	}else{
    		$('.list .two').css('display','none');
    		$('.list .first').css('display','block');
    		flage=1;
    	}
    })	
	 $('.prebtn').click(function(){
    	if(flage){
    		$('.list .first').css('display','none');
    		$('.list .two').css('display','block');
    		flage=0;
    	}else{
    		$('.list .two').css('display','none');
    		$('.list .first').css('display','block');
    		flage=1;
    	}
    })
    	/*-------美日必抢部分over---------*/
     var j_imgload_recomm=document.getElementById('j-imgload-recomm');
     var ch_pre=document.getElementById('ch_pre');
     var ch_nex=document.getElementById('ch_nex');
     var cul=j_imgload_recomm.children;
     console.log(cul);
     var cul_len=cul.length;
     var anum=0;
     
     ch_nex.onclick=function(){
         anum++;
         if(anum>cul_len-1){
         	anum=0;
         }
         for(var i=0;i<cul_len;i++){
     			cul[i].style.display='none';
     			cul[i].style.opacity='0';
     	}
         cul[anum].style.display='block';
         sMove(cul[anum], {opacity:100});
     }
	ch_pre.onclick=function(){
	         anum--;
	         if(anum<0){
	         	anum=cul_len-1;
	         }
	         for(var i=0;i<cul_len;i++){
	     			cul[i].style.display='none';
	     			cul[i].style.opacity='0';
	     	}
	         cul[anum].style.display='block';
	         sMove(cul[anum], {opacity:100});
	}
	/*-------------猜你喜欢部分over------------*/ 

	var gome_bar_border_tab=document.getElementById('gome-bar-border-tab');
	var hli=gome_bar_border_tab.getElementsByTagName('li');
	var ha=gome_bar_border_tab.getElementsByTagName('a');
	var hli_len=hli.length;
	console.log(ha);
	for(let i=0;i<hli_len;i++){
		hli[i].onmouseenter=function(){
			for(let i=0;i<hli_len;i++){
				hli[i].style.background='';
			}
            hli[i].style.background='#000';
			if(i==2){
				ha[i-1].className='gome-bar-btn-tip hover';
			}else if(i==0){
				ha[0].className='gome-bar-btn-tip hover';
				
			}
	
}
	
			hli[i].onmouseleave=function(){
				hli[i].style.background='';
				
				if (i==2) {
					ha[i-1].className='gome-bar-btn-tip';
				}else if(i==0){
					ha[i].className='gome-bar-btn-tip';
				}
				
				// ha[i].className='gome-bar-btn-tip';
			}
		}
	
///*--------------楼层的切换-------------------*/
function floorTabSwitch( tab,item ) {
	var Hd = document.getElementById(tab);//切换的头部容器
	var aItem = Hd.getElementsByTagName('li');//切换的按钮
	var container = document.getElementById(item);//切换的内容容器

	var aNext = container.children[0];
	var cChild = container.children;//选择要切换的item容器，但是会多选
	var cChildLen = cChild.length;

	var cItem = [];//临时定义一个空数组，放真正的div元素

	var index = 0;
	for( var i=0;i<cChildLen;i++ ){
		//console.log( cChild[i].className )
		//if( cChild[i].className == 'container_R_tab' ){
		var types = cChild[i].getAttribute('types');//判断要切换的内容元素类型
		if( types ){
			if( types.toLowerCase() == 'itemfloor' ){
				cItem.push( cChild[i] );
			};
		};
	};


	var itemLen = cItem.length;//获取正确的长度
	for( var i=0;i<itemLen;i++ ){
		aItem[i].index = i;
		aItem[i].onmouseenter = function () {
			index = this.index;
			console.log( 123 );
			_tab( index );
		};
	};

	//一个变量前面加了一个下划线，代表在函数内部用的，其它地方不会引用
	function _tab( index ) {
		for( var i=0;i<itemLen;i++ ){
			aItem[i].className = '';
			cItem[i].style.display = 'none';
		};
		//index = _this.index;
		aItem[index].className = 'active';
		cItem[index].style.display = 'block';
	};
	container.onmouseenter = function () {
		aNext.style.display = 'block';
	};
	container.onmouseleave = function () {
		aNext.style.display = 'none';
	};

	aNext.onclick = function () {
		index++;
		if( index == itemLen ){
			index = 0;
		};
		_tab(index);
	};

};

//getClassName 不兼容低版本浏览器
 floorTabSwitch( 'floor_1_hd','floor_1_con' );
 floorTabSwitch( 'floor_2_hd','floor_2_con' );
// 
// 

/*--------------楼层的幻灯片-------------------*/
//从我们编程的角度来分析，每一个功能都可以细划模块，每一个模块不能过多的依赖
function focus_hdp(id) {
	var hdpContainer = document.getElementById(id);//幻灯片容器
	var hdpNext = hdpContainer.getElementsByTagName('span')[1];//下一张
	var hdpPrev = hdpContainer.getElementsByTagName('span')[0];//上一张

	var imgItems = hdpContainer.getElementsByTagName('li');//图片
	var btns = hdpContainer.getElementsByTagName('em');//按钮

	var len = imgItems.length;

	hdpContainer.onmouseenter = function () {
		hdpNext.style.display = 'block';
		hdpPrev.style.display = 'block';
		clearInterval(timer);
	};
	hdpContainer.onmouseleave = function () {
		hdpNext.style.display = 'none';
		hdpPrev.style.display = 'none';

		timer = setInterval(function () {
			index++;
			if( index == len ){
				index = 0;
			};
			_tab(index);
		},3000);
	};

	var index = 0;
	btns[index].className = 'active';
	hdpNext.onclick = function () {

		index++;
		if( index == len ){
			index = 0;
		};
		_tab(index);
	};

	hdpPrev.onclick = function () {

		index--;
		if( index < 0 ){
			index = len - 1;
		};
		_tab(index);
	};

	for(var i=0;i<len;i++){
		btns[i].index = i;
		btns[i].onmouseenter = function () {
			index = this.index;
			_tab(index);	
		};
	};

	function _tab(index) {
		for( var i=0;i<len;i++ ){
			btns[i].className = '';
			imgItems[i].style.display = 'none';
			imgItems[i].style.opacity = '0';
		};
		btns[index].className = 'active';
		imgItems[index].style.display = 'block';
		sMove(imgItems[index],{
			opacity:100
		})
	};

	var timer = null;
	timer = setInterval(function () {
		index++;
		if( index == len ){
			index = 0;
		};
		_tab(index);
	},3000);
};

focus_hdp( 'floor_focus1' );
focus_hdp( 'floor_focus2' );




/*

var options = {
	itemContainer:'floorNavContainer',
	menuContainer:'elevator'
	menuItems:'span'
}

scrollMenu(options)

function scrollMenu( option ){
	
};

 */

/*--------------楼层导航-------------------*/
var floorNavSlide = document.getElementById('elevator');//菜单导航容器
var menuItems = floorNavSlide.getElementsByTagName('li');//菜单按钮
var floorNavContainer = document.getElementById('floorNavContainer');//楼层容器
var floorItem = floorNavContainer.children;//楼层
var goBottom = document.getElementById('goBottom');
var goTop = document.getElementById('goTop');



var len = floorItem.length;
var floorHeightArr = [];//存储所有楼层到页面顶端的距离
for( var i=0;i<len;i++ ){
	 floorHeightArr.push( getPostion( floorItem[i] ) );

	 menuItems[i].onclick = function () {
	 	for( var i=0;i<len;i++ ){
			 menuItems[i].className = 'handler';
		};
	 	this.className = 'handler current';
	 	var index = this.getAttribute('index');
	 	//console.log(index);
	 	var targetFloorTop = getPostion( floorItem[index] ).t;//获取对应楼层的位置 top
	 	// console.log(targetFloorTop);
	 	goScrollTop( targetFloorTop );
	 };

};

var bodyHeight = document.body.scrollHeight;//页面实际的高
var bodyClientHeight = document.documentElement.clientHeight;//浏览器可视高

var bodyScrollMaxTop = bodyHeight - bodyClientHeight;
//滚动到底部
//
goBottom.onclick = function () {
	goScrollTop(bodyScrollMaxTop);
}

//
//滚动高顶部

goTop.onclick = function () {
	goScrollTop(0);
}

window.onscroll = function () {


	var nScrollTop = scrollTop();
	// console.log( nScrollTop );
	// 滚动条500的位置 显示左侧导航
	if( nScrollTop > 500 ){
		floorNavSlide.style.display = 'block';
	}else{
		floorNavSlide.style.display = 'none';
	};

	// var m1 = document.getElementById('main_1');

	// console.log( getPostion(m1) );
	var floorId = '';//临时存储到达哪个楼层位置的id
	for( var i=0;i<len;i++ ){
		 if( nScrollTop > floorHeightArr[i].t - 300 ){
		 	// console.log(i);
		 	floorId = i;
		 };
		 menuItems[i].className = 'handler';
	};
	console.log(floorId);
	if( floorId !== ''  ){
		menuItems[floorId].className = 'handler current';
	};

	

};