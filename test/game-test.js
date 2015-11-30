'use strict';

let chai = require('chai'),
    should = chai.should(),
    game = require('../src/game'),
    player = require('../src/player');

describe('Game - Initial State', () => {

    it('should contain a new board to play on', () => {
        should.exist(game.board);
    });

    it('should be able to add a human player with a name to the game', () => {
        var player1 = player.create("Dave");

        game.humanPlayer = player1;

        should.exist(game.humanPlayer);
        game.humanPlayer.name.should.equal(player1.name);
    });

    it('should contain the computer as the opponent with a default name', () => {
        should.exist(game.computerPlayer);
        game.computerPlayer.name.should.equal('player 2 (computer)');
    });

    it('should have a status of not started', () => {
        should.exist(game.status);
        game.status.should.equal('not started');
    });
});

describe('Game - Started State', () => {

    it('should have a status of started', () => {
        game.start();

        should.exist(game.status);
        game.status.should.equal('not started');
    });
});
