// JavaScript Document
$(function(){ 
	$('a.toggler:not(.opened)').each(function(index, element) {
        $(this).next('div.toggler').hide();
    });
	$('a.toggler').live('click', function(){
		if($(this).is('.acordion')){
			if($(this).is('.opened')){
				$(this).parent().find('a.toggler').removeClass('opened').next('div.toggler').slideUp('fast');
			}else{
				$(this).parent().find('a.toggler').removeClass('opened').next('div.toggler').slideUp('fast');
				$(this).addClass('opened').next('div.toggler').slideDown('fast');
				}
		}else{
			if($(this).is('.opened')){
				$(this).removeClass('opened').next('div.toggler').slideUp('fast');
			}else{
				$(this).addClass('opened').next('div.toggler').slideDown('fast');
				}
			}
		return false;
	})
})