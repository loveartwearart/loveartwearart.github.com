// JavaScript Document
$(function(){
$('#submit').click(function(){
	$.post('contact_message.php', {
		u_name: $('form#contact_form input[name=u_name]').val(), 
		u_mail: $('form#contact_form input[name=u_mail]').val(), 
		u_site: $('form#contact_form input[name=u_site]').val(), 
		u_phone: $('form#contact_form input[name=u_phone]').val(), 
		u_subject: $('form#contact_form input[name=u_subject]').val(), 
		u_comment: $('form#contact_form textarea[name=u_comment]').val()}, function(data) 																																									
		{
			status = $.parseJSON(data).status;
			switch (status) {
				case '0':
					message('Error, try again later.', 0) 
					break
				case '1':
					message('Message sent successfully!', 1) 
					break
				case '2':
					message('Fill out the required fields!', 0) 
					break
				case '3':
					message('Incorrect email!', 0) 
					break
				default:
					message('Error, try again later.', 0) 					
			}

			
		});
	return false
	});
	function message(a, b){
		if(b == 1){
			$('#status').removeClass('false').addClass('ok');
		}else{
			$('#status').removeClass('ok').addClass('false');
			}
		$('#status span').text(a).parent().slideDown(function(){setTimeout(function(){$('#status').slideUp()},3000)});
    }
});