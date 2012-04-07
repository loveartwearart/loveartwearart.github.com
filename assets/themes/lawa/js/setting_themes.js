// JavaScript Document
$(function(){
	var t_open_s = '';
	var g_skin_s = '';
	var bg_skin_s = '';
	var color_s = '';
	var bg_patterns_s = '';
	var code_setting_themes = '<div id="setting_themes_block"><div class="themes_top"></div><div class="themes_content"><form id="themes_setting" action=""><a href="#" id="themes_button"><span></span></a>';
	var g_skin = [['clean_theme','Clean theme'], ['dark_theme','Dark theme']];
	var bg_skin = [['boxed','Boxed'], ['stretched', 'Stretched']];
	var c_theame = [['red', 'images/prev_color_red.jpg'], ['orange', 'images/prev_color_orange.jpg'], ['blue', 'images/prev_color_blue.jpg'], ['green', 'images/prev_color_green.jpg'], ['dark_red', 'images/prev_color_darck_red.jpg'], ['yellow', 'images/prev_color_yellow.jpg'], ['purple', 'images/prev_color_purple.jpg']];
	var bg_patterns = [['bg1', 'images/bg_p_type1.jpg'], ['bg2', 'images/bg_p_type2.jpg'], ['bg3', 'images/bg_p_type3.jpg'], ['bg4', 'images/bg_p_type4.jpg'], ['bg5', 'images/bg_p_type5.jpg']];
	
	$.post('start_setting_themes.php', function(data) 																																									
		{
			t_open_s = $.parseJSON(data).t_open;
			g_skin_s = $.parseJSON(data).g_skin;
			bg_skin_s = $.parseJSON(data).bg_skin;
			color_s = $.parseJSON(data).color;
			bg_patterns_s = $.parseJSON(data).bg_patterns;
			if(g_skin_s!=''){
				$('body').addClass(g_skin_s);
			}
			if(color_s!=''){
				$('body').attr('id', color_s);
			}
			if(bg_patterns_s!=''){
				$('body').addClass(bg_patterns_s);
			}
			if(bg_skin_s!=''){
				$('body').addClass(bg_skin_s);
			}
			
			if(g_skin!=''){
				code_setting_themes += '<p>General skins</p>';
				code_setting_themes += '<select id="g_skin">';
				for(var x=0; x<g_skin.length; x++){
					if(g_skin_s!=g_skin[x][0]){
						code_setting_themes+= '<option value="'+g_skin[x][0]+'">'+g_skin[x][1]+'</option>';
						}else{
							code_setting_themes+= '<option value="'+g_skin[x][0]+'" selected="selected">'+g_skin[x][1]+'</option>';
							}
					
					}
				code_setting_themes += '</select>';
				code_setting_themes += '<div class="clear"></div>';
				}
			if(bg_skin!=''){
				code_setting_themes += '<p>Backround</p>';
				code_setting_themes += '<select id="bg_skin">';
				for(var x=0; x<bg_skin.length; x++){
					if(bg_skin_s!=bg_skin[x][0]){
						code_setting_themes+= '<option value="'+bg_skin[x][0]+'">'+bg_skin[x][1]+'</option>';
						}else{
							code_setting_themes+= '<option value="'+bg_skin[x][0]+'" selected="selected">'+bg_skin[x][1]+'</option>';
							}
					}
				code_setting_themes += '</select>';
				code_setting_themes += '<div class="clear"></div>';
				}
			if(c_theame!=''){
				code_setting_themes += '<p>Color schemes</p><div class="theame_box">';
				for(var x=0; x<c_theame.length; x++){
					code_setting_themes+= '<a href="#" class="c_theame" id="'+c_theame[x][0]+'"><img src="'+c_theame[x][1]+'" alt="" /></a>';
					}
				code_setting_themes += '</div><div class="clear"></div>';
				}
			if(bg_patterns!=''){
				code_setting_themes += '<p>Background Patterns</p><div class="theame_box">';
				for(var x=0; x<bg_patterns.length; x++){
					code_setting_themes+= '<a href="#" class="bg_patterns" id="'+bg_patterns[x][0]+'"><img src="'+bg_patterns[x][1]+'" alt="" /></a>';
					}
				code_setting_themes += '</div><div class="clear"></div>';
				}
			
			
			
			
			code_setting_themes += '</form><a href="#" id="themes_reset">Reset styles</a></div><div class="themes_bottom"></div></div>';
			$('body').append(code_setting_themes);	
			if(t_open_s=='close'){
				$('#setting_themes_block').css('left', '-174px').addClass('close');
			}else{
				$('#setting_themes_block').removeClass('close');
				}	
		
			
	});
		
	
	$('#setting_themes_block:not(.close) #themes_button').live('click', function(){
		$('#setting_themes_block').animate({left: '-174px'}).addClass('close');
		$.post('setting_themes.php', {t_open: 'close'});
		return false
		})
	$('#setting_themes_block.close #themes_button').live('click', function(){
		$('#setting_themes_block').animate({left: '0px'}).removeClass('close');
		$.post('setting_themes.php', {t_open: 'open'});
		return false
		})
		
	$('#themes_setting a.c_theame').live('click', function(){
		$.post('setting_themes.php', {
			color: $(this).attr('id')}, function(data) 																																									
			{
				color = $.parseJSON(data).color;
				if(color!='null'){
					$('body').attr('id', color);
					}
				
			});
		return false
		});
	$('#themes_setting a.bg_patterns').live('click', function(){
		$.post('setting_themes.php', {
			bg_patterns: $(this).attr('id')}, function(data) 																																									
			{
				bg_patterns_s = $.parseJSON(data).bg_patterns;
				if(bg_patterns_s!='null'){
					for(var x=0;x<bg_patterns.length; x++){
						$('body').removeClass(bg_patterns[x][0]);
					}
					$('body').addClass(bg_patterns_s);
				}
				
			});
		return false
		});
	$('#g_skin').live('change', function(){
		for(var x=0;x<g_skin.length;x++){
			$('body').removeClass(g_skin[x][0]);
			
		}
		var cs = $(this).find('option:selected').val();
		$.post('setting_themes.php', {g_skin: cs});
		$('body').addClass(cs);
		return false
	})
	
	$('#bg_skin').live('change', function(){
		for(var x=0;x<bg_skin.length;x++){
			$('body').removeClass(bg_skin[x][0]);
		}
		var cs = $(this).find('option:selected').val();
		$.post('setting_themes.php', {bg_skin: cs});
		$('body').addClass(cs);
		return false
	})
	$('#themes_reset').live('click', function(){
		$.post('setting_themes.php', {
			t_open: 'empty', g_skin: 'empty', bg_skin: 'empty', color: 'empty', bg_patterns: 'empty'}, function(data) 																																									
			{
				$('body').removeAttr('class').removeAttr('id');
				
			});
		return false
	})
		
})
