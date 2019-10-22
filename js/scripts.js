$(document).ready(function(){
  $("#hello").click(function(){
    $(".user").append("<li>Hello !!!!!!!</li>")
    $(".website").append("<li> Hello there</li>")
  });
  $("#goodbye").click(function(){
    $(".user").prepend("<li>CYA!!!</li>")
    $(".website").prepend("<li>Bye Human</li>")
  });
  $("#stop").click(function(){
    $(".user").prepend("<li>Stop copying me</li>")
    $(".website").prepend("<li>OK</li>")

  });
});
