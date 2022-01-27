jQuery(document).ready(function($) 
{
	// var dataUrl;
	// $("button").click(function(){
	// 	dataUrl = $(this).attr('data-url');
	// 	callReader(dataUrl);
	// });

	$(".go-back-up").click(function(){
		//SCROLL TO AN ELEMENT FUNCTION
	    $('.reader').animate({
	       scrollTop:$('.article-header').offset().top
	    }, 1000);
	});




	var body = $('body'),
		reader = $('section.reader'),
		wrapper = $('div#wrapper'),
		loader = $('.loader'),
		tlCallReader = new TimelineMax();

	function callReader(){

		if($(window).width() > 500)
		{
			injectArticle(dataUrl);
			tlCallReader
				.set(reader, {className: '+=is-open'})
				.set(body, {className: '+=is-animating'})
				.to(loader, 0.5, {autoAlpha: 1, ease:Power4.easeInOut})
				.to(loader, 1.5, {width: '100%', ease:Power4.easeInOut, clearProps: 'all'}, '-=0.5')
				.to(reader, 0.5, {x: '0', ease:Power4.easeInOut})
				.to(wrapper, 0.5, {x: '-100%', ease:Power4.easeInOut}, '-=0.5')
				.set(body, {className: '-=is-animating'});
		}
		else
		{
			injectArticle();
			tlCallReader
				.set(reader, {className: '+=is-open'})
				.set(body, {className: '+=is-animating'})
				.to(loader, 0.5, {autoAlpha: 1, ease:Power4.easeInOut})
				.to(loader, 1.5, {width: '100%', ease:Power4.easeInOut, clearProps: 'all'}, '-=0.5')
				.to(reader, 0.5, {x: '0', ease:Power4.easeInOut})
				.set(body, {className: '-=is-animating'});
		}
	}





	var goBackUp = $('.go-back-up');

	function injectArticle(){
		reader.load('load/' + dataUrl);

		setTimeout(function() 
		{
			

			var ArticleSection = $('.reader section'), 
			tlinjectArticle = new TimelineMax();
			tlinjectArticle
				.set(ArticleSection, {y: '10px'}, '+=1.5')
				.staggerTo(ArticleSection, 0.5, {autoAlpha: 1, y: '0px', ease:Power4.easeInOut}, 0.1)
				.to(goBackUp, 0.5, {autoAlpha: 1, ease:Power4.easeInOut});
			$(reader).prepend('<svg class="close-article" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="81px" height="81px" viewBox="0 0 81 81" enable-background="new 0 0 81 81" xml:space="preserve"><rect class="bg" fill="#D4D926" width="81" height="81"/><rect x="14.551" y="39.344" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.7757 40.5)" fill="#FFFFFF" width="51.898" height="2.312"/><rect x="14.551" y="39.344" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 40.5 97.7757)" fill="#FFFFFF" width="51.898" height="2.312"/></svg>');

			$("svg.close-article").click(function(){
				revokeReader();
			});
		}, 500);

		

	}


	tlrevokeReader = new TimelineMax();
	function revokeReader(){
		tlrevokeReader
			.set(reader, {className: '-=is-open'})
			.set(body, {className: '+=is-animating'})
			.set(goBackUp, {autoAlpha: 0})
			.to(reader, 0.5, {x: '100%', ease:Power4.easeInOut, clearProps: 'all'})
			.to(wrapper, 0.5, {x: '0%', ease:Power4.easeInOut, clearProps:"transform"}, '-=0.5')
			.set(body, {className: '-=is-animating'});
	}






	




	




	// THIS IS EXECUTED WHEN EVERYTHING IS LOADED
	// var everythingLoaded = setInterval(function() {
	//   if (/loaded|complete/.test(document.readyState)) {
	//     clearInterval(everythingLoaded);
	//   }
	// }, 10);

	// USE THIS IF SOMETHING CANT LOAD CORRECTLY
	// $(window).load(function(){
	// });

	// THIS IS DONE AT EVERY SCROLL
	// $(window).scroll(function (event) {
 //    });

    // SCROLL TO AN ELEMENT FUNCTION
    //$('html, body').animate({
    //    scrollTop:$('.element').offset().top
    //}, 1000);

    // SCROLL TO A CALCULATED HEIGHT
	//$('html, body').animate({
    //      scrollTop:$(scrollHeight).offset().top
    //}, 1000);

    // SIMPLE CLICK
 //    $(".menu").click(function(){
	// });
	
    // SET A DELAY IN A FUNCTION
	// setTimeout(function() 
	// {
	// }, 250);

	// KEEP A DIV SQUARE HACK
	// var largeur = $('.un-quart').width();
	// $('.un-quart').height(largeur);

 //   	$(window).resize(function(){
 //   		var largeur = $('.un-quart').width();
 //   		$('.un-quart').height(largeur);
 //    });

   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }

});
