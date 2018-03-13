(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('hello');

var instance = new TypeIt('#typeIt', {
  strings: ['This is my string!']
  // other options
});

var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

portfolio.events = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFFBQVEsR0FBUixDQUFZLE9BQVo7O0FBRUEsSUFBSSxXQUFXLElBQUksTUFBSixDQUFXLFNBQVgsRUFBc0I7QUFDbkMsV0FBUyxDQUFDLG9CQUFEO0FBQ1Q7QUFGbUMsQ0FBdEIsQ0FBZjs7QUFLQSxJQUFNLFVBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFoQjtBQUNBLFFBQVEsR0FBUixDQUFZLE9BQVo7O0FBR0EsVUFBVSxNQUFWLEdBQW1CLFlBQU07QUFDdkIsSUFBRSxnQkFBRixFQUFvQixLQUFwQixDQUEwQixZQUFZO0FBQ3BDLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixpQkFBVyxFQUFFLFlBQUYsRUFBZ0IsTUFBaEIsR0FBeUI7QUFEZCxLQUF4QixFQUVHLEdBRkg7QUFHRCxHQUpEO0FBS0EsSUFBRSxZQUFGLEVBQWdCLEtBQWhCLENBQXNCLFlBQVk7QUFDaEMsTUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3RCLGlCQUFXLEVBQUUsUUFBRixFQUFZLE1BQVosR0FBcUI7QUFEVixLQUF4QixFQUVHLEdBRkg7QUFHRCxHQUpEO0FBS0EsSUFBRSxhQUFGLEVBQWlCLEtBQWpCLENBQXVCLFlBQVk7QUFDakMsTUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3hCLGlCQUFXLEVBQUUsU0FBRixFQUFhLE1BQWIsR0FBc0I7QUFEVCxLQUF4QixFQUVDLEdBRkQ7QUFHRCxHQUpEO0FBS0EsSUFBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFlBQVk7QUFDbEMsTUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3RCLGlCQUFXLEVBQUUsVUFBRixFQUFjLE1BQWQsR0FBdUI7QUFEWixLQUF4QixFQUVHLEdBRkg7QUFHRCxHQUpEO0FBT0QsQ0F2QkQ7O0FBeUJBLFVBQVUsSUFBVixHQUFpQixZQUFZO0FBQzNCLFlBQVUsTUFBVjtBQUNELENBRkQ7O0FBSUE7QUFDQSxFQUFFLFlBQVc7QUFDWCxZQUFVLElBQVY7QUFDQSxTQUFPLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDRCxDQUhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnNvbGUubG9nKCdoZWxsbycpO1xuXG52YXIgaW5zdGFuY2UgPSBuZXcgVHlwZUl0KCcjdHlwZUl0Jywge1xuICBzdHJpbmdzOiBbJ1RoaXMgaXMgbXkgc3RyaW5nISddXG4gIC8vIG90aGVyIG9wdGlvbnNcbn0pO1xuXG5jb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDVdO1xuY29uc29sZS5sb2cobnVtYmVycyk7XG5cblxucG9ydGZvbGlvLmV2ZW50cyA9ICgpID0+IHtcbiAgJChcIi5wb3J0Zm9saW9MaW5rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6ICQoXCIjcG9ydGZvbGlvXCIpLm9mZnNldCgpLnRvcFxuICAgIH0sIDUwMCk7XG4gIH0pO1xuICAkKFwiLmFib3V0TGlua1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAkKFwiI2Fib3V0XCIpLm9mZnNldCgpLnRvcCBcbiAgICB9LCA1MDApO1xuICB9KTtcbiAgJChcIi5za2lsbHNMaW5rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgc2Nyb2xsVG9wOiAkKFwiI3NraWxsc1wiKS5vZmZzZXQoKS50b3BcbiAgfSwgNTAwKTtcbiAgfSk7XG4gICQoXCIuY29udGFjdExpbmtcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogJChcIiNjb250YWN0XCIpLm9mZnNldCgpLnRvcFxuICAgIH0sIDUwMCk7XG4gIH0pO1xuICBcblxufTtcblxucG9ydGZvbGlvLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHBvcnRmb2xpby5ldmVudHMoKTtcbn1cblxuLy9kb2N1bWVudCByZWFkeVxuJChmdW5jdGlvbigpIHtcbiAgcG9ydGZvbGlvLmluaXQoKTtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xufSk7Il19
