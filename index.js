var squares = document.querySelectorAll(".square");
var reset = document.querySelector("#reset");
var message = document.querySelector("#message");
var playerScores = document.querySelectorAll(".playerScore");

var X = [];
var Y = [];
var scores = [0, 0];
var turn = 0;
var gameOver = false;



var g = document.querySelector('.container');

//winning scores
var rowWin1 = [0, 1, 2];
var rowWin2 = [3, 4, 5];
var rowWin3 = [6, 7, 8];

var colWin1 = [0, 3, 6];
var colWin2 = [1, 4, 7];
var colWin3 = [2, 5, 8];

var diaWin1 = [2, 4, 6];
var diaWin2 = [0, 4, 8];

//set up reset
reset.addEventListener("click", function(){
  for(var i = 0; i< squares.length; i++){
    squares[i].textContent = '';
  }
  for(var i = 0; i < scores.length; i++){
    playerScores[i].textContent = scores[i];
  }
  message.textContent = '';

  X.length = 0;
  Y.length = 0;
  gameOver = false;
});

//set up squares & listeners
for(var i = 0; i < squares.length; i++){
  squares[i].id = i;
  squares[i].addEventListener("click",   function(){
    if(this.textContent || gameOver){
      alert('Invalid Move! Try again!');
    } else {
      if (turn === 0){
        this.textContent = 'X';
        X.push(parseInt(this.id));
        checkGame();
        turn = 1;
      } else{
        this.textContent = 'O';
        Y.push(parseInt(this.id));
        checkGame();
        turn = 0;
      }
    }
  });
}

function checkGame(){
  if(checkScore(rowWin1,X) || checkScore(rowWin2,X) || checkScore(rowWin3,X) || checkScore(colWin1,X) || checkScore(colWin2,X) || checkScore(colWin3,X) || checkScore(diaWin1,X) || checkScore(diaWin2,X)){
    message.textContent = "P1 WINS!";
    scores[0] += 1;
    gameOver = true;
    turn = 0;
  }
  if(checkScore(rowWin1,Y) || checkScore(rowWin2,Y) || checkScore(rowWin3,Y) || checkScore(colWin1,Y) || checkScore(colWin2,Y) || checkScore(colWin3,Y) || checkScore(diaWin1,Y) || checkScore(diaWin2,Y)){
    message.textContent = "P2 WINS!";
    scores[1] += 1;
    gameOver = true;
    turn = 0;
  }
  if(X.length == 5 || Y.length == 5) {
    message.textContent = "Draw!";
    gameOver = true;
    turn = 0;
  }
}

function checkScore(win, arr){
  if(arr.includes(win[0]) && arr.includes(win[1]) && arr.includes(win[2])){
    return true;
  } else {
    return false;
  }
}

function reset(){

}
