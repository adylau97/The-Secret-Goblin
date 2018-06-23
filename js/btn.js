//$(function() {
//(function() {
var navBtn= function() {
    var $navcur = $(".nav-current");
    var $nav = $("#nav");
    var current = ".current";   
    var itemW = $nav.find(current).innerWidth(); //Default current position width
    var defLeftW = $nav.find(current).position().left; //Default current position left value

    //Add default underline
    $navcur.css({
      width: itemW,
      left: defLeftW
    });

    //hover
    $nav.find("a").hover(function() {
      var index = $(this).index(); //Get Skip Element Index Values
      var leftW = $(this).position().left; //Get Slided Elements Left Value
      var currentW = $nav.find("a").eq(index).innerWidth(); //Gets the Swiding Element Width Value
      $navcur.stop().animate({
        left: leftW,
        width: currentW
      }, 300);

    }, function() {
      $navcur.stop().animate({
        left: defLeftW,
        width: itemW
      }, 300)
    })
   }
//})();
//
//});

window.addEventListener('load', navBtn);
