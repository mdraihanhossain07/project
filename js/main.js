$(document).ready(function(){

    $('.header-area').sticky({
        topSpacing:0
    });

    $('.hero-area').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		dots: false,
		nav: true,
		margin: 20,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});

	$('.toggle').click(function(e) {
      	e.preventDefault();
      
        let $this = $(this);
      
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
    $('.play-btn').magnificPopup({
		type: 'video'
	})

});