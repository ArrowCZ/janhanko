function _(id){ return document.getElementById(id); }
var menu_content = $("#menu-content");

function openNav() {
	if (!window.matchMedia('(max-width: 375px)').matches) {
		$("#menu").css("width","236px");
	}
	else {
		$("#menu").css("width","100%");
	}
	setTimeout(function(){ 
		menu_content.fadeIn();
		$("#menu").focus();
	}, 200);

}

$( document ).ready(function() {
	//Animace soc ikon
	var bubble = $(".body-social");
	bubble.animate({
		left: '10px',
		

	  },"400");

	//SLIDESHOW
	if (window.matchMedia('(max-width: 1024px)').matches) {
		var count = 1;
		var images =[
			"images/1000px-1.jpg",
			"images/1000px-2.jpg",
			"images/1000px-3.jpg"
		];
		var image = $("#main-body");
	  
	  
		setInterval(function() {
		  image.fadeOut(500, function() {
			image.css("background","url("+images[count++]+")");
			image.css("background-size","cover");
			image.css("background-position", "center");
			image.fadeIn(500);
		  });
	  
		  if(count == images.length)
			count = 0;
	  
		},9000);
	  
			}	
	


});


function closeNav() {
	menu_content.fadeOut();
	setTimeout(function(){ $("#menu").css("width","0%"); }, 200);
    
}

$("#menu").on({

	focusout: function (e) {
		closeNav();
	  },

	keydown: function (e) {
		if (e.which === 27) {
		  closeNav();
		  Losefocus();
		  e.preventDefault();
		}
	  }

});


function Losefocus()
{
	$("#menu").blur();
}

var UdajeIsclosed = true;
function ShowFakturacni()
{
	var fakturacniUdaje = $(".fakturacni-inputs");
	if (UdajeIsclosed)
	{
		fakturacniUdaje.slideDown();
		UdajeIsclosed = false;
	}
	else {
		fakturacniUdaje.slideUp();
		UdajeIsclosed = true;
	}


}

