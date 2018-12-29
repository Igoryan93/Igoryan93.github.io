$(function(){
	$('.form__block__btn').on('click', function(){
		var text = $(this).siblings('[type="text"]').val();
		var date = $(this).siblings('[type="datetime-local"]').val();
		$('.added').append('<label for=""><input type="checkbox" />' + text + date + '</label>');
		return false;
	});
});