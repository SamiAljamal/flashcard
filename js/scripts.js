$(document).ready(function(){
  $("body").addClass("gray-background");
  $(".flashcard").click(function(){
    $(this).children().toggle();
  });

});
