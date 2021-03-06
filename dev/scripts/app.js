var instance = new TypeIt('#typeIt', {
  strings: [''],
  speed: 50,
});

portfolio.events = () => {
  $(".nameLink").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 500);
  });
  $(".arrow").click(function () {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 500);
  });
  $(".portfolioLink").click(function () {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 500);
  });
  $(".aboutLink").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top 
    }, 500);
  });
  $(".skillsLink").click(function () {
    $('html, body').animate({
    scrollTop: $("#skills").offset().top
  }, 500);
  });
  $(".contactLink").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 500);
  });
  

};

portfolio.init = function () {
  portfolio.events();
}

//document ready
$(function() {
  portfolio.init();
  window.scrollTo(0, 0);
});