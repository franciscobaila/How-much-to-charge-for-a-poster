/* Main app*/
var app = {
	budget:0,
	output2:0,
	output3:0,
	output4:0,
	output5:0,
	output6:0,
	output7:0,
	scrollPosition:0
}


app.init = function() {
	var self = this;
	app.events();
}


app.input = function() {
	var self = this;
	window.onwheel = function(){ return true; }
	$('#scroll-dot1').css({
		"background": "white"
	});
	$('body').css({
		"overflow-y": "auto"
	});
	$("#scroll-nav").fadeIn(300);
	self.budget = document.getElementById('input-1-txt');
	document.getElementById('output-1').innerHTML = 'O seu orçamento é';
	$("#img-0-contender").fadeIn(300);
	document.getElementById('output-1-1').innerHTML = self.budget.value;
	self.output2 = Math.round((self.budget.value - 75.27) * 100) / 100;
	document.getElementById('output-2').innerHTML = 'O seu orçamento é agora';
	document.getElementById('output-2-1').innerHTML = self.output2;
	$("#instructions").fadeIn(500);
	$("#img-0-1-contender").fadeIn(500);
	self.output3 = Math.round((self.output2 - 23.84) * 100) / 100;
	document.getElementById('output-3').innerHTML = self.output3;
	self.output4 = Math.round((self.output3 - 48.92) * 100) / 100;
	document.getElementById('output-4').innerHTML = self.output4;
	self.output5 = Math.round((self.output4 - 5.56) * 100) / 100;
	document.getElementById('output-5').innerHTML = self.output5;
	self.output6 = Math.round((self.output5 - 22.58) * 100) / 100;
	document.getElementById('output-6').innerHTML = self.output6;
	self.output7 = Math.round((self.output6 - 18.82) * 100) / 100;
	document.getElementById('output-7').innerHTML = self.output7;
	document.getElementById('output-9').innerHTML = 'Acabou o cartaz com um orçamento de ' + "<b>" + self.output7 + "</b>" + "<b>" + '€' + "</b>" + '.';
	if (self.output7 > 70){
		document.getElementById('output-8').innerHTML = 'Muito bem, provou que tem ideia de quanto' + "<br>" + 'um designer tem de pagar para viver e trabalhar.';
	} else if (self.output7 > 0 && self.output7 < 70){
		document.getElementById('output-8').innerHTML = 'Pelo menos não teve prejuízo com este trabalho.' + "<br>" + 'Deveria pensar melhor sobre quanto um designer' + "<br>" + 'tem de pagar para viver e trabalhar.';
	} else if (self.output7 < 0){
		document.getElementById('output-8').innerHTML = 'Teve prejuízo com este trabalho.' + "<br>" + 'Sim, um designer tem de pagar para viver e trabalhar.';
	}
}

app.events = function() {
	$("#en").click(function() {
		window.location.href = "index-en.html";
	});
	$("#print-button").click(function() {
		window.location.href = "poster.pdf";
	});
	$("#scroll-dot1").click(function() {
		$('html, body').animate({scrollTop : 0},1100);
		return false;
	});
	$("#img-0-1").click(function() {
		$('html, body').animate({scrollTop : 900},1100);
		return false;
	});
	$("#instructions").click(function() {
		$('html, body').animate({scrollTop : 900},1100);
		return false;
	});
	$("#scroll-dot2").click(function() {
		$('html, body').animate({scrollTop : 900},1100);
		return false;
	});
	$("#scroll-dot3").click(function() {
		$('html, body').animate({scrollTop : 1900},1100);
		return false;
	});
	$("#scroll-dot4").click(function() {
		$('html, body').animate({scrollTop : 2800},1100);
		return false;
	});
	$("#scroll-dot5").click(function() {
		$('html, body').animate({scrollTop : 3850},1100);
		return false;
	});
	$("#scroll-dot6").click(function() {
		$('html, body').animate({scrollTop : 4900},1100);
		return false;
	});
	$("#scroll-dot7").click(function() {
		$('html, body').animate({scrollTop : 5970},1100);
		return false;
	});
	$("#scroll-dot8").click(function() {
		$('html, body').animate({scrollTop : 7050},1100);
		return false;
	});
	$("#scroll-dot9").click(function() {
		$('html, body').animate({scrollTop : 8150},1100);
		return false;
	});
	$("#scroll-dot10").click(function() {
		$('html, body').animate({scrollTop : 9100},1100);
		return false;
	});
}

