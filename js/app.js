var myGame = new SimonGame();

$(document).ready(function() {
  myGame.startGame();

  $('button').click(function() {
    var justClickedColor = $(this).prop('id'); //returns the id of the just
                                               //clicked color (green, red...)
    var currentSequenceColor = myGame.sequence[myGame.userClickcount];

    if (currentSequenceColor === justClickedColor) {
      // the color clicked on is correct
      // code will run with the click action
      //until the next "if" block is true
      myGame.userClickcount += 1;

      if (myGame.userClickcount >= myGame.sequence.length) {
        // the user has gone through the lenght of the current
        // sequence, move on to the next round

        //THIS EXTRA PIECE OF CODE BELOW IS
        //TO ADD AN IMAGE TO THE BACKGROUND WHEN THE
        //SEQUENCE ENTERED IS CORRECT.

        // $('body').addClass('sequenced-entered');
        // setTimeout(function() {
        //   $('body').removeClass('sequenced-entered');
        // }, 2000);

        myGame.nextRound();
      }
    }
    else {
      alert('Game over.');
      myGame.gameOver();
      // this function resets the game, starts a new one
    }

  });












});
