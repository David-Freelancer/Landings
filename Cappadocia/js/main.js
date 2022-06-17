$(function () {
	$('.fairy-tail__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/previous-arrow.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/next-arrow.svg" alt=""></button>',
		autoplay: true,
		autoplaySpeed: 3500,
		fade: true,
		responsive: [
			{
				breakpoint: 601,
				settings: {
					arrows: false
				}

			}
		]
	});
	$('.our-trip__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/previous-arrow.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/next-arrow.svg" alt=""></button>',
		autoplay: true,
		autoplaySpeed: 3500,
		fade: true,
		responsive: [
			{
				breakpoint: 601,
				settings: {
					arrows: false
				}

			}
		]
	});
	$(".menu, .our-trip__body").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 2000);
	});


});