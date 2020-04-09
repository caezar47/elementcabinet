//Все формы 
var form_submit = $("[data-form-submit]");
var form_visible = $("[data-form-visible]");

form_visible.on('click', function(e) {
	e.preventDefault();
	$(this).next('.form__panel.is--md-open').addClass('is--visible');
});

//сброс функции кнопки submit
/*$('form button[type="submit"]').on('click', function(e) {
	e.preventDefault();
});*/

form_submit.on('click', function(e) {
	e.preventDefault();
	var wrap = $(this).closest(".form__wrap"),
		controls = wrap.find("input,select"),
		isValid = true;

	$(".form__item").removeClass("is--error");
	for(var i=0; i<controls.length; i++){
		if (!controls[i].validity.valid){
			isValid = false;
			$(controls[i]).closest(".form__item").addClass("is--error");
		}		
	}
	if (isValid){
		$(this).closest('.form__panel').find('.form__result').addClass('is--visible');
		$(this).closest('.form__panel').find('.form__wrap').addClass('is--hidden');
		$(this).closest('.form__panel').find('.form__bg').addClass('is--result');
		$(this).closest('.form__panel').find('.form__bg').addClass('is--result');
	}
	return false;
});
//Все формы - end's

// споллер показать все для фильтров
var filter_view = $("[data-filter-view]");
filter_view.on('click', function(e) {
	e.preventDefault();
	$(this).closest('.aside__filter').find('.form__checkbox.is--hidden').toggleClass('is--visible');
});
// споллер показать все для фильтров - end's

// подключение плагина select2
var select_default = $("[data-select-default]");
select_default.select2({
	minimumResultsForSearch: -1,
});

var select_primary = $("[data-select-primary]");
select_primary.select2({
	minimumResultsForSearch: -1,
	containerCssClass: "is--primary",
	dropdownCssClass: "is--primary"
});

var select_primary_l = $("[data-select-primary-l]");
select_primary_l.select2({
	minimumResultsForSearch: -1,
	containerCssClass: "is--primary-light",
	dropdownCssClass: "is--primary-light"
});

var select_inline = $("[data-select-inline]");
select_inline.select2({
	minimumResultsForSearch: -1,
	containerCssClass: "is--inline",
	dropdownCssClass: "is--inline"
});
// подключение плагина select2 - end's


// маска для поля ввода телефона
var phone = $(".form__control[type='tel']");
phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});

// кастомизация поля прикрепления файла
var file = $('.form__file-input');
file.on('change', function(e) {
    $(this).siblings('.form__file-name').html($(this).val().replace(/.*(\/|\\)/, '')+'<br> Заменить файл');
});


//Форма запрос лисинга
var navListItems = $('.form__step-link'),
    allWells = $('.form__step-pane'),
    allNextBtn = $('[data-step-next]'),
    allResetBtn = $('[data-step-reset]'),
    allResultBtn = $('[data-step-finish]');

allWells.hide();
navListItems.click(function (e) {
	e.preventDefault();
	var $target = $($(this).attr('href')),
	    $item = $(this);

	if (!$item.attr('disabled')) {
		$item.closest('.form__wrap').find(navListItems).removeClass('is--active');
		$item.addClass('is--active');
		$item.closest('.form__wrap').find(allWells).hide();
		$target.show();
		$target.find('input:eq(0)').focus();
	}
});

allNextBtn.click(function(){
	var curStep = $(this).closest(".form__step-pane"),
		curStepBtn = curStep.attr("id"),
		nextStepWizard = $('.form__step-link[href="#' + curStepBtn + '"]').parent().next().children("a"),
		curInputs = curStep.find("input,select"),
		isValid = true;

	$(".form__item").removeClass("is--error");
	for(var i=0; i<curInputs.length; i++){
		if (!curInputs[i].validity.valid){
			isValid = false;
			$(curInputs[i]).closest(".form__item").addClass("is--error");
		}		
	}
	if (isValid)
		nextStepWizard.removeAttr('disabled').trigger('click');
});
allResultBtn.click(function(){
	var curStep = $(this).closest(".form__step-pane"),
		curStepBtn = curStep.attr("id"),
		nextStepWizard = $('.form__step-link[href="#' + curStepBtn + '"]').parent().next().children("a"),
		curInputs = curStep.find("input,select"),
		isValid = true;

	$(".form__item").removeClass("is--error");
	for(var i=0; i<curInputs.length; i++){
		if (!curInputs[i].validity.valid){
			isValid = false;
			$(curInputs[i]).closest(".form__item").addClass("is--error");
		}		
	}
	if (isValid){
		$(this).closest('.form__panel').find('.form__result').addClass('is--visible');
		$(this).closest('.form__panel').find('.form__wrap').addClass('is--hidden');
		$(this).closest('.form__panel').find('.form__bg').addClass('is--result');
	}
});
allResetBtn.click(function(e){
	e.preventDefault();
	var $item = $(this);
	$item.closest('.form__panel').find('.form__control').val('').removeAttr('selected');
	$item.closest('.form__panel').find(allWells).hide();
	$item.closest('.form__panel').find(allWells).eq(0).show();
	$item.closest('.form__panel').find('.form__result').removeClass('is--visible');
	$item.closest('.form__panel').find('.form__wrap').removeClass('is--hidden');
	$item.closest('.form__panel').find('.form__bg').removeClass('is--result');
	$item.closest('.form__panel').find('.form__step-link').removeClass('is--active').attr({'disabled':''});
	$item.closest('.form__panel').find('.form__step-item').eq(0).children("a").addClass('is--active').removeAttr('disabled');
});

$('.form__step-link:not([disabled])').trigger('click');
//Форма запрос лисинга - end's