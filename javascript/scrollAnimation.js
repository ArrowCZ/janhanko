
/* SCROLLING */

function HeaderFadeOut()
{
	$("#body-main-header").fadeOut();
}

function HeaderFadeIn(id)
{
	var headers = [
		"images/merch.svg",
		"images/uscstore.svg",
		"images/parkour-academy.svg",
		"images/jump-camp.svg"
	];
	$("#body-main-header img").attr("src",headers[id]);
	$("#body-main-header").fadeIn();
}



var scrollCount = 1;
var circle = _("circ1"); //Vsechny kruhy po sobe, ktere se budou prekryvat
var circle2 = _("circ2");
var circle3 = _("circ3");
//var count = _("count");


$(window).bind('wheel', function(e){ //Listener na scroll udalost. Nefunguje v Edge/IE
    if(e.originalEvent.wheelDelta > 0) // Scroll nahoru
    {     
		if (!window.matchMedia('(max-width: 1366px)').matches) {
			if (scrollCount > 0) // snizujeme pocitani scrollu.
			{
				scrollCount--;
			}
				if (parseInt(circle3.getAttribute('r'),0) > 0)
				{
					circle3.setAttribute('r',parseInt(circle3.getAttribute('r'),0) - 80);
				}	
				else if (parseInt(circle2.getAttribute('r'),0) > 0) // Je-li prumer kruhu vetsi nez 0, zmensime nejdrive tento kruh a pote az dalsi (takhle az do posledniho)
				{ 
					circle2.setAttribute('r',parseInt(circle2.getAttribute('r'),0) - 80);
				}
				else if (parseInt(circle.getAttribute('r'),0) > 0)
				{
					circle.setAttribute('r',parseInt(circle.getAttribute('r'),0) - 80);
				}		
	
	
				if (scrollCount == Math.round($(window).width() * (12 / 1920))) //Je-li scrollCount roven 20, ukaze se text. Ciselna konverze je nutna pro podporu mensich a vetsich zarizeni
				{
					HeaderFadeIn(0);
				}
				if (scrollCount == Math.round($(window).width() * (16 / 1920)))
				{
					HeaderFadeOut();
				}
				if (scrollCount == Math.round($(window).width() * (24 / 1920)))
				{
					HeaderFadeIn(1);
				}
				if (scrollCount == Math.round($(window).width() * (30 / 1920)))
				{
					HeaderFadeOut();
				}
				if (scrollCount == Math.round($(window).width() * (41 / 1920)))
				{
					HeaderFadeIn(2);
				}
				if (scrollCount == Math.round($(window).width() * (44 / 1920)))
				{
					HeaderFadeOut();
				}
		} 

		//count.innerHTML = "up" + scrollCount;
    }
    else // Scroll dolu
    { 
		if (!window.matchMedia('(max-width: 1366px)').matches) {
				if (scrollCount <= Math.round($(window).width() * (45 / 1920)))
				{
					scrollCount++;
				}
				if (scrollCount < Math.round($(window).width() * (16 / 1920)))
				{
					circle.setAttribute('r',parseInt(circle.getAttribute('r'),0) + 80); // Zvetsovani kruhu pomoci pripocteni hodnoty (40) k jeho predchozimu prumeru.
				}
				else if (scrollCount < Math.round($(window).width() * (32 / 1920)) )
				{
					circle2.setAttribute('r',parseInt(circle2.getAttribute('r'),0) + 80);
				}
				else if (scrollCount < Math.round($(window).width() * (100 / 1920)) && parseInt(circle3.getAttribute('r'),0) < Math.round($(window).width() * (1080 / 1920)) )
				{
					circle3.setAttribute('r',parseInt(circle3.getAttribute('r'),0) + 80);
				}
				
				if (scrollCount == Math.round($(window).width() * (12 / 1920)))
				{
					HeaderFadeOut();
				}
				if (scrollCount == Math.round($(window).width() * (16 / 1920)))
				{
					HeaderFadeIn(1);
				}
				if (scrollCount == Math.round($(window).width() * (24 / 1920)))
				{
					HeaderFadeOut();
				}
				if (scrollCount == Math.round($(window).width() * (30 / 1920)))
				{
					HeaderFadeIn(2);
				}
				if (scrollCount == Math.round($(window).width() * (41 / 1920)))
				{
					HeaderFadeOut();
				}
				if (scrollCount == Math.round($(window).width() * (46 / 1920)))
				{
					HeaderFadeIn(3);
				}
		}
		//count.innerHTML = "down" + scrollCount;
    }
    
});

 /* SCROLLING */