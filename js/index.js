$(function () 
{
    // 初始化插件
    $.stellar({
        horizontalScrolling: false,
        responsive: true
    });

    var $li=$(".wrapper>ul>li");
    $li.mouseenter(function(){
	    // console.log($li.eq(0));
	    	$(".wrapper ul li:first").removeClass("active");
	    	$(this).addClass("active").siblings().removeClass("active");
	  
	    // }
    	
    	// $(this).css("background",color = '#12b7f5');
    }).mouseleave(function(){
     	 $(this).removeClass("active");
    	// $(this).css("background",color = '#fff');
    });

    
});
