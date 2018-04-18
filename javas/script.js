
$(document).ready(function () {
    $(".cta").on("click", function (event) {

    	
    	var parent = $(this).closest(".fruit");
	    $(parent).find(".text").slideToggle("slow");
	    $(parent).toggleClass("active");
	    $('.fruit.active').not(parent).find('.text').slideUp();
		$('.fruit.active').not(parent).removeClass('active');


	});
});
