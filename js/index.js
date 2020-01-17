$(document).ready(function () {
  if ($(window).width() > 768) {
    $('.my-paroller').paroller();
  }

  $('.navbar-nav>li>a').on('click', function () {
    setTimeout(function () {
      $('.navbar-collapse').collapse('hide');
    }, 100)
  });

  $('#new-parallex-slider').slick({
    dots: true
  });

  $('#new-parallex-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    event.preventDefault()
  });
  
  $('.slider').slick();

  $('.sliderSelectDropdown a').on('click', function (e) {
    e.preventDefault();
    var slider = $(this).data('slider-target');
    $('#sliderSelectDropdown').text($(this).text());
    $('[data-slider-category]').hide();
    $('[data-slider-category=' + slider + ']').slick('destroy');
    $('[data-slider-category=' + slider + ']').slick();
    $('[data-slider-category=' + slider + ']').show();
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
});

$(document).ready(function () {
  // Add smooth scrolling to all links
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