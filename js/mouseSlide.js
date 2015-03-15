$(document).ready(function() {    
    
	//修正IE下hover时背景替换
    $(".imgSlide>a").hover(
        function () { $(this).addClass("on"); },
        function () { $(this).removeClass("on"); }
    );
	 
    /******************************动画特效部分开始*************************************/	
    var $site_body = $('#picShow'); //获得操作目标对象
    var win_width = $(window).width(); //获得可视区域宽度
    var center_x = Math.floor(win_width/2); //获得x轴中心点    
    var box_width = $site_body.width(); //获得最长box宽度
    var box_half = Math.floor(box_width/2); //获得最长box一半宽度    
    var start_x = 0; //初始化定位点    

    //定位到初始点
	$site_body.width($('.imgSlide').length * $('.imgSlide').outerWidth())
	.animate( {left: start_x}, "slow" );
	
    //滚动特效 right=> -1194 left=> -50
    $site_body.mousemove (function(e){		
        var pos_x = false; //初始化最终x轴定位点
        var offset_x = Math.floor(center_x - e.pageX); //往左移动，将获得整数偏移量，右移为负
		if (offset_x>0)
		{
			offset_x =0;
		}
        pos_x = Math.floor((Math.abs(offset_x) * box_half ) / center_x); //比例偏移量
        if (offset_x > 0) {            
            pos_x =  Math.abs(start_x) + pos_x ;
        } else if (offset_x < 0) {
            pos_x = - (Math.abs(start_x) + pos_x);
        }
		$site_body.css('left', pos_x+'px');
     
		 
    }); 
	
    /******************************动画特效部分结束*************************************/
});