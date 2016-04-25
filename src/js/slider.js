$(document).ready(function() {
	$('#slide-1').show();
	$('#nav-1').addClass('active-cd');
	
	function siguienteSlide() {
		var actual = $('.slides li:visible');
		var siguiente = actual.next();
		var circuloActual = $('.active-cd');
		var siguienteCirculo = circuloActual.next();

		if (siguiente.length == 0) {
			siguiente = $('#slide-1');
		}

		if (siguienteCirculo.length == 0) {
			siguienteCirculo = $('#nav-1');
		}

		actual.fadeOut(1000);
		circuloActual.removeClass('active-cd');
		siguiente.fadeIn(1000);
		siguienteCirculo.addClass('active-cd');
	};
	
	$('.next').click(siguienteSlide);

	$('.prev').click(function() {
		var actual = $('.slides li:visible');
		var anterior = actual.prev();
		var circuloActual = $('.active-cd');
		var anteriorCirculo = circuloActual.prev();

		if (anterior.length == 0) {
			anterior = $('#slide-7');
		}

		if (anteriorCirculo.length == 0) {
			anteriorCirculo = $('#nav-7');
		}

		actual.hide();
		circuloActual.removeClass('active-cd');
		anterior.show();
		anteriorCirculo.addClass('active-cd');
	});

	$('.nav li').click(function() {
		$('.active-cd').removeClass('active-cd');
		$('.slides li:visible').hide();
		$(this).addClass('active-cd');
		var indice = $(this).data('cd');
		$('.slides li[data-n='+indice+']').show();
	});

	var intervalo = setInterval(siguienteSlide, 3000);

	$('.slideshow').mouseenter(function() {
		clearInterval(intervalo);
  	});

  	$('.slideshow').mouseleave(function() {
  		intervalo = setInterval(siguienteSlide, 3000);
  	});

});


///////////////////////////////////////////////////////////


$(document).ready(function() {
	$('#slide-1-2').show();
	$('#nav-1-2').addClass('active-cd-2');
	
	function siguienteSlide() {
		var actual = $('.slides-2 li:visible');
		var siguiente = actual.next();
		var circuloActual = $('.active-cd-2');
		var siguienteCirculo = circuloActual.next();

		if (siguiente.length == 0) {
			siguiente = $('#slide-1-2');
		}

		if (siguienteCirculo.length == 0) {
			siguienteCirculo = $('#nav-1-2');
		}

		actual.fadeOut(1000);
		circuloActual.removeClass('active-cd-2');
		siguiente.fadeIn(1000);
		siguienteCirculo.addClass('active-cd-2');
	};
	
	$('.next-2').click(siguienteSlide);

	$('.prev-2').click(function() {
		var actual = $('.slides-2 li:visible');
		var anterior = actual.prev();
		var circuloActual = $('.active-cd-2');
		var anteriorCirculo = circuloActual.prev();

		if (anterior.length == 0) {
			anterior = $('#slide-8-2');
		}

		if (anteriorCirculo.length == 0) {
			anteriorCirculo = $('#nav-8-2');
		}

		actual.hide();
		circuloActual.removeClass('active-cd-2');
		anterior.show();
		anteriorCirculo.addClass('active-cd-2');
	});

	$('.nav-2 li').click(function() {
		$('.active-cd-2').removeClass('active-cd-2');
		$('.slides-2 li:visible').hide();
		$(this).addClass('active-cd-2');
		var indice = $(this).data('cd-2');
		$('.slides-2 li[data-n='+indice+']').show();
	});

	var intervalo = setInterval(siguienteSlide, 3000);

	$('.slideshow-2').mouseenter(function() {
		clearInterval(intervalo);
  	});

  	$('.slideshow-2').mouseleave(function() {
  		intervalo = setInterval(siguienteSlide, 3000);
  	});

});


///////////////////////////////////////////////////////////


