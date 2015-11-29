'use strict';

let chai = require('chai'),
    should = chai.should(),
    game = require('../src/game');

describe('Game - Initial State', () => {

    it('should contain a new board to play on', () => {
        should.exist(game.board);
    });

    it('should contain a new human player without a name', () => {
        should.exist(game.humanPlayer);
        should.not.exist(game.humanPlayer.name);
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