$('[data-toggle="tooltip"]').tooltip(),$(window).width()<1025&&$('[data-toggle="tooltip"]').tooltip({trigger:"click"});
var dropdown=$(".dropdown__card"),dropdown_link=$(".dropdown__nav-link");dropdown_link.click(function(d){d.preventDefault(),$(this).closest(".dropdown__nav").find(".dropdown__nav-link").removeClass("is--active"),$(this).closest(dropdown).find(".dropdown__toggle").text($(this).text()),$(this).addClass("is--active")});
var form_submit=$("[data-form-submit]"),notice_select=$("[data-notice-select]"),form_visible=$("[data-form-visible]");notice_select.on("click",function(e){var s=$(this).data("active-text"),i=$(this).data("text");console.log(s),console.log(i),$(document).find(".card__item").toggleClass("is--visible"),$(this).toggleClass("is--active"),$(this).text(function(e,t){return t===i?s:i})}),form_visible.on("click",function(e){e.preventDefault(),$(this).next(".form__panel.is--md-open").addClass("is--visible")}),form_submit.on("click",function(e){e.preventDefault();var t=$(this).closest(".form__wrap").find("input,select"),s=!0;$(".form__item").removeClass("is--error");for(var i=0;i<t.length;i++)t[i].validity.valid||(s=!1,$(t[i]).closest(".form__item").addClass("is--error"));return s&&($(this).closest(".form__panel").find(".form__result").addClass("is--visible"),$(this).closest(".form__panel").find(".form__wrap").addClass("is--hidden"),$(this).closest(".form__panel").find(".form__bg").addClass("is--result"),$(this).closest(".form__panel").find(".form__bg").addClass("is--result")),!1});var filter_view=$("[data-filter-view]");filter_view.on("click",function(e){e.preventDefault(),$(this).closest(".aside__filter").find(".form__checkbox.is--hidden").toggleClass("is--visible")});var select_default=$("[data-select-default]");select_default.select2({minimumResultsForSearch:-1});var phone=$(".form__control[type='tel']");phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});var file=$(".form__file-input");file.on("change",function(e){$(this).siblings(".form__file-name").html($(this).val().replace(/.*(\/|\\)/,"")+"<br> Заменить файл"),$(this).siblings(".form__file-count").html("Прикреплено "+$(this).prop("files").length+" файла").addClass("is--change"),$(this).siblings(".form__file-label").addClass("is--change"),$(this).closest(".form__row").find($('button[type="submit"]')).removeClass("is--error")});var navListItems=$(".form__step-link"),allWells=$(".form__step-pane"),allNextBtn=$("[data-step-next]"),allResetBtn=$("[data-step-reset]"),allResultBtn=$('[onsubmit="return false"]');allWells.hide(),navListItems.click(function(e){e.preventDefault();var t=$($(this).attr("href")),s=$(this);s.attr("disabled")||(s.closest(".form__panel").find(navListItems).removeClass("is--active"),s.addClass("is--active"),s.closest(".form__panel").find(allWells).hide(),t.show(),t.find("input:eq(0)").focus())}),allNextBtn.click(function(){var e=$(this).closest(".form__step-pane"),t=e.attr("id"),s=$('.form__step-link[href="#'+t+'"]').parent().next().children("a"),i=$('.form__step-link[href="#'+t+'"]'),l=e.find("input,select"),o=e.find(".tabs__link"),a=e.find(".form__radio-input"),r=!0,n=!0,d=!0;$(".form__item").removeClass("is--error"),$(".tabs__nav").removeClass("is--error");for(var c=0;c<l.length;c++)l[c].validity.valid||(r=!1,$(l[c]).closest(".form__item").addClass("is--error"));if(0<o.length)for(c=0;c<o.length;c++){if("false"!==$(o[c]).attr("aria-expanded")){d=!0,$(o[c]).closest(".tabs__nav").removeClass("is--error");break}d=!1,$(o[c]).closest(".tabs__nav").addClass("is--error")}if(0<a.length)for(c=0;c<a.length;c++){if(0!=$(a[c]).prop("checked")){n=!0,$(a[c]).closest(".form__row").find(allNextBtn).removeClass("is--error");break}n=!1,$(a[c]).closest(".form__row").find(allNextBtn).addClass("is--error")}0<o.length?r&&d&&(s.removeAttr("disabled").trigger("click"),i.addClass("is--checked")):0<a.length?r&&n&&(s.removeAttr("disabled").trigger("click"),i.addClass("is--checked")):r&&(s.removeAttr("disabled").trigger("click"),i.addClass("is--checked"))}),allResultBtn.click(function(e){e.preventDefault();var t=$(this).closest(".form__row"),s=$(this).data("location"),i=$(this).data("modal"),l=t.find("input,select"),o=!0;$('button[type="submit"]').removeClass("is--error"),$(".form__item").removeClass("is--error");for(var a=0;a<l.length;a++)console.log(l[a]),l[a].validity.valid?(o=!0,$(l[a]).closest(".form__row").find('button[type="submit"]').removeClass("is--error")):(o=!1,$(l[a]).closest(".form__item").addClass("is--error"),$(l[a]).closest(".form__row").find('button[type="submit"]').addClass("is--error"));o&&(s?location.href=s:"#modal-calc-calculation"==i&&($(i).modal("show"),setTimeout(function(){$(i).modal("hide"),$("#modal-calc-ready").modal("show"),setTimeout(function(){location.href="calculation.html"},5e3)},1e4)))}),$(".form__step-link:not([disabled])").trigger("click");var download_btn=$("[data-download-docs]"),download_item=$(".form__checkbox-input");download_item.on("change",function(e){$(this).closest(".content-block__wrap").find(download_btn).removeAttr("disabled")});
$("img").addClass("img-responsive");

