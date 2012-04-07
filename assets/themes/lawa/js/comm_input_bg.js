// JavaScript Document
$(function(){
	$('.active_bg_form input, .active_bg_form textarea').focus(function(){
		$(this).parent().css('background-position', 'left bottom');
		})
	$('.active_bg_form input, .active_bg_form textarea').blur(function(){
		$(this).parent().css('background-position', 'left top');
		})
	})