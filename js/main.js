		//Checando se o documento foi carregado
		$(document).ready(function(){
			//Ocultando o conteúdo
			$("#conteudo-js").hide();
			//Mostrando o conteúdo através do clique
			$("#abre-link").click(function(){
			//aplica a ação de abrir conteúdo
				$("#conteudo-js").slideToggle("slow");
			});
			//oculdando a div em que está as imagens
			$("#imagens-js").hide();
			//abrindo a função do click
			$("#meu-botao").click(function(){
				//executa a ação de mostrar e ocultar
				$("#imagens-js").slideToggle("slow");
			});

			$("div.img-teste").hide().before("<a href='#'>Mostra imagem</a>");
			$("a").click(function(){
				$("div.img-teste").slideToggle("slow");
			});
			
		});

		(function($){
		$('#abrir-ligthbox').click(function(e){
			e.preventDefault();
			var image = $(this).attr('href');
			$('html').addClass('no-scroll');
			$('body').append('<div class="ligthbox-aberto"><img src="' + image + '"></div>');
		});

		$('body').on('click', '.ligthbox-aberto', function(){
			$('html').removeClass('no-scroll');
			$('.ligthbox-aberto').remove();
		});
	});

$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".header").addClass("clearHeader");
    } else {
    	$(".header").removeClass("clearHeader");
    }
}); //missing 



$('.collapse').collapse();
$('#menuprincipal').on('hide.bs.collapse', function () {
	
  	toggle: false;
  	
})