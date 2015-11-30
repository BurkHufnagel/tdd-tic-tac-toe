'use strict';

let chai = require('chai'),
    should = chai.should(),
    board = require('../src/board');

describe('Board Tests', () => {

    it('board should be initialized with empty values', () => {
        var newBoard = board.create();

        for(var row in newBoard){
            for(var column in row){
                newBoard[row][column].should.equal("");
            }
        }
    });

});