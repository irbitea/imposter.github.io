
$('document').ready(function () {
	$(window).scroll(function () {
		$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
	});
 
	 $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('0');
            $('.filter').filter('.'+value).show('0');
            
        }
    });
});


$('document').ready(function () {
	var btn = $('#button');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});
});
