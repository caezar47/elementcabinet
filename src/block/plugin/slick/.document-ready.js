'use strict';
$(function() { 
	var calc_block = $('[data-slick-calc-block]');


	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';

	calc_block.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: false,
		infinite: false,
		variableWidth: true,
		responsive: [
		    {
				breakpoint: 3000,				
		      	settings: "unslick"
		    },
		    {
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
					slide: '.card__group.is--calc-card',
				}
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					slide: '.card__group.is--calc-card',
				}
		    }
		]
	});

	//old
	var header = $('[data-slick-header]');
	var catalog = $('[data-slick-catalog]');
	var partners = $('[data-slick-partners]');
	var finance = $('[data-slick-finance]');
	var leasing = $('[data-slick-leasing]');
	var adv = $('[data-slick-adv]');
	var dots = $('[data-slick-dots]').data('slick-dots');
	//console.log(dots);

	var count = $('.slick-count');
    

    header.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          $(this).find(count).html('<span>'+i + '</span><span>/</span><span>' + slick.slideCount+'</span>');
    });
	header.slick({
		slide: '.content-block__slider-slide',
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});	
	adv.slick({
		slide: '.content-block__slider-slide',
		slidesToShow: 1,
		slidesToScroll: 1,		
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true,
		customPaging: function(slick, index) {
	      var d = $(slick.$slides[index]).find('[data-thumb]').data('thumb'); 
	      var d = $(slick.$slides[index]).data('thumb'); 
	      return '<a>'+d+'</a>';
	    },
		responsive: [
		    {
				breakpoint: 3000,
				settings: {
					arrows: false,
					dots: true,
				}
				
		    },
		    {
				breakpoint: 991,
				settings: {
					dots: false,
					arrows: true,
				}
		    }
		]
	});
	catalog.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		dots: dots,
		infinite: false,
		//centerMode: true,
  		//centerPadding: '60px',
		//infinite: true,
		//autoplay: true,
  		//autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		// responsive: [
		//     {
		// 		breakpoint: 768,				
		//       	settings: "unslick"
		//     }
		// ]
		responsive: [
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
		    }
		]
	});
	leasing.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false,
		responsive: [
		    {
				breakpoint: 3000,
					settings: "unslick"
				
		    },
		    {
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1, 
				}
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1, 
				}
		    }
		]
	});

	finance.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: dots,
		infinite: true,
		//centerMode: true,
  		//centerPadding: '60px',
		//infinite: true,
		//autoplay: true,
  		//autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
		    },
		    {
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1, 
				}
		    }
		]
	});

	partners.slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 4000,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
		    }
		]
	});

	/*window.addEventListener("resize", function() {
	  if (window.innerWidth <= 768) {
	    catalog.slick('unslick');
	    sliderIsLive = false;
	  }
	  else {
	    if (sliderIsLive) {
	      catalog.slick();
	      sliderIsLive = true;
	    }
	  }
	});*/

	
	
	//$('.slick-cloned .content-block__preview').removeAttr('data-fancybox');
	//$('.slick-cloned .card-item__preview').removeAttr('data-fancybox');
}); 