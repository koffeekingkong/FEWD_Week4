$( document ).ready(function() {


  $(".readmore").click(showtext);

  function showtext() {
    $("#show-this-on-click").slideDown();
    $(".readless").show();
    $(".readmore").hide();
  }

  $(".readless").click(hidetext);

  function hidetext() {
    $("#show-this-on-click").slideUp("slow", function(){
    $(".readless").hide();
    $(".readmore").show();
    });
  }

  $(".learnmore").click(showlearnmore);

  function showlearnmore() {
    $("#learnmoretext").slideDown("slow");
    $(".learnmore").hide();
  }


  $( ".button" ).click(function( event ) {
    event.preventDefault();
    alert( event.isDefaultPrevented() ); // true
  });

});
