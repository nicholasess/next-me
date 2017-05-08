$(function(){

function ability(){
	setTimeout(function() {
		$('.nx-icon-grid').css('border', 'none').css('border', '1px solid green').removeClass('nx-icon-grid--disabled');
	}, 1000);
}

ability()

	$('body').on('click','.nx-button--simple',function(){
		ability()
	})

})

//nx-app--confirmation-disclaimer-active
//nx-app--yellow nx-app--confirmation-disclaimer-active

