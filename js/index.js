$(document).ready(function () {
  if ($(window).width() > 768) {
    $('.my-paroller').paroller();
  }

  $('.navbar-nav>li>a').on('click', function () {
    setTimeout(function () {
      $('.navbar-collapse').collapse('hide');
    }, 100)
  });
  
  function animCircle(nextSlide){

     var el1 = $('.slick-active  .circle-1');
    var el2 = $('.slick-active  .circle-2');
     var el3 = $('.slick-active .circle-3');
    var el4 = $('.slick-active .layer-1');
    var el5 = $('.slick-active  .layer-3');
    var el6 = $('.slick-active  .layer-4');
    var t1 = gsap.timeline();
     var t2 = gsap.timeline();
     var t3 = gsap.timeline();
    var t4 = gsap.timeline();
    var t5 = gsap.timeline();
    var t6 = gsap.timeline();
    t1.to(el1, {duration: 0.8, y:100, opacity:1, delay:-0.2})
    .to(el1, 10, {rotation:"360", ease:Linear.easeNone, repeat:-1});

    t2.to(el2, {duration: 1, x:100, opacity:1})
     .to(el2, 10, {rotation:"360", ease:Linear.easeNone, repeat:-1});

     t3.to(el3, {duration: 1.2, y:-100, opacity:1})
     .to(el3, 10, {rotation:"360", ease:Linear.easeNone, repeat:-1});

    t4.to(el4, {duration: 0, y:80, opacity:1});
    t5.to(el5, {duration: 0.6, x:-50, opacity:0.1, delay:0.6});
    t6.to(el6, {duration: 3, opacity:1, onComplete: function(){
      //this.reverse(0.2)
    }});


     t1.paused(true) 
     t2.paused(true) 
     t3.paused(true)
    t4.paused(true)
    t5.paused(true)
    t6.paused(true)
       t1.play() 
       t2.play() 
       t3.play()
    t4.play()
    t5.play()
    t6.play()
    
  }



  $('#new-parallex-slider').on('init', function (event, slick, direction) {
    
    animCircle();

  });

  $('#new-parallex-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {

    if( 2 === currentSlide) {
      //this should do the same thing -> slider.slickPause();
      $('#new-parallex-slider').slick('slickPause')
    }else{
      $('#new-parallex-slider').slick('slickPlay')
    };

    animCircle(nextSlide);

  });
  
  $('#new-parallex-slider').slick({
    dots: true,
    infinite:false,
    speed: 1000,
    waitForAnimate: false,
    autoplay:true,
    autoplaySpeed: 4000,
    pauseOnHover:false,
    pauseOnFocus:false
  });
  /*$('#new-parallex-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(event)
    $(this).slick('slickPause');
    return false;
        animCircle(nextSlide);
        
      });
  
      */
  $('.slider').slick();

  $('.tab-links a').on('click', function (e) {
    e.preventDefault();
    var tabContent = $(this).attr('href');
    $(".tab-links a").removeClass('gradient-bg');
    $(this).addClass('gradient-bg');
    $('.tab-content').removeClass('active');
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
});