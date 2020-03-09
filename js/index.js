$(document).ready(function () {
  if ($(window).width() > 768) {
    $('.my-paroller').paroller();
  }

  $('.navbar-nav>li>a').on('click', function () {
    setTimeout(function () {
      $('.navbar-collapse').collapse('hide');
    }, 100)
  });
  
  
  $('.slider').slick();

  $('.tab-links a').on('click', function (e) {
    e.preventDefault();
    var tabContent = $(this).attr('href');
    $(".tab-links a").removeClass('gradient-bg');
    $(this).addClass('gradient-bg');
    $('.tab-content').removeClass('active');
    $('.tab-content').fadeOut();
    $(tabContent).fadeIn();
    $(tabContent).addClass('active')
    
  });

  

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('nav');
  var main_nav_height = $('header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function () {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
    });
  });

  // Add smooth scrolling to all links

  $(".list li span").mousemove(function(event){
   
   
    $(".dot-hover")
    .delay(200)
    .css({"transform": "translate("+($(this)[0].offsetLeft + $(this).width() + 10) + "px,"+ ($(this)[0].offsetTop-10)+"px)"});
  });
  
  $(".list li span").hover(function(event){
   
    $(".dot-hover").addClass("circular-bg")
    .delay(200)
    .css({"transform": "translate("+($(this)[0].offsetLeft + $(this).width() + 10) + "px,"+ ($(this)[0].offsetTop-10)+"px)"});
  });
  $(".list").mouseleave(function(event){
    setTimeout(function(){
      $(".dot-hover").removeClass("circular-bg")
    },100)
    
   });
  
  $("nav a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  var anim = 	{ ".circle-1"	: 
						{
							show   	  : "slideInRight",
              hide 	    : "fadeOutLeft",
              delayShow : "delay0-35s"
             },
             ".circle-2"	: 
						{
							show   	  : "slideInRight",
							hide 	    : "fadeOutLeft",
							delayShow : "delay0-25s"
             },
             ".circle-3"	: 
						{
							show   	  : "slideInRight",
							hide 	    : "fadeOutLeft",
							delayShow : "delay-5s"
             },
             ".overlay-text"	: 
						{
							show   	  : "fadeInRight",
							hide 	    : "fadeOutLeft",
							delayShow : "delay1s"
             },
             ".blurred-circle-top-right"	: 
						{
							show   	  : "fadeInRight",
              hide 	    : "fadeOutLeft",
              delayShow : "delay0-5s"
             },
             ".blurred-circle-bottom-right"	: 
						{
							show   	  : "fadeInRight",
              hide 	    : "fadeOutLeft",
              delayShow : "delay0-5s"
             },
             ".blurred-circle-left-bottom"	: 
						{
							show   	  : "fadeInRight",
              hide 	    : "fadeOutLeft",
              delayShow : "delay0-5s"
             },
             ".slider-title"	: 
						{
							show   	  : "slideInRight",
              hide 	    : "fadeOutLeft",
              delayShow : "delay0-25s"
             },
             ".slider-subtitle"	: 
						{
							show   	  : "slideInRight",
              hide 	    : "fadeOutLeft",
              delayShow : "delay0-25s"
             } 
            }
		 $(".anim-slider").animateSlider(
		 	{
		 		animations 	: 
				{
          0	:anim,
          1 : anim,
          2 : anim
				}
       });
       var interval;
        var timer = function(){
        interval = setInterval(function(){
          if($(".anim-dots-this").is(':last-child'))
          {
            $( ".anim-dots span:first-child" ).trigger( "click" );
            
          }else{
            $( ".anim-dots-this + span" ).trigger( "click" );
          }
          
         },5000);
        };

        timer();

        $('.anim-dots span').click(function(){
            //go back to previous slide and reset time
          clearInterval(interval);
          timer()
        });


});
