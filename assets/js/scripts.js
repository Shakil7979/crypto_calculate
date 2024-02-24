$(document).ready(function(){ 


	
	$(document).on('click','.long_btn',function(){
		$('.long_btn').removeClass('active');
		$(this).addClass('active');

		return false;
	});

	$(document).on('click','.long_btn2',function(){
		$('.long_btn2').removeClass('active');
		$(this).addClass('active');
		var data_id = $(this).attr('data_id'); 
		if(data_id == 2){ 
			$('.switch_ul3').removeClass('long_3_disable');
			$('.long_btn33').addClass('active');
			$('.multiple_filed').show();
		}else{
			$('.long_btn33').removeClass('active');
			$('.switch_ul3').addClass('long_3_disable');
			$('.multiple_filed').hide();
		} 
		return false;
	});

	$(document).on('click','.long_btn3',function(){
		$('.long_btn3').removeClass('active');
		$(this).addClass('active');

		return false;
	});

	$(document).on('click','.menu_bars',function(){ 
		$('.hamburger-menu-links').slideToggle();

		return false;
	});
	
 

});