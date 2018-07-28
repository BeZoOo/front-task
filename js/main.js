$(document).ready(function() {
  $('.angles').click(function() {
    $('html, body').animate({
      scrollTop: $('.college-header').offset().top
    }, 1500);
  });
  $('.mobile-menu').click(function(){
        $('.nav').slideToggle(300);
    });
});
