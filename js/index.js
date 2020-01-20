$(document).ready(function () {
  if ($(window).width() > 768) {
    $('.my-paroller').paroller();
  }

  $('.navbar-nav>li>a').on('click', function () {
    setTimeout(function () {
      $('.navbar-collapse').collapse('hide');
    }, 100)
  });
  
  function animCircle(el1,el2,el3, play){

  var t1 = gsap.timeline();
  var t2 = gsap.timeline();
  var t3 = gsap.timeline();


    
    t1.to(el1, {duration: 1.6, y:180, opacity:1})
    .to(el1, 10, {rotation:"360", ease:Linear.easeNone, repeat:-1});

    t2.to(el2, {duration: 1.6, y:-158, opacity:1})
    .to(el2, 10, {rotation:"360", ease:Linear.easeNone, repeat:-1});

    t3.to(el3, {duration: 1.6, y:-168, opacity:1})
    .to(el3, 10, {rotation:"360", ease:Linear.easeNone, repeat:-1});
    t1.paused(true) 
    t2.paused(true) 
    t3.paused(true)
    if(play=="play"){
      t1.play() 
      t2.play() 
      t3.play()
    }else if(play=="reverse"){
      alert("hi")
      t1.reverse() 
      t2.reverse() 
      t3.reverse()
    }
  }



  $('#new-parallex-slider').on('init', function (event, slick, direction) {
    var c1 = $('.slick-active .slide .circle-1');
    var c2 = $('.slick-active .slide .circle-2');
    var c3 = $('.slick-active .slide .circle-3');
    animCircle(c1,c2,c3,"play");

  });

  $('#new-parallex-slider').on('beforeChange', function (event, slick, direction) {
    var c1 = $('.slick-active .slide .circle-1');
    var c2 = $('.slick-active .slide .circle-2');
    var c3 = $('.slick-active .slide .circle-3');
    animCircle(c1,c2,c3,"reverse");

  });
  $('#new-parallex-slider').on('afterChange', function (event, slick, direction) {
    var c1 = $('.slick-active .slide .circle-1');
    var c2 = $('.slick-active .slide .circle-2');
    var c3 = $('.slick-active .slide .circle-3');
    animCircle(c1,c2,c3,"play");

  });

  $('#new-parallex-slider').slick({
    dots: true,
    infinite:false
  });

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