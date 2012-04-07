// JavaScript Document
$(function(){
init_fields();
})
function init_fields() {
	$('.s_inp_text').each(function() {
		var text = $(this).attr('title');
		var html = '<span>' + text + '</span>';
		$(this).parent().append(html);
		
		if($(this).val() == '') {
			$(this).hide();
			$(this).next().show();
		}
		else {
			$(this).css({'display' : 'block'});
			$(this).next().hide();
		}
	});
	
	$('.s_inp_text').live('blur', function() {
		if($(this).val() == '') {
			$(this).hide();
			$(this).next().show();
		}
	});
	
	$('.s_inp_text ~ span').live('click', function() {
		$(this).hide();
		$(this).prev().css({'display' : 'block'}).focus();
	});
}