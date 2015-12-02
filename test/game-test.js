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

        var moveValue1 = "X",
            moveValue2 = "O",
            move1 = (newGame.humanPlayer, { x:0, y:0 }),
            move2 = createMove(newGame.humanPlayer, { x:0, y:1 }),
            move3 = createMove(newGame.humanPlayer, { x:1, y:0 });

        newGame.play();
        newGame.humanPlayer = player.create("Dave");

        newGame.humanPlayer.moveValue = moveValue1;
        newGame.computerPlayer.moveValue = moveValue2;

        newGame.makeMove(move1);
        newGame.makeMove(move2);
        newGame.makeMove(move3);

        newGame.moves[0].should.deep.equal(move1);
        newGame.moves[1].should.deep.equal(move2);
        newGame.moves[2].should.deep.equal(move3);

        newGame.board[move1.coordinates.x][move1.coordinates.y] = moveValue1;
        newGame.board[move2.coordinates.x][move1.coordinates.y] = moveValue2;
        newGame.board[move3.coordinates.x][move1.coordinates.y] = moveValue1;
    });

});


function createGame(){
    newGame = new Game();
}

function createMove(player, coordinates){
    return {
        player: player,
        coordinates: coordinates
    };
}
