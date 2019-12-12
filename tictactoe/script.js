var player1;
var player2;

$(document).ready(function () {
  resetgame();
  pausegame();

  //starting game on click
  $("#btn1").click(function () {
    console.log("submit and start");
    $(".win").text("");
    player1 = $("#name1").val();
    player2 = $("#name2").val();
    if (player1 == "") {
      player1 = "Player 1";
    }
    if (player2 == "") {
      player2 = "Player 2";
    }

    $("#status1").html("<h2>" + player1 + " with X</h2>");
    $("#status2").html("<h2> " + player2 + " with O</h2>");

    resetgame();
    playgame();
  });


});

//play game functiom
function playgame() {
  var move = 0;
  $('table tr td').click(function () {
    var box = $(this).text();

    move++;
    console.log("move number  " + move)
    if ((box != "X") && (box != "O")) {
      if (move % 2 == 1) {
        $(this).empty();
        $(this).append("X");
        box = $(this).text();
        $(this).css('color', '#38166e');
      } else {
        $(this).empty();
        $(this).append("O");
        box = $(this).text();
        $(this).css('color', '#38166e');
        console.log("move number  " + move)
      }
    } else {
      move--;
      console.log("move number inside else " + move);
    }

    getResult(move, box);

  });

  //restarting game on click
  $("#btn2").click(function () {
    resetgame();
    playgame();
    $(".win").text("");
  });
}

//pausing game after ones got won
function pausegame() {
  var str1 = $('table').html();
  $('table').html(str1);
}

//Reseting game / (Set, if its for the first time)
function resetgame() {
  console.log("calling set game");
  $('table').html(`"<tr>
  <td class="box" id="1">1</td>
  <td class="box" id="2">2</td>
  <td class="box" id="3">3</td>
</tr>

<tr>
  <td class="box" id="4">4</td>
  <td class="box" id="5">5</td>
  <td class="box" id="6">6</td>
</tr>

<tr>
  <td class="box" id="7">7</td>
  <td class="box" id="8">8</td>
  <td class="box" id="9">9</td>
</tr>"`);

}

// To check the matching pattern
function check() {
  if (($("#1").text() == $("#2").text()) && ($("#2").text() == $("#3").text())) {
    return 1;
  } else if (($("#1").text() == $("#4").text()) && ($("#4").text() == $("#7").text())) {
    return 1;

  } else if (($("#1").text() == $("#5").text()) && ($("#5").text() == $("#9").text())) {
    return 1;

  } else if (($("#2").text() == $("#5").text()) && ($("#5").text() == $("#8").text())) {
    return 1;
  } else if (($("#3").text() == $("#6").text()) && ($("#6").text() == $("#9").text())) {
    return 1;
  } else if (($("#3").text() == $("#5").text()) && ($("#5").text() == $("#7").text())) {
    return 1;
  } else if (($("#4").text() == $("#5").text()) && ($("#5").text() == $("#6").text())) {
    return 1;
  } else if (($("#7").text() == $("#8").text()) && ($("#8").text() == $("#9").text())) {
    return 1;
  } else
    return 0;
}

//get result
function getResult(move, box) {
  var flag = check();
  if (flag == 1) {
    var draw = 11;
    console.log(player2);
    var winner;
    console.log("You win");
    if (box == "X") {
      winner = player1;
    } else {
      winner = player2;
    }

    $(".win").html(`"<h1> +winner+" You won"  </h1> "`);
    $(".win").html("<h1>" + winner + " You Won!!!!</h1>");

    pausegame();

  }

  //check draw
  if ((draw != 11) && (move == 9)) {
    console.log("Game Over");
    $(".win").html("<h1> Game Draw !!!!</h1>");
  }

}