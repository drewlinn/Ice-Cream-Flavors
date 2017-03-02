$(document).ready(function() {
  var flavors = ["vanilla", "chocolate", "strawberry", "rocky road"];

  flavors.forEach(function(flavor){
    $("ul").append("<li>" + flavor + "</li>");
  });
});
