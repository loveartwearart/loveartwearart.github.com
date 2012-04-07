// JavaScript Document
$(function(){
	$('.blog_post_prev_imgs .img a').live('click', function(){
		$('.blog_post_prev_imgs .img').removeClass('active');
		$(this).parent().parent().addClass('active');
		var num = $(this).parent().parent().index();
		update_shadow('.block_blog .post_pic', num);
		return false;
		})
	})

function update_shadow(a, b){
	$(a+'>div').each(function(){
		var img = $(this).find('img').eq(b).attr('src');
			$(this).css({'background-image': 'url('+img+')'});
		})
}