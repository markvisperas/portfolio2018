(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var instance = new TypeIt('#typeIt', {
  strings: ['This is my string!']
  // other options
});

portfolio.events = function () {
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
};

//document ready
$(function () {
  portfolio.init();
  window.scrollTo(0, 0);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksV0FBVyxJQUFJLE1BQUosQ0FBVyxTQUFYLEVBQXNCO0FBQ25DLFdBQVMsQ0FBQyxvQkFBRDtBQUNUO0FBRm1DLENBQXRCLENBQWY7O0FBS0EsVUFBVSxNQUFWLEdBQW1CLFlBQU07QUFDdkIsSUFBRSxXQUFGLEVBQWUsS0FBZixDQUFxQixZQUFZO0FBQy9CLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixpQkFBVyxFQUFFLE9BQUYsRUFBVyxNQUFYLEdBQW9CO0FBRFQsS0FBeEIsRUFFRyxHQUZIO0FBR0QsR0FKRDtBQUtBLElBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBWTtBQUM1QixNQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDdEIsaUJBQVcsRUFBRSxZQUFGLEVBQWdCLE1BQWhCLEdBQXlCO0FBRGQsS0FBeEIsRUFFRyxHQUZIO0FBR0QsR0FKRDtBQUtBLElBQUUsZ0JBQUYsRUFBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNwQyxNQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDdEIsaUJBQVcsRUFBRSxZQUFGLEVBQWdCLE1BQWhCLEdBQXlCO0FBRGQsS0FBeEIsRUFFRyxHQUZIO0FBR0QsR0FKRDtBQUtBLElBQUUsWUFBRixFQUFnQixLQUFoQixDQUFzQixZQUFZO0FBQ2hDLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixpQkFBVyxFQUFFLFFBQUYsRUFBWSxNQUFaLEdBQXFCO0FBRFYsS0FBeEIsRUFFRyxHQUZIO0FBR0QsR0FKRDtBQUtBLElBQUUsYUFBRixFQUFpQixLQUFqQixDQUF1QixZQUFZO0FBQ2pDLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN4QixpQkFBVyxFQUFFLFNBQUYsRUFBYSxNQUFiLEdBQXNCO0FBRFQsS0FBeEIsRUFFQyxHQUZEO0FBR0QsR0FKRDtBQUtBLElBQUUsY0FBRixFQUFrQixLQUFsQixDQUF3QixZQUFZO0FBQ2xDLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixpQkFBVyxFQUFFLFVBQUYsRUFBYyxNQUFkLEdBQXVCO0FBRFosS0FBeEIsRUFFRyxHQUZIO0FBR0QsR0FKRDtBQU9ELENBakNEOztBQW1DQSxVQUFVLElBQVYsR0FBaUIsWUFBWTtBQUMzQixZQUFVLE1BQVY7QUFDRCxDQUZEOztBQUlBO0FBQ0EsRUFBRSxZQUFXO0FBQ1gsWUFBVSxJQUFWO0FBQ0EsU0FBTyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0QsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgaW5zdGFuY2UgPSBuZXcgVHlwZUl0KCcjdHlwZUl0Jywge1xuICBzdHJpbmdzOiBbJ1RoaXMgaXMgbXkgc3RyaW5nISddXG4gIC8vIG90aGVyIG9wdGlvbnNcbn0pO1xuXG5wb3J0Zm9saW8uZXZlbnRzID0gKCkgPT4ge1xuICAkKFwiLm5hbWVMaW5rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6ICQoXCIjaG9tZVwiKS5vZmZzZXQoKS50b3BcbiAgICB9LCA1MDApO1xuICB9KTtcbiAgJChcIi5hcnJvd1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAkKFwiI3BvcnRmb2xpb1wiKS5vZmZzZXQoKS50b3BcbiAgICB9LCA1MDApO1xuICB9KTtcbiAgJChcIi5wb3J0Zm9saW9MaW5rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6ICQoXCIjcG9ydGZvbGlvXCIpLm9mZnNldCgpLnRvcFxuICAgIH0sIDUwMCk7XG4gIH0pO1xuICAkKFwiLmFib3V0TGlua1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAkKFwiI2Fib3V0XCIpLm9mZnNldCgpLnRvcCBcbiAgICB9LCA1MDApO1xuICB9KTtcbiAgJChcIi5za2lsbHNMaW5rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgc2Nyb2xsVG9wOiAkKFwiI3NraWxsc1wiKS5vZmZzZXQoKS50b3BcbiAgfSwgNTAwKTtcbiAgfSk7XG4gICQoXCIuY29udGFjdExpbmtcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogJChcIiNjb250YWN0XCIpLm9mZnNldCgpLnRvcFxuICAgIH0sIDUwMCk7XG4gIH0pO1xuICBcblxufTtcblxucG9ydGZvbGlvLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHBvcnRmb2xpby5ldmVudHMoKTtcbn1cblxuLy9kb2N1bWVudCByZWFkeVxuJChmdW5jdGlvbigpIHtcbiAgcG9ydGZvbGlvLmluaXQoKTtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xufSk7Il19
