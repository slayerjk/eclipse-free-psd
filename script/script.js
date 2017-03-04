/*global $, jQuery*/
$(document).ready(function () {
  'use strict';
  
  $.fn.slideSwitchingFunc = function () {
    var
      $checkedInput = $('.guidlines__input:checked'),
      $nextCheckedInput = $checkedInput.next(),
      $currentSlide = $('.active-slide'),
      $nextSlide = $currentSlide.next(),
      $currentSwitch = $('.active-switch'),
      $nextSwitch = $currentSwitch.next();
    
    
    $checkedInput.removeAttr('checked');
    //$currentSlide.fadeOut(300).removeClass('.active_slide');
    if (($nextCheckedInput.prop('type')) === 'radio') {
      $nextCheckedInput.prop('checked', 'checked');
      //$currentSlide.fadeIn(300).addClass('.active_slide');
    } else {
      $nextCheckedInput = $('.guidlines__input').first().prop('checked', 'checked');
    }
  };
  
  setInterval($.fn.slideSwitchingFunc, 3000);

});