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

    it('should set status to started when in play mode', () => {
        newGame.play();

        newGame.started.should.equal(true);
    });
});

function createGame(){
    newGame = new Game();
}
