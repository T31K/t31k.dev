$(window).on('load', function() {
	//Preloader
	$('#status').delay(300).fadeOut()
	$('#preloader').delay(300).fadeOut('slow')
	$('body').delay(550).css({'overflow':'visible'})
})

$(document).ready(function() {
		//animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake")
		})

		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce")
		})

		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		})
		wow.init()


		// OwlCarousel N1





})

