'use strict';

let chai = require('chai'),
    should = chai.should(),
    Game = require('../src/game'),
    player = require('../src/player'),
    newGame;

describe('Game - Initial State', () => {

    beforeEach((done) => {
        createGame();
        done();
    });

    it('should contain a new board to play on', () => {
        should.exist(newGame.board);
    });

    it('should be able to add a human player with a name to the game', () => {
        var player1 = player.create("Dave");

        newGame.humanPlayer = player1;

        should.exist(newGame.humanPlayer);
        newGame.humanPlayer.should.have.deep.property('name', player1.name);
    });

    it('should contain the computer as the opponent with a default name', () => {
        should.exist(newGame.computerPlayer);
        newGame.computerPlayer.should.have.deep.property('name', 'player 2 (computer)');
    });

    it('should not be started initially', () => {
        should.exist(newGame.started);
        newGame.started.should.equal(false);
    });
});

describe('Game - Play State', () => {

    beforeEach((done) => {
        createGame();
        done();
    });

    it('should be able to make a move on the board by setting it to a specific value"', () => {
        var moveValue = "X";

        newGame.play();
        newGame.humanPlayer = player.create("Dave");
        newGame.humanPlayer.moveValue = moveValue;

        var move1 = {
            player: newGame.humanPlayer,
            coordinates: { x:0, y:0 }
        };

        newGame.makeMove(move1);
        newGame.board[move1.coordinates.x][move1.coordinates.y].should.equal(moveValue);
    });

    it('should be able to keep track consecutive moves by a player', () => {
        newGame.play();
        var humanPlayer = newGame.humanPlayer = createPlayer("Dave");
        var computerPlayer = newGame.humanPlayer;

        var moveValue1 = "X",
            moveValue2 = "O";

        setMoveValue(humanPlayer, moveValue1);
        setMoveValue(computerPlayer, moveValue2);

        var moves = [createMove(newGame.humanPlayer, { x:0, y:0 }),
                     createMove(newGame.computerPlayer, { x:0, y:1 }),
                     createMove(newGame.humanPlayer, { x:1, y:0 })];

        var i = 0;
        for(var move of moves){
            newGame.makeMove(move);
            newGame.moves[i].should.deep.equal(move);
            i++;
        }

        newGame.board[moves[0].coordinates.x][moves[0].coordinates.y] = moveValue1;
        newGame.board[moves[1].coordinates.x][moves[1].coordinates.y] = moveValue2;
        newGame.board[moves[2].coordinates.x][moves[2].coordinates.y] = moveValue1;
    });

    it('', () => {

    });

});


function createGame(){
    newGame = new Game();
};

function createPlayer(name){
    return player.create("Dave");
}

function setMoveValue(player, moveValue){
    player.moveValue = moveValue;
};


function createMove(player, coordinates){
    return {
        player: player,
        coordinates: coordinates
    };
}