var humb=$("[data-hamburger]"),collapse=$(".navbar__collapse"),html=$("html");humb.on("click",function(){$(this).toggleClass("is--active"),$(collapse).toggleClass("is--open"),$(html).toggleClass("is--open-navbar")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__container.is--collapse").length&&0==$(a.target).closest("[data-hamburger]").length&&(humb.removeClass("is--active"),$(html).removeClass("is--open-navbar"),$(collapse).removeClass("is--open"))});var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});
$("#next").on("click",function(){var a=$(".tabs__pane.active"),e=a.next();e.length&&(a.removeClass("active"),e.addClass("active"))}),$("#prev").on("click",function(){var a=$(".tabs__pane.active"),e=a.prev();e.length&&(a.removeClass("active"),e.addClass("active"))});
$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled");

"use strict";$(function(){var s='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',o='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';$("[data-slick-calc-block]").slick({slidesToShow:4,slidesToScroll:4,arrows:!1,dots:!1,infinite:!1,variableWidth:!0,responsive:[{breakpoint:3e3,settings:"unslick"},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,dots:!0,slide:".card__group.is--calc-card"}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,slide:".card__group.is--calc-card"}}]});var i=$("[data-slick-header]"),e=$("[data-slick-catalog]"),t=$("[data-slick-partners]"),l=$("[data-slick-finance]"),n=$("[data-slick-leasing]"),a=$("[data-slick-adv]"),r=$("[data-slick-dots]").data("slick-dots"),d=$(".slick-count");i.on("init reInit afterChange",function(s,o,i,e){var t=(i||0)+1;$(this).find(d).html("<span>"+t+"</span><span>/</span><span>"+o.slideCount+"</span>")}),i.slick({slide:".content-block__slider-slide",slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:4e3,prevArrow:s,nextArrow:o,fade:!0}),a.slick({slide:".content-block__slider-slide",slidesToShow:1,slidesToScroll:1,prevArrow:s,nextArrow:o,fade:!0,customPaging:function(s,o){$(s.$slides[o]).find("[data-thumb]").data("thumb");return"<a>"+$(s.$slides[o]).data("thumb")+"</a>"},responsive:[{breakpoint:3e3,settings:{arrows:!1,dots:!0}},{breakpoint:991,settings:{dots:!1,arrows:!0}}]}),e.slick({slidesToShow:2,slidesToScroll:2,arrows:!1,dots:r,infinite:!1,prevArrow:s,nextArrow:o,responsive:[{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),n.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,infinite:!1,responsive:[{breakpoint:3e3,settings:"unslick"},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),l.slick({slidesToShow:4,slidesToScroll:1,arrows:!0,dots:r,infinite:!0,prevArrow:s,nextArrow:o,responsive:[{breakpoint:991,settings:{slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),t.slick({slidesToShow:5,slidesToScroll:1,arrows:!1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:768,settings:{slidesToShow:3}}]})});