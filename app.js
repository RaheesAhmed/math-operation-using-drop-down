$(document).ready(function () {
  $("select").change(function () {
    var num1 = parseInt($("#txt1").val());
    var num2 = parseInt($("#txt2").val());

    if (num1 == null || num2 == null) {
      $("#show").text("Insert both NO");
    } else if ($("select").val() == "+") {
      var sum = num1 + num2;

      $("#show").text(sum);
    } else if ($("select").val() == "-") {
      var min = num1 - num2;

      $("#show").text(min);
    } else if ($("select").val() == "/") {
      var div = num1 / num2;

      $("#show").text(div);
    } else if ($("select").val() == "x") {
      var mult = num1 * num2;

      $("#show").text(mult);
    } else {
      alert("Please select from Dropdown");
    }
  });
});
