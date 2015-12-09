'use strict';

var board = require('./board'),
    player = require('./player'),
    movesMade;

var Game = module.exports = function(){
    this.started = false;
    this.board = new board();
    this.humanPlayer = null;
    this.computerPlayer = player.create('computer');
    this.moves = [];
    this.winner = null;
};

Game.prototype.play = function(){
    this.started = true
};

Game.prototype.makeMove = function(move){
    this.board[move.coordinates.x][move.coordinates.y] = move.player.moveValue;
    this.moves.push(move);

    Game = this;

    checkForWinner();
};

function checkForWinner(){

    if(!Game.moves && Game.moves.length >= 5) return;

    checkForFirstRowWinner();

    if(!Game.winner){
        checkForSecondRowWinner();
    };

    if(!Game.winner){
        checkForThirdRowWinner();
    };

    if(!Game.winner){
        checkForDiagonalWinner();
    };
};


function checkForFirstRowWinner(){
    movesMade = [];

    for (var move of Game.moves) {
        if (move.coordinates.x === 0 && (move.coordinates.y === 0 ||
                                         move.coordinates.y === 1 ||
                                         move.coordinates.y === 2)){

            movesMade.push({
                player: move.player,
                moveValue: move.player.moveValue
            });
        };
    };

    setWinnerIfFound(movesMade);
}

function checkForSecondRowWinner(){
    movesMade = [];

    for (var move of Game.moves) {
        if (move.coordinates.x === 1 && (move.coordinates.y === 0 ||
                                         move.coordinates.y === 1 ||
                                         move.coordinates.y === 2)){

            movesMade.push({
                player: move.player,
                moveValue: move.player.moveValue
            });
        };
    };

    setWinnerIfFound(movesMade);
}

function checkForThirdRowWinner(){
    movesMade = [];

    for (var move of Game.moves) {
        if (move.coordinates.x === 2 && (move.coordinates.y === 0 ||
                                         move.coordinates.y === 1 ||
                                         move.coordinates.y === 2)){

            movesMade.push({
                player: move.player,
                moveValue: move.player.moveValue
            });
        };
    };

    setWinnerIfFound(movesMade);
};

function checkForDiagonalWinner(){
    movesMade = [];

    for (var move of Game.moves) {
        if (move.coordinates.x === 1 && (move.coordinates.y === 1) ||
            move.coordinates.x === 0 && (move.coordinates.y === 0 || move.coordinates.y === 2) ||
            move.coordinates.x === 2 && (move.coordinates.y === 2 || move.coordinates.y === 0)){

            movesMade.push({
                player: move.player,
                moveValue: move.player.moveValue
            });
        };
    };

    setWinnerIfFound(movesMade);
};

function setWinnerIfFound(movesMade){
    var moveValues = [],
        players = [];

    if(!movesMade || movesMade.length < 3) return;

    for(let move of movesMade) {
        players.push(move.player);
        moveValues.push(move.moveValue);
    };

    if(moveValues.allValuesSame() && players.allValuesSame()){
        Game.winner = players[0];
    };
}

Array.prototype.allValuesSame = function(){
    for(var i = 1; i < this.length; i++) {
        if(this[i] !== this[0]){ return false; }
    };

    return true;
};
