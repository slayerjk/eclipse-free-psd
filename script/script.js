/*global $, jQuery*/
$(document).ready(function () {
  'use strict';
  
  $.fn.slideSwitchingFunc = function () {
    var $checkedInput = $('.guidlines__input:checked');
    var $nextCheckedInput = $checkedInput.next();
    var $currentSlide = $('.active-slide');
    var $nextSlide = $currentSlide.next();
    var $currentSwitch = $('.active-switch');
    var $nextSwitch = $currentSwitch.next();
    
    
    $checkedInput.removeAttr('checked');
    //$currentSlide.fadeOut(300).removeClass('.active_slide');
    if (($nextCheckedInput.prop('type')) === 'radio') {
      $nextCheckedInput.prop('checked', 'checked');
      //$currentSlide.fadeIn(300).addClass('.active_slide');
    } else {
      $nextCheckedInput = $('.guidlines__input').first().prop('checked', 'checked');
    }
  };
  
  setInterval($.fn.slideSwitchingFunc, 1000);

});



/*
var main = function() {
    var nextPageF = function () {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length == 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }           

        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    };

    var prefPageF = function () {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if(prevSlide.length == 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    };

    var interval = setInterval(nextPageF, 20000);
    $('.arrow-next').click(function(){
        clearInterval(interval );
        nextPageF();
    });
    $('.arrow-prev').click(function(){
        clearInterval(interval );
        prefPageF();
    });
};
*/