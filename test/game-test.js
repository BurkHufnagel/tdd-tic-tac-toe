'use strict';

let chai = require('chai'),
    should = chai.should(),
    game = require('../src/game');

describe('Starting the Game', () => {

    it('should contain a new board to play on when game starts', () => {
        game.initialize();

        game.initialized.should.be.true;
        should.exist(game.board);
    });

    it('should contain a new human player without a name when game starts', () => {
        game.initialize();

        should.exist(game.humanPlayer);
        should.not.exist(game.humanPlayer.name);
    });

    it('should contain the computer as the opponent with a default name when game starts', () => {
        game.initialize();

        should.exist(game.computerPlayer);
        game.computerPlayer.name.should.equal('player 2 (computer)');
    });
});