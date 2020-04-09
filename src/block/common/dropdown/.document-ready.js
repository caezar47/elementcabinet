var dropdown = $(".dropdown__card");
var dropdown_link = $(".dropdown__nav-link");
dropdown_link.click(function(e) {
	e.preventDefault();
	$(this).closest('.dropdown__nav').find('.dropdown__nav-link').removeClass("is--active");
	$(this).closest(dropdown).find('.dropdown__toggle').text($(this).text());
	$(this).addClass("is--active");
});