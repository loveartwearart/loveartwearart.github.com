// JavaScript Document
$(document).ready(function() {
	var x = 1,
	y = 0,
	text = '';
	y = $('#block_slider_images>div').length;
	text = 'Image '+x+' of '+y;
	$("#info_images").text(text);
	$("#block_slider_images").cycle({
		fx:     'fade', 
		activePagerClass: 'active',
		pager: '#all_images',
		timeout: 0
	});
	$("#all_images a").live('click', function(){
		x = $("#all_images a.active").index()+1;
		text = 'Image '+x+' of '+y;
		$("#info_images").text(text);
		})
});