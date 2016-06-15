function game() {
  $number = parseInt(Math.random() * 100) / 100;
  $ratio  = (1 / $number).toPrecision(3);
  document.getElementById("answer").innerHTML             = "";
  document.getElementById("answer").style.backgroundColor = 'inherit'; 
  document.getElementById("ratio").innerHTML              = $ratio;
  document.getElementById("fraction").value = "0.";
  document.getElementById("fraction").focus();
  document.getElementById("fraction").setSelectionRange(2, 2);
};

document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById("fraction")
    .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
        var input_text = document.getElementById("fraction").value;
        var input      = parseFloat(input_text);
        var diff       = Math.abs($number - input);
        var score      = ((1 - diff) * 100).toFixed(0) + "%";

        var g = Math.min(255, (1-diff)*512).toFixed(0);
        var r = Math.min(255, diff*512).toFixed(0);

        document.getElementById("answer").innerHTML = score;
        document.getElementById("answer").style.backgroundColor = 'rgba('+r+', '+g+', 0, 1)'; 
        setTimeout(function () {
          game();
        }, 1000);
      }
    });
  game();
});
