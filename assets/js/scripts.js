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
			$('.long_btn3').removeClass('active');
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
 
	$(document).on('click','.accordion-item button',function(){  
		$('.accordion-button i').css({'transform':' rotate(-90deg)'});
		$('.accordion-button.collapsed i').css({'transform':' rotate(90deg)'}); 

		return false; 
	});
	

	$(document).on('change', '#number_entry', function(){
		var number_entry = parseInt($(this).val());  
		$('.sk_num_add').html(number_entry);
		$('.sk_placeholder').attr('placeholder', 'Enter Entry Order '+number_entry); 
	
		var addDiv = ''; 
	
		for (let index = 2; index < number_entry; index++) { 
	
			addDiv += `<div class="input_group auto_gent">
							<label for="">Entry Order ` + index + ` (Auto Generated)</label><br>
							<input disabled type="number" name="entry_order[]" placeholder="Enter Entry Order ` + index + `">
					   </div>`;
			
		}

		$('.sk_append').html(addDiv);
	  
	});

	$(document).on('change', '#take_profit_select', function(){
		var take_profit_select = parseInt($(this).val());   

		var data_module =  Math.ceil(100 / take_profit_select)
		var addDivs = ''; 
	
		for (let index = 0; index < take_profit_select; index++) { 

			var dataindex = index + 1;
	
			addDivs += `<div class="row gx-5">
							<div class="col-6">
								<div class="input_group input_append_profit">
									<label for="">Take Profit `+dataindex+` </label><br>
									<input type="number" name="" placeholder="Enter Take Profit `+dataindex+` Price" id="">
								</div>
							</div>
							<div class="col-6">
								<div class="input_group input_append_profit">
									<label for="">Take Profit `+dataindex+` (%)</label><br>
									<input type="number" name="" class="sk_module_val" value="">
								</div>
							</div>
						</div>`;
			
		}

		$('.sk_profit_add').html(addDivs);
		
		$('.sk_module_val').attr('value',data_module); 
	
	  
	});
	
 

});