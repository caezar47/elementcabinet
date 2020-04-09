var toggleButton = $('[data-aside-toggle="dropdown"]');
$('.aside__block').closest('body').addClass('is--aside-bottom');

toggleButton.on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).closest('.aside__block').toggleClass('open');
});