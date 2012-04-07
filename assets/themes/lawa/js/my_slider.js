// JavaScript Document
var mas = [],
	html = '',
	min_images_code = '',
	big_images_code = '',
	all = 0,
	num = 0,
	go_see = true,
	min_num = 0,
	auto_play = true,
	auto_play_time = 5000,
	time;
$(document).ready(function(){
	
	$('#my_slider a').each(function(index, element) {
   		mas[index] = [$(this).attr('href'),$(this).find('img').attr('src') , $(this).find('img').attr('alt'), $(this).find('img').attr('title')];
    });
	all = mas.length;
	for(x=0; x<mas.length; x++){
		if(x!=0){
		min_images_code += '<li><a href="#"><img src="'+mas[x][0]+'" alt="" title="" /></a></li>';
		big_images_code += '<div style="overflow: hidden; display:none"><img src="'+mas[x][1]+'" alt="" title="" /></div>';
		}else{
			min_images_code += '<li><a href="#" class="active"><img src="'+mas[x][0]+'" alt="" title="" /></a></li>';
			big_images_code += '<div style="overflow: hidden; display:block" class="active"><img src="'+mas[x][1]+'" alt="" title="" /></div>';
			}
	}
	
	html = '<div class="info_block_my_slider"><div id="min_images_my_slider"><ul>'+min_images_code+'</ul></div><div class="clear_my_slider"></div><div id="description_my_slider"><div class="alt_my_slider">'+mas[0][2]+'</div><div class="clear_my_slider"></div><div class="title_my_slider">'+mas[0][3]+'</div><div class="clear_my_slider"></div><div class="number_my_slider">1</div></div><div class="prev_my_slider"><a href="#"><span>&nbsp;</span></a></div><div class="close_see_info_block_my_slider active"><a href="#">&nbsp;</a></div></div><div class="inner_block_my_slider">'+big_images_code+'</div><div class="next_my_slider"><a href="#"><span>&nbsp;</span></a></div>';
	$('#my_slider').html(html);

	$('.close_see_info_block_my_slider').live('click', function(){
		if($(this).index('.active')!=-1){
			$('.info_block_my_slider').animate({left: '-269px'});
			}else{
				$('.info_block_my_slider').animate({left: '0px'});
				}
		$(this).toggleClass('active');
		return false;
		});
		
		
	
	$('.next_my_slider').live('click', function(){
		num = $('.inner_block_my_slider div.active').index();
		if(num==mas.length-1){
			num=-1;
			
		}
		if(go_see){
			next_img(num, num);
		}
		
		return false
	});
	
	function next_img(n, x){
		go_see = false;
		$('.inner_block_my_slider div').removeClass('active').hide().css({'z-index' : 'auto', left: 'auto'});
		$('.number_my_slider').html(n+2);
		$('#description_my_slider .alt_my_slider').html(mas[n+1][2]);
		$('#description_my_slider .title_my_slider').html(mas[n+1][3]);
		$('#min_images_my_slider li a').removeAttr('class').eq(n+1).addClass('active');
		$('.inner_block_my_slider div').eq(x).show().animate({
			right: '-100px'
			}, 1000, function(){
				$(this).hide();
				go_see = true;
				}
		);
		$('.inner_block_my_slider div').eq(n+1).show().css({left: 'auto', right: '1500px', 'z-index' : '10'}).animate({
			right: 0
			}, {
				duration: 1000,
				easing: 'easeOutQuart'
				}).addClass('active');
	}
	
	
	$('.prev_my_slider').live('click', function(){
		num = $('.inner_block_my_slider div.active').index();
		if(num==0){
			num=mas.length;
		}
		if(go_see){
			prev_img(num, num);
		}
		return false
	});

	function prev_img(n, x){
		go_see = false;
		$('.inner_block_my_slider div').removeClass('active').hide().css({'z-index' : 'auto', right: 'auto'});
		$('.number_my_slider').html(n);
		$('#description_my_slider .alt_my_slider').html(mas[n-1][2]);
		$('#description_my_slider .title_my_slider').html(mas[n-1][3]);
		$('#min_images_my_slider li a').removeAttr('class').eq(n-1).addClass('active');
		$('.inner_block_my_slider div').eq(x>=mas.length ? 0 : x).show().animate({
			left: '-100px'
			}, 900, function(){
				$(this).hide();
				go_see = true;
				}
		);
		$('.inner_block_my_slider div').eq(n-1).show().css({right: 'auto', left: '1500px', 'z-index' : '10'}).animate({
			left: 0
			}, {
				duration: 1000, 
				easing: 'easeOutQuart'
				}).addClass('active');
	}
	
	$('#min_images_my_slider li a:not(.active)').live('click', function(){
		min_num = $('#min_images_my_slider li a').index(this);
		num = $('.inner_block_my_slider div.active').index();
		if(go_see){
			go_see = false;
			if(num>=min_num){
				prev_img(min_num+1, num);
				}else{
					next_img(min_num-1, num);
					}
		}
		return false
	})
	
	$('.prev_my_slider').live('mouseover', function(){
		clear_timer();
	})
	$('.prev_my_slider').live('mouseout', function(){
		timer();
	})
	$('.next_my_slider').live('mouseover', function(){
		clear_timer();
	})
	$('.next_my_slider').live('mouseout', function(){
		timer();
	})
	$('#min_images_my_slider a').live('mouseover', function(){
		clear_timer();
	})
	$('#min_images_my_slider a').live('mouseout', function(){
		timer();
	})
	
	
	function timer(){
		time = setInterval(go_next, auto_play_time);
	}
	function go_next(){
		num = $('.inner_block_my_slider div.active').index();
		if(num>mas.length-2){
			num=-1;
		}else{}
		next_img(num, num);
		if(num<mas.length-2){
			num++;
		}else{
			num=-1;
		}
	}
	function clear_timer(){
		clearTimeout(time);
	}
	if(auto_play){
		timer();
	}

})

