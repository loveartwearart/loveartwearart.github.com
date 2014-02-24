// JavaScript Document

$(document).ready(function() {
	see_big2();
	$("a[rel^='prettyPhoto']").prettyPhoto({
		deeplinking : false,
		counter_separator_label : ' of ',
		gallery_markup : '',
		social_tools : '',
		slideshow : false,
		opacity : 0.29
	});
	$('.shadow_img>div').each(function(){
		var img = $(this).find('img').attr('src');
			$(this).css({'background-image': 'url('+img+')'});
		})
	$('.see_big2>div').each(function(){
		var img = $(this).find('img').attr('src');
		$(this).css({'background-image': 'url('+img+')'});
		})
	$('.see_big').hover(function(){
		$(this).find('.description').slideDown();
		$(this).find('.link_big').slideDown();
		}, function(){
		$(this).find('.description').slideUp();
		$(this).find('.link_big').slideUp();
		})
	$('#menu>ul>li').hover(function(){
		$(this).find('ul').eq(0).stop(true, true).slideDown('fast');
		},function(){
			$(this).find('ul').slideUp(100);
			}
	)

	$('#menu>ul>li>ul>li a').hover(function(){
		$(this).animate({'padding-left': 3}, 100);
		},function(){
			$(this).animate({'padding-left': 0}, 100);
			}

	)
	$('#menu>ul>li>ul>li').hover(function(){
		$(this).find('ul').slideDown('fast');
		},function(){
			$(this).find('ul').slideUp(100);
			}
	)
});
function see_big2(){
	$('.see_big2>div').find('a').hide();
	$('.see_big2>div').hover(function(){
		$(this).find('a').fadeIn('fast');
		}, function(){
			$(this).find('a').fadeOut('fast');
		})
	}
