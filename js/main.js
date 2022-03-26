$(function () {
	$(window).scroll(function() {
	    $('.al').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.ar').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInRight");
	        }
	    });
	});
    $(window).scroll(function() {
        $('.ad').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__backInDown");
            }
        });
    });
    $(window).scroll(function() {
        $('.aup').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__backInUp");
            }
        });
    });
})