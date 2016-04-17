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
