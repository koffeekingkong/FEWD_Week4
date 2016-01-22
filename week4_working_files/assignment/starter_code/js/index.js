$( document ).ready(function() {
});

$( ".button" ).click(function( event ) {
  event.preventDefault();
  alert( event.isDefaultPrevented() ); // true
});

$(".readmore").click(showtext);

function showtext() {
  $("#show-this-on-click").slideDown();
  $(".readless").slideDown();
  $(".readmore").hide();
}

$(".readless").click(hidetext);


function hidetext() {
    $("#show-this-on-click").slideUp("slow", function(){
  $(".readless").hide();
  $(".readmore").show();
  });
}

$("p").click(showtext);

function showtext() {
  $("#learnmoretext").slideDown();
  $(".learnmore").hide();
}
