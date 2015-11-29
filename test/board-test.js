'use strict';

let chai = require('chai'),
    should = chai.should(),
    board = require('../src/board');

describe('Board Tests', () => {

    it('board should be initialized with empty values', () => {
        var newBoard = board.create();

        for(var row=0; row < newBoard.length; row++) {
            for(var value = 0; value < row.length; value++ ){
                value.should.be.a(null);
            }
        }
    });

});