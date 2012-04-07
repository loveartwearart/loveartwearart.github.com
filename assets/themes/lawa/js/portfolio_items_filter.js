// JavaScript Document
$(function(){
	var elem = $('#items_wrapper .item').length;
	$('#items_wrapper .item').each(function(index, element) {
        $(this).attr('id', 'num_current_element_'+index);
    });
	for(x=0;x<Math.ceil(elem/4);x++){
		$('#items_wrapper').append('<div class="items"></div>');
		for(z=0;z<4;z++){
			if((z!=4)&&(z!=0)&&($('#items_wrapper>.item').length!=0)){
					$('#items_wrapper').find('.items').eq(x).append('<div class="line"></div>')
				}
			$('#items_wrapper').find('.items').eq(x).append($('#items_wrapper>.item').eq(0));
		}
	}				
	if($('#items_wrapper .items').length>1){
		for(y=0;y<$('#items_wrapper .items').length;y++){
			$('#all_rages').append('<a href="#">'+y+'</a>')
		}
		$('#all_rages a').eq(0).addClass('active');
	}
	
	$('#all_rages a').live('click', function(){
		$('#all_rages a').removeClass('active');
		$(this).addClass('active');
		var num = $('#all_rages a.active').index();
		$('#items_wrapper').animate({left: '-'+num*274});
		return false;
	})
	
	$('#items_wrapper .item').live('click', function(){
		active_see($(this).attr('id'));		
		})
	$('.block_filter a').click(function(){
		var title = $(this).attr('title');
		$('.block_filter a').removeClass('active');
		$(this).addClass('active');
		var elems = $('#items_wrapper .items .item').detach();
		$('#items_wrapper .items').remove();
		$('#items_wrapper').append(elems);
			filter('.'+title);
			return false;	
		})
})

function filter(a){
	if(a!='.all'){
		$('#all_rages a').remove();
		$('#items_wrapper').css('left', 0);
		var elem = $('#items_wrapper .item'+a).length;
		for(x=0;x<Math.ceil(elem/4);x++){
			$('#items_wrapper').append('<div class="items"></div>');
			for(z=0;z<4;z++){
				if((z!=4)&&(z!=0)&&($('#items_wrapper>.item'+a).length!=0)){
						$('#items_wrapper').find('.items').eq(x).append('<div class="line"></div>')
					}
				$('#items_wrapper').find('.items').eq(x).append($('#items_wrapper>.item'+a).eq(0));
			}
		}				
		if($('#items_wrapper .items').length>1){
			for(y=0;y<$('#items_wrapper .items').length;y++){
				$('#all_rages').append('<a href="#">'+y+'</a>')
			}
			$('#all_rages a').eq(0).addClass('active');
		}
	}else{
			$('#all_rages a').remove();
			var elem = $('#items_wrapper .item').length;
			var num_c_e = 0;
			for(x=0;x<Math.ceil(elem/4);x++){
				$('#items_wrapper').append('<div class="items"></div>');
				for(z=0;z<4;z++){
					if((z!=4)&&(z!=0)&&($('#items_wrapper>.item').length!=0)){
							$('#items_wrapper').find('.items').eq(x).append('<div class="line"></div>')
						}
					$('#items_wrapper').find('.items').eq(x).append($('#items_wrapper>.item#num_current_element_'+num_c_e));
					num_c_e++;
				}
			}				
			if($('#items_wrapper .items').length>1){
				for(y=0;y<$('#items_wrapper .items').length;y++){
					$('#all_rages').append('<a href="#">'+y+'</a>')
				}
				$('#all_rages a').eq(0).addClass('active');
			}
		}
	active_see($('#items_wrapper .items .item').eq(0).attr('id'));
}
function active_see(id){
	var arr = id.split('num_current_element_');
	$('#items_wrapper .item').removeClass('active');
	$('#items_wrapper .items .item#'+id).addClass('active');
	$('.block_current_items .block_current_item').removeClass('active').eq(arr[1]).addClass('active');
	}