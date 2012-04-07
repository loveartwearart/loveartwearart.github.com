// JavaScript Document
$(function(){
	var str = location.href;
	str = str.split("#"); 
	str = str[1]-1;
	
	if((str>=1)||(str<=4)){
		$('.block_tabs .tab_cont').removeClass('active');
		$('.block_tabs .tabs_buttons a').removeClass('active');
		$('.block_tabs .tabs_buttons li').eq(str).find('a').addClass('active');
		$('.block_tabs .tab_cont').eq(str).addClass('active');
		}
	if(str>4){
		$('.block_tabs .tab_cont').removeClass('active');
		$('.block_tabs .tabs_buttons a').removeClass('active');
		$('.block_tabs .tabs_buttons li').eq(0).find('a').addClass('active');
		$('.block_tabs .tab_cont').eq(0).addClass('active');
	}
	$('.block_tabs .tabs_buttons a').click(function(){
		location.href = $(this).attr('href');
		$('.block_tabs .tabs_buttons a').removeClass('active');
		$('.block_tabs .tab_cont').removeClass('active');
		$(this).addClass('active');
		var page = $('.block_tabs .tabs_buttons a.active').parent().index();
		$('.block_tabs .tab_cont').eq(page).addClass('active');
		return false
	})
})