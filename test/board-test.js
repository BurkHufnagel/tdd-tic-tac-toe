'use strict';

let chai = require('chai'),
    should = chai.should(),
    board = require('../src/board');

describe('Board Tests', () => {

    it('board should be a 9 cell matrix', () => {
        var newBoard = board.create();

        newBoard.length.should.equal(3);
        newBoard[0].length.should.equal(3);
        newBoard[0].length.should.equal(3);
        newBoard[0].length.should.equal(3);
    });

    it('board should be initialized with empty values in a 9 cell matrix', () => {
        var newBoard = board.create(), row, column;
        for(row in newBoard){

            for(column in row){
                newBoard[row][column].should.equal("");
            }
        }
    });

});