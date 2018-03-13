console.log('hello');

var instance = new TypeIt('#typeIt', {
  strings: ['This is my string!']
  // other options
});

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);


portfolio.events = () => {
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