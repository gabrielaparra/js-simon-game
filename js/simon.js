function SimonGame () {
    this.colors = [ 'red', 'green', 'blue', 'yellow' ];
    this.sequence = [];
    this.userClickcount = 0;
    //Player's score:
    this.round = 1;
}

SimonGame.prototype.startGame = function () {
  this.addColor();
  this.showSequence();
};

// ADD A NEW COLOR TO THE SEQUENCE
SimonGame.prototype.addColor = function () {
  var randomIndex = Math.round(Math.random() * 3);
  this.sequence.push(this.colors[randomIndex]);
};

// SHOW THE SEQUENCE TO THE PLAYER
SimonGame.prototype.showSequence = function () {
  var i = 0;
  var ourSequence = this.sequence;
  // 'this' meaning changes within jQuery, we need to
  // declare this variable outside

  $('#buttons-container').addClass('blocked');
  //Prevents the user from being able to click while
  //the sequence is showing

  var intervalId = setInterval(function () {

    if ( i >= ourSequence.length ) {
      clearInterval(intervalId);
      $('#buttons-container').removeClass('blocked');
      return;
    }

    // turns on the light by adding the class="lighton"
    $('#' + ourSequence[i]).addClass('lighton');

    // after 700 ms
    setTimeout(function() {
      $('button').removeClass('lighton');
    }, 700);

    i++;
  }, 1250);
};

// NEXT ROUND
SimonGame.prototype.nextRound = function () {
  this.addColor();
  this.showSequence();
  this.userClickcount = 0;

  $('#counter').html(this.round);
  this.round += 1;
};

// GAME OVER
SimonGame.prototype.gameOver = function () {
  this.sequence = [];
  this.userClickcount = 0;
  this.round = 1;
  $('#counter').html(0);

  this.startGame();
};
