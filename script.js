var $container = $('.js-frequency')

$container.on('change', function(e){

	var $el = $(this)
	var val = $el.val()

	if(val == 'once'){
		$.magnificPopup.open({
		  items: {
		    src: '#frequencypopup'
		  },
		  type: 'inline',
		  removalDelay: 400,
			mainClass: 'mfp-fade',
		});
	}

})

var $container = $('.js-payment')
var $target = $('#monthsRecurring')


$container.on('change', function(e){

	var $el = $(this)
	var val = $el.val()

	if(val == 'funds_transfer'){
		$target.val('-1')
	}else{
		$target.val('-2')
	}

})


/**
 * Number input with controls allow to decrease / increase value
 * ============================================================
 * @limit - define maximum value
 */

var $container = $(document);
var limit = 99;

$container.on('click', '.js-pcs-control', function(e){

	var $el = $(this)
	var action = $el.data('control')
	var $pcsField = $el.closest('.js-pcs').find('.pcs-field')
	var pcsFieldVal = parseInt($pcsField.attr('value'))

	if(action == 'minus'){
		if(pcsFieldVal <= 1){
			return false
		}
		$pcsField.attr('value', pcsFieldVal - 1)

	}else if(action == 'plus'){
		if(pcsFieldVal >= limit){
			return false
		}

		$pcsField.attr('value', pcsFieldVal + 1)
	}

	$pcsField.trigger('change')

	e.preventDefault()
})


var $radiolist = $('.js-radiolist')

$radiolist.on('click', '.radio-control', function(e){

	var $el = $(this)
	var $parent = $el.closest('.js-radiolist')
	var title = $el.attr('data-title')
	var text = $el.attr('data-text')

	var $target = $($parent.attr('data-target'))
	var $targetTitle = $target.find('h2')
	var $targetText = $target.find('p')

	$targetTitle.html(title)
	$targetText.html(text)

})

/*
	@ Javascript toggle menu binding
*/
var $toggler = $(".js-companygroup")

if($toggler.length){
	$toggler.click(function(){
		$('#form-companygroup').toggleClass('hide')
	})
}

/*
	@ Javascript toggle menu binding
*/
var $cplan = $(".js-customamount")

if($cplan.length){
	$cplan.click(function(){
		$('#form-customamount').removeClass('hide').focus()
		$('#frm-customamount').attr('name', 'amount')
	})
}

var $plan = $(".js-plan")
if($plan.length){
	$plan.click(function(){
		$('#form-customamount').addClass('hide')
		$('#frm-customamount').attr('name', 'customamount')
	})
}

/*
	@ Javascript toggle menu binding
*/
var $input = $(".js-copyaddress")

if($input.length){
	$input.click(function(){
		var address = $('#frm-custom-companystreet').val()
		var city = $('#frm-custom-companycity').val()
		var postcode = $('#frm-custom-companypostcode').val()

		$('#frm-street').val(address)
		$('#frm-city').val(city)
		$('#frm-postcode').val(postcode)
	})
}
