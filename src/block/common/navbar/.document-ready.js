var humb = $("[data-hamburger]");
var collapse = $(".navbar__collapse");
var html = $("html");

humb.on('click',function() {	
	$(this).toggleClass("is--active");			
	$(collapse).toggleClass("is--open");
	$(html).toggleClass("is--open-navbar");
});
$(document.body).on('click', function(event) {
	if($(event.target).closest('.navbar__container.is--collapse').length == 0 && $(event.target).closest('[data-hamburger]').length == 0){	
		humb.removeClass("is--active");
		$(html).removeClass("is--open-navbar");
		$(collapse).removeClass("is--open");
	}		
});

var url = window.location.pathname;
//var url = window.location.href;
$('.navbar__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.tabs__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('[data-azbn-toggle="dropdown"]').on('click', function(e) {
	$(".azbn-dropdown").toggleClass('open');
});	
$('.navbar-aside__dropdown [data-toggle="dropdown"]').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).parent().siblings().removeClass('open');
	$(this).parent().toggleClass('open');
});
$('.azbn__search-dropdown').on('shown.bs.dropdown', function(e) {
	$('.azbn__search-input').focus();
});


