//Все формы 
var form_submit = $("[data-form-submit]");
var form_visible = $("[data-form-visible]");


form_visible.on('click', function(e) {
	e.preventDefault();
	$(this).next('.form__panel.is--md-open').addClass('is--visible');
});
/*/рубль
function addRub (val) {
	return val + " ₽";
}
function removeRub (val) {
	val = val.replace(" ₽", "");
    val = val.replace("₽", "");
    val = val.replace(" ", "");
    return val;
}
$("input[data-rub]").on("input", function () {
	var $this = $(this);
    var val = $this.prop("value");
    var newVal = removeRub(val);
    newVal = addRub(newVal);
    $this.prop("value", newVal); 
});*/


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
    $(this).siblings('.form__file-count').html("Прикреплено " + $(this).prop('files').length +' файла').addClass('is--change');
    $(this).siblings('.form__file-label').addClass('is--change');
    $(this).closest(".form__row").find($('button[type="submit"]')).removeClass("is--error");
});


//Форма запрос лисинга
var navListItems = $('.form__step-link'),
    allWells = $('.form__step-pane'),
    allNextBtn = $('[data-step-next]'),
    allResetBtn = $('[data-step-reset]'),
    allResultBtn = $('[onsubmit="return false"]');

allWells.hide();
navListItems.click(function (e) {
	e.preventDefault();
	var $target = $($(this).attr('href')),
	    $item = $(this);

	if (!$item.attr('disabled')) {
		$item.closest('.form__panel').find(navListItems).removeClass('is--active');
		$item.addClass('is--active');
		$item.closest('.form__panel').find(allWells).hide();
		$target.show();
		$target.find('input:eq(0)').focus();
	}
});

allNextBtn.click(function(){
	var curStep = $(this).closest(".form__step-pane"),
		curStepBtn = curStep.attr("id"),
		nextStepWizard = $('.form__step-link[href="#' + curStepBtn + '"]').parent().next().children("a"),
		stepWizard = $('.form__step-link[href="#' + curStepBtn + '"]'),
		curInputs = curStep.find("input,select"),
		curTabs = curStep.find(".tabs__link"),
		curRadio = curStep.find(".form__radio-input"),
		isValid = true,
		isValidRadio = true,
		isValidTabs = true;

	$(".form__item").removeClass("is--error");
	$(".tabs__nav").removeClass("is--error");
	
	for(var i=0; i<curInputs.length; i++){
		if (!curInputs[i].validity.valid){
			isValid = false;
			$(curInputs[i]).closest(".form__item").addClass("is--error");
		}		
	}
	if(curTabs.length > 0){
		for(var i=0; i<curTabs.length; i++){
			if ($(curTabs[i]).attr("aria-expanded") === 'false'){
				isValidTabs = false;
				$(curTabs[i]).closest('.tabs__nav').addClass("is--error");
			} else {
				isValidTabs = true;
				$(curTabs[i]).closest('.tabs__nav').removeClass("is--error");
				break;
			}	
		}
	}
	if(curRadio.length > 0){
		for(var i=0; i<curRadio.length; i++){
			if ($(curRadio[i]).prop("checked") == false){
				isValidRadio = false;
				$(curRadio[i]).closest(".form__row").find(allNextBtn).addClass("is--error");
			} else {
				isValidRadio = true;
				$(curRadio[i]).closest(".form__row").find(allNextBtn).removeClass("is--error");
				break;
			}	
		}
	}

	if(curTabs.length > 0){
		if (isValid && isValidTabs){
			nextStepWizard.removeAttr('disabled').trigger('click');
			stepWizard.addClass('is--checked');
		}
	} else if(curRadio.length > 0){
		if (isValid && isValidRadio){
			nextStepWizard.removeAttr('disabled').trigger('click');
			stepWizard.addClass('is--checked');
		}
	} else {
		if (isValid){
			nextStepWizard.removeAttr('disabled').trigger('click');
			stepWizard.addClass('is--checked');
		}	
	}
});
allResultBtn.click(function(e){
	e.preventDefault();
	var curStep = $(this).closest(".form__row"),
		link = $(this).data("location"),
		modal = $(this).data("modal"),
		curInputs = curStep.find("input,select"),
		isValid = true;

	$('button[type="submit"]').removeClass("is--error");
	$(".form__item").removeClass("is--error");
	for(var i=0; i<curInputs.length; i++){
		console.log(curInputs[i]);
		if (!curInputs[i].validity.valid){
			isValid = false;
			$(curInputs[i]).closest(".form__item").addClass("is--error");
			$(curInputs[i]).closest(".form__row").find('button[type="submit"]').addClass("is--error");
		} else {
			isValid = true;
			$(curInputs[i]).closest(".form__row").find('button[type="submit"]').removeClass("is--error");
			//break;
		}
	}
	if (isValid){
		if (link){
			location.href = link;
		} else {
			if (modal == "#modal-calc-calculation"){
				$(modal).modal('show');
				setTimeout(function() {
					$(modal).modal('hide');
					$('#modal-calc-ready').modal('show');
					setTimeout(function() {
						location.href = 'calculation.html';
					}, 5000);
				}, 10000);

			}
		}
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

//Скачивание документа
var download_btn = $("[data-download-docs]");
var download_item = $(".form__checkbox-input");
download_item.on('change', function(e) {
    $(this).closest(".content-block__wrap").find(download_btn).removeAttr("disabled");
});