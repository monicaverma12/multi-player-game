var canvas, backgroundImage;

var GameState = 0;
var PlayerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(PlayerCount === 4){
    game.update(1);
  }
  if(GameState === 1){
    clear();
    game.play();
  }
}
