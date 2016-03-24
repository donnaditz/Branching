$(document).ready(function() {
  var animal = confirm("Which animal do you like? Click OK for Turtle or Rabbit for Cancel");

  if (animal) {
    $("#turtle").show();
  } else {
    $('#rabbit').show();
  };

  var heightOk = parseInt(prompt("How tall are you? In Inches?"));

  if (heightOk <= 60) {
    $("#ok-to-ride").show();
  } else {
    $("#too-tall").show();
  };

});