$(document).ready(function() {
	$('#slide-1-3').show();
	$('#nav-1-3').addClass('active-cd-3');
	
	function siguienteSlide() {
		var actual = $('.slides-3 li:visible');
		var siguiente = actual.next();
		var circuloActual = $('.active-cd-3');
		var siguienteCirculo = circuloActual.next();

		if (siguiente.length == 0) {
			siguiente = $('#slide-1-3');
		}

		if (siguienteCirculo.length == 0) {
			siguienteCirculo = $('#nav-1-3');
		}

		actual.fadeOut(1000);
		circuloActual.removeClass('active-cd-3');
		siguiente.fadeIn(1000);
		siguienteCirculo.addClass('active-cd-3');
	};
	
	$('.next-3').click(siguienteSlide);

	$('.prev-3').click(function() {
		var actual = $('.slides-3 li:visible');
		var anterior = actual.prev();
		var circuloActual = $('.active-cd-3');
		var anteriorCirculo = circuloActual.prev();

		if (anterior.length == 0) {
			anterior = $('#slide-4-3');
		}

		if (anteriorCirculo.length == 0) {
			anteriorCirculo = $('#nav-4-3');
		}

		actual.hide();
		circuloActual.removeClass('active-cd-3');
		anterior.show();
		anteriorCirculo.addClass('active-cd-3');
	});

	$('.nav-3 li').click(function() {
		$('.active-cd-3').removeClass('active-cd-3');
		$('.slides-3 li:visible').hide();
		$(this).addClass('active-cd-3');
		var indice = $(this).data('cd-3');
		$('.slides-3 li[data-n='+indice+']').show();
	});

	var intervalo = setInterval(siguienteSlide, 3000);

	$('.slideshow-3').mouseenter(function() {
		clearInterval(intervalo);
  	});

  	$('.slideshow-3').mouseleave(function() {
  		intervalo = setInterval(siguienteSlide, 3000);
  	});

});


///////////////////////////////////////////////////////////


$(document).ready(function() {
	$('#slide-1-4').show();
	$('#nav-1-4').addClass('active-cd-4');
	
	function siguienteSlide() {
		var actual = $('.slides-4 li:visible');
		var siguiente = actual.next();
		var circuloActual = $('.active-cd-4');
		var siguienteCirculo = circuloActual.next();

		if (siguiente.length == 0) {
			siguiente = $('#slide-1-4');
		}

		if (siguienteCirculo.length == 0) {
			siguienteCirculo = $('#nav-1-4');
		}

		actual.fadeOut(1000);
		circuloActual.removeClass('active-cd-4');
		siguiente.fadeIn(1000);
		siguienteCirculo.addClass('active-cd-4');
	};
	
	$('.next-4').click(siguienteSlide);

	$('.prev-4').click(function() {
		var actual = $('.slides-4 li:visible');
		var anterior = actual.prev();
		var circuloActual = $('.active-cd-4');
		var anteriorCirculo = circuloActual.prev();

		if (anterior.length == 0) {
			anterior = $('#slide-9-4');
		}

		if (anteriorCirculo.length == 0) {
			anteriorCirculo = $('#nav-9-4');
		}

		actual.hide();
		circuloActual.removeClass('active-cd-4');
		anterior.show();
		anteriorCirculo.addClass('active-cd-4');
	});

	$('.nav-4 li').click(function() {
		$('.active-cd-4').removeClass('active-cd-4');
		$('.slides-4 li:visible').hide();
		$(this).addClass('active-cd-4');
		var indice = $(this).data('cd-4');
		$('.slides-4 li[data-n='+indice+']').show();
	});

	var intervalo = setInterval(siguienteSlide, 3000);

	$('.slideshow-4').mouseenter(function() {
		clearInterval(intervalo);
  	});

  	$('.slideshow-4').mouseleave(function() {
  		intervalo = setInterval(siguienteSlide, 3000);
  	});

});
