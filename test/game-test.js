'use strict';

let chai = require('chai'),
    should = chai.should(),
    game = require('../src/game'),
    player = require('../src/player'),
    newGame;

describe('Game - Initial State', () => {

    beforeEach((done) => {
        newGame = new game.initialize();
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

    it('should have a status of not started', () => {
        should.exist(newGame.status);
        newGame.status.should.equal('not started');
    });
});

describe('Game - Started State', () => {
    beforeEach((done) => {
        newGame = new game.initialize();
        done();
    });


    it('should have a status of started', () => {
        newGame.play();

        should.exist(newGame.status);
        newGame.status.should.equal('not started');
    });
});
