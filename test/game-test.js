'use strict';

let chai = require('chai'),
    should = chai.should(),
    game = require('../src/game');

describe('Game Tests - Starting (initializing) the Game', () => {

    it('should be able to start the game', () => {
        game.start();

        game.started.should.be.true;
    });

    it('should contain a new board to play on when game starts', () => {
        game.start();

        game.started.should.be.true;
        should.exist(game.board);
    });

});