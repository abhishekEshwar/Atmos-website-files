var dd_is_show = true;
jQuery(function($) {
  $(document).ready(function() {
    $("#dd_menu_hamburger").click(function(){return runFunction();});
    $("#lines_main").click(function(){return runFunction();});
    
    $(".dd_menu_4").click(function () {
       $('html, body').animate({
           scrollTop: $('#footer_final').offset().top
       }, 'slow');
   });
   $(".dd_menu_2").click(function () {
      $('html, body').animate({
          scrollTop: $('#events_menu').offset().top
      }, 'slow');
  });

  $(".dd_menu_1").click(function () {
     $('html, body').animate({
         scrollTop: $('#home-logo').offset().top
     }, 'slow');
  });

    $(".dd_menu_3").click(function () {
       $('html, body').animate({
           scrollTop: $('.nebula-2').offset().top
       }, 'slow');
    });

  });
});


function runFunction(){
    if (dd_is_show){ //show div
        dd_is_show = false;
           $("#dropdownalerts").addClass('animated_dd bounceInDown');
           $("#lines_main").addClass('close');
      
    }
    else{ //hide div
        dd_is_show = true;
           $("#dropdownalerts").removeClass('animated_dd bounceInDown');
            $("#lines_main").removeClass('close');

    }
    return false;
}
