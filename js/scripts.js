$(document).ready(function() {
  var animal = confirm("Which animal do you like? Click OK for Turtle or Rabbit for Cancel");

  if (animal) {
    $("#turtle").show();
  } else {
    $('#rabbit').show();
  };
});
