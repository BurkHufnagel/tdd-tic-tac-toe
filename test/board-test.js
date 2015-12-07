'use strict';

let chai = require('chai'),
    should = chai.should(),
    board = require('../src/board');


describe('Board Tests', () => {

    let newBoard;

    beforeEach(() => {
        newBoard = new board();
    });

    it('should be a 9 cell matrix', () => {
        newBoard.length.should.equal(3);
        newBoard[0].length.should.equal(3);
        newBoard[0].length.should.equal(3);
        newBoard[0].length.should.equal(3);
    });

    it('should be initialized with empty strings', () => {
        for(let row of newBoard){
            for(let column of row){
                column.should.equal("");
            }
        }
    });

});