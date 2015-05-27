var palindrome = function(input) {
  if(typeof input == "number") {
    input = input.toString();
  }
  return input === input.split('').reverse().join('');
}

$(document).ready(function() {


  $("#palindrome").submit(function(event) {

    var input = ($("input#input-string").val());
    var result = palindrome(input);
    $(".output").text(result);
    $("#result").show();
    event.preventDefault();

  });


});
