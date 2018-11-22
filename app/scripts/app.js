import svg4everybody from 'svg4everybody';
import carousel from 'slick-carousel';
import $ from 'jquery';

$(() => {
	svg4everybody();
});
$(document).ready(function () {
	$(".dropdown-item").hover(function () {
		$(this).children(".header-nav__dropdown-wrapper").stop().delay(60).animate({height: "toggle", opacity: "toggle"}, 60);
		$(this).toggleClass("active").animate(100);
	});


		$('.js-slider').slick({
			slideToShow: 1,
			slidesToScroll: 1,
			prevArrow: ".slider__navigation--prev",
			nextArrow: ".slider__navigation--next",
			dots: true,
			customPaging : function(slider, i) {
					return '<a class="slider__dot"></a>';
			},
			appendDots: '.slider__dots'
		});
	
 // раскрытие подменю при наведении
 // let mainSubnavHover = function() {
 //        $('.main-subnav__item').hover(
 //            function() {
 //                let parentList = $(this).closest('.main-subnav__list');
 //                if ($(this).children('.main-subnav__list').length) {
 //                    let catNavHeight = $(this).children('.main-subnav__list').outerHeight();
 //                    if (parentList.outerHeight() < catNavHeight) {
 //                        parentList.css('height', catNavHeight);
 //                    }
 //                    parentList.css('width', '720');
 //                }

 //            },
 //            function() {
 //                let parentList = $(this).closest('.main-subnav__list');
 //                parentList.css('height', 'auto')
 //                parentList.css('width', 'auto')
 //            }
 //        )
 //    };

});