app.setScroll = function() {
	var self = this;
	$(document).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll <= 600){
			$("#lang").fadeIn(300);
			$("#img-0-1-contender").css({
				"margin-top": + (80-(scroll/7))
			})
			$("#instructions").css({
				"margin-top": + (-50-(scroll/13))
			})
			$('#scroll-dot1').css({
				"background": "white"
			})
			$('#scroll-dot2').css({
				"background": "transparent"
			})
			$('#scroll-dot3').css({
				"background": "transparent"
			})
			$('#scroll-dot4').css({
				"background": "transparent"
			})
			$('#scroll-dot5').css({
				"background": "transparent"
			})
			$('#scroll-dot6').css({
				"background": "transparent"
			})
			$('#scroll-dot7').css({
				"background": "transparent"
			})
			$('#scroll-dot8').css({
				"background": "transparent"
			})
			$('#scroll-dot9').css({
				"background": "transparent"
			})
			$('#scroll-dot10').css({
				"background": "transparent"
			})
		}
		if(scroll >= 600 && scroll <= 1600){
			$("#lang").fadeOut(300);
			$("#moment-2-txt").css({
				"margin-top": + (140-(scroll/30*5))
			})
			$('#scroll-dot1').css({
				"background": "transparent"
			})
			$('#scroll-dot2').css({
				"background": "white"
			})
			$('#scroll-dot3').css({
				"background": "transparent"
			})
			$('#scroll-dot4').css({
				"background": "transparent"
			})
			$('#scroll-dot5').css({
				"background": "transparent"
			})
			$('#scroll-dot6').css({
				"background": "transparent"
			})
			$('#scroll-dot7').css({
				"background": "transparent"
			})
			$('#scroll-dot8').css({
				"background": "transparent"
			})
			$('#scroll-dot9').css({
				"background": "transparent"
			})
			$('#scroll-dot10').css({
				"background": "transparent"
			})
		}
		if(scroll >= 1600 && scroll <= 2650){
			$("#moment-3-txt").css({
				"margin-top": + (-160+(scroll/40*4))
			})
			$('#scroll-dot1').css({
				"background": "transparent"
			})
			$('#scroll-dot2').css({
				"background": "transparent"
			})
			$('#scroll-dot3').css({
				"background": "white"
			})
			$('#scroll-dot4').css({
				"background": "transparent"
			})
			$('#scroll-dot5').css({
				"background": "transparent"
			})
			$('#scroll-dot6').css({
				"background": "transparent"
			})
			$('#scroll-dot7').css({
				"background": "transparent"
			})
			$('#scroll-dot8').css({
				"background": "transparent"
			})
			$('#scroll-dot9').css({
				"background": "transparent"
			})
			$('#scroll-dot10').css({
				"background": "transparent"
			})
			$('#img-2-contender').addClass("calendar-animation");
		}
		if(scroll >= 2650 && scroll <= 3500){
			$("#moment-4-txt").css({
				"margin-top": + (-305+(scroll/40*4))
			})
			$('#scroll-dot1').css({
				"background": "transparent"
			})
			$('#scroll-dot2').css({
				"background": "transparent"
			})
			$('#scroll-dot3').css({
				"background": "transparent"
			})
			$('#scroll-dot4').css({
				"background": "white"
			})
			$('#scroll-dot5').css({
				"background": "transparent"
			})
			$('#scroll-dot6').css({
				"background": "transparent"
			})
			$('#scroll-dot7').css({
				"background": "transparent"
			})
			$('#scroll-dot8').css({
				"background": "transparent"
			})
			$('#scroll-dot9').css({
				"background": "transparent"
			})
			$('#scroll-dot10').css({
				"background": "transparent"
			})
			$("#img-4-contender").fadeIn(300);
			$("#output-2-1").fadeIn(300);
			$("#img-3").fadeIn(500);
			$('#imgRepDois').css({
				"opacity": "0","pointer-events": "none"
			})
		}
		if(scroll >= 3500 && scroll <= 4600){
			$("#moment-5-txt").css({
				"margin-top": + (-380+(scroll/40*4))
			})
			$('#scroll-dot1').css({
				"background": "transparent"
			})
			$('#scroll-dot2').css({
				"background": "transparent"
			})
			$('#scroll-dot3').css({
				"background": "transparent"
			})
			$('#scroll-dot4').css({
				"background": "transparent"
			})
			$('#scroll-dot5').css({
				"background": "white"
			})
			$('#scroll-dot6').css({
				"background": "transparent"
			})
			$('#scroll-dot7').css({
				"background": "transparent"
			})
			$('#scroll-dot8').css({
				"background": "transparent"
			})
			$('#scroll-dot9').css({
				"background": "transparent"
			})
			$('#scroll-dot10').css({
				"background": "transparent"
			})
			$("#img-6-contender").fadeIn(300);
			$("#output-3").fadeIn(300);
			$('#img-5-contender').addClass("tools-animation");
			$('#img-7-contender').addClass("food-animation");
		}
		if(scroll >= 4600 && scroll <= 5600){
			$("#moment-6-txt").css({
				"margin-top": + (-500+(scroll/40*4))
			})
			$('#scroll-dot1').css({
				"background": "transparent"
			})
			$('#scroll-dot2').css({
				"background": "transparent"
			})
			$('#scroll-dot3').css({
				"background": "transparent"
			})
			$('#scroll-dot4').css({
				"background": "transparent"
			})
			$('#scroll-dot5').css({
				"background": "transparent"
			})
			$('#scroll-dot6').css({
				"background": "white"
			})
			$('#scroll-dot7').css({
				"background": "transparent"
			})
			$('#scroll-dot8').css({
				"background": "transparent"
			})
			$('#scroll-dot9').css({
				"background": "transparent"
			})
			$('#scroll-dot10').css({
				"background": "transparent"
			})
			$("#img-8-contender").fadeIn(300);
			$("#output-4").fadeIn(300);
			$('#img-9-contender').addClass("phone-animation");
			$('#img-13-contender').addClass("car-animation");
		}
		if(scroll >= 5600 && scroll <= 6600){
			$("#moment-7-txt").css({
				"margin-top": + (-590+(scroll/40*4))
			})
			$('#scroll-dot1').css({
				"background": "transparent"
			})
			$('#scroll-dot2').css({
				"background": "transparent"
			})
			$('#scroll-dot3').css({
				"background": "transparent"
			})
			$('#scroll-dot4').css({
				"background": "transparent"
			})
			$('#scroll-dot5').css({
				"background": "transparent"
			})
			$('#scroll-dot6').css({
				"background": "transparent"
			})
			$('#scroll-dot7').css({
				"background": "white"
			})
			$('#scroll-dot8').css({
				"background": "transparent"
			})
			$('#scroll-dot9').css({
				"background": "transparent"
			})
			$('#scroll-dot10').css({
				"background": "transparent"
			})
			$("#img-10-contender").fadeIn(300);
			$("#output-5").fadeIn(300);
			$('#img-12-contender').addClass("print-animation");
		}
		if(scroll >= 6600 && scroll <= 7600){
			$("#moment-8-txt").css({
				"margin-top": + (-700+(scroll/40*4))
			})
			$('#scroll-dot1').css({
				"background": "transparent"
			})
			$('#scroll-dot2').css({
				"background": "transparent"
			})
			$('#scroll-dot3').css({
				"background": "transparent"
			})
			$('#scroll-dot4').css({
				"background": "transparent"
			})
			$('#scroll-dot5').css({
				"background": "transparent"
			})
			$('#scroll-dot6').css({
				"background": "transparent"
			})
			$('#scroll-dot7').css({
				"background": "transparent"
			})
			$('#scroll-dot8').css({
				"background": "white"
			})
			$('#scroll-dot9').css({
				"background": "transparent"
			})
			$('#scroll-dot10').css({
				"background": "transparent"
			})
			$("#img-11-contender").fadeIn(300);
			$("#output-6").fadeIn(300);
		}
		if(scroll >= 7600 && scroll <= 8600){
			$("#moment-9-txt").css({
				"margin-top": + (-790+(scroll/40*4))
			})
			$('#scroll-dot1').css({
				"background": "transparent"
			})
			$('#scroll-dot2').css({
				"background": "transparent"
			})
			$('#scroll-dot3').css({
				"background": "transparent"
			})
			$('#scroll-dot4').css({
				"background": "transparent"
			})
			$('#scroll-dot5').css({
				"background": "transparent"
			})
			$('#scroll-dot6').css({
				"background": "transparent"
			})
			$('#scroll-dot7').css({
				"background": "transparent"
			})
			$('#scroll-dot8').css({
				"background": "transparent"
			})
			$('#scroll-dot9').css({
				"background": "white"
			})
			$('#scroll-dot10').css({
				"background": "transparent"
			})
			$("#img-14-contender").fadeIn(300);
			$("#output-7").fadeIn(300);
		}
		if(scroll >= 8600){
			$('#scroll-dot1').css({
				"background": "transparent"
			})
			$('#scroll-dot2').css({
				"background": "transparent"
			})
			$('#scroll-dot3').css({
				"background": "transparent"
			})
			$('#scroll-dot4').css({
				"background": "transparent"
			})
			$('#scroll-dot5').css({
				"background": "transparent"
			})
			$('#scroll-dot6').css({
				"background": "transparent"
			})
			$('#scroll-dot7').css({
				"background": "transparent"
			})
			$('#scroll-dot8').css({
				"background": "transparent"
			})
			$('#scroll-dot9').css({
				"background": "transparent"
			})
			$('#scroll-dot10').css({
				"background": "white"
			})
			$("#output-8").fadeIn(300);
			$("#output-9").fadeIn(300);
			$("#message").fadeIn(300);
			$("#print-button").fadeIn(300);
		}
	});
}


$(document).ready(function() {
	app.init();
	app.setScroll();
	window.scrollTo(0,0);
	var ar=new Array(32,33,34,35,36,37,38,39,40);
	$(document).keydown(function(e) {
		var key = e.which;
			if($.inArray(key,ar) > -1) {
				e.preventDefault();
				return false;
			}
			return true;
	});
	window.onwheel = function(){ return false; }
})
