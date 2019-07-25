
		$( document ).ready(function() {
			//Cerne menu po scrollu	
			//var navMenu = $('.nav-link a');
			var navBar = $('.navbar');
			var logoTop = $('.logo-top svg');
			var windowHeight = $(window).height();
			$(window).scroll(function () {
				if ($(this).scrollTop() > (windowHeight - (windowHeight / 1.5))) {
					navBar.css("background", "rgba(0,0,0,0.6)");
					logoTop.css("marginTop", "15px");
				} else {
					navBar.css("background", "transparent");
					logoTop.css("marginTop", "35px");
				}
			});
		});