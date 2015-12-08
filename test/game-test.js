'use strict';

let chai = require('chai'),
    should = chai.should(),
    Game = require('../src/game'),
    player = require('../src/player'),

    humanPlayer,
    computerPlayer,
    newGame;

beforeEach(() => {
    newGame = new Game();
    humanPlayer = newGame.humanPlayer = createPlayer("Dave");
    computerPlayer = newGame.computerPlayer;

    setMoveValue(humanPlayer, "X");
    setMoveValue(computerPlayer, "O");
});


describe('Game - Initial State', () => {

    it('should contain a new board to play on', () => {
        should.exist(newGame.board);
    });

    it('should be able to add a human player with a name to the game', () => {
        should.exist(newGame.humanPlayer);
        newGame.humanPlayer.should.have.deep.property('name', humanPlayer.name);
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

    it('should have a started status when play is initiated', () => {
        newGame.play();
        should.exist(newGame.started);
        newGame.started.should.equal(true);
    });

    it('should be able to make a move on the board by setting it to a specific value"', () => {
        newGame.play();

        var move1 = {
            player: newGame.humanPlayer,
            coordinates: { x:0, y:0 }
        };

        newGame.makeMove(move1);
        newGame.board[move1.coordinates.x][move1.coordinates.y].should.equal("X");
    });

    it('should be able to keep track of consecutive moves by a player', () => {
        newGame.play();

        var moves = [createMove(newGame.humanPlayer, { x:0, y:0 }),
                     createMove(newGame.computerPlayer, { x:0, y:1 }),
                     createMove(newGame.humanPlayer, { x:1, y:0 })];

        var i = 0;
        for(let move of moves){
            newGame.makeMove(move);
            newGame.moves[i].should.deep.equal(move);
            i++;
        };

        newGame.board[moves[0].coordinates.x][moves[0].coordinates.y] = "X";
        newGame.moves[0].player.should.deep.equal(humanPlayer);
        newGame.board[moves[1].coordinates.x][moves[1].coordinates.y] = "O";
        newGame.moves[1].player.should.deep.equal(computerPlayer);
        newGame.board[moves[2].coordinates.x][moves[2].coordinates.y] = "X";
        newGame.moves[2].player.should.deep.equal(humanPlayer);
    });

    it('should be able to win for 2 different players diagonally', () => {
        newGame.play();

        makeMoves(movesForLeftToRightDiagonalWinner());
        newGame.winner.should.deep.equal(newGame.humanPlayer);

        resetMoves();
        resetWinner();
        makeMoves(movesForRightToLeftDiagonalWinner());
        newGame.winner.should.deep.equal(newGame.computerPlayer);
    });

    it('should be able to win for two different players for a row', () => {
        newGame.play();

        makeMoves(movesForTopRowWinner());
        newGame.winner.should.deep.equal(newGame.humanPlayer);

        resetMoves();
        resetWinner();
        makeMoves(movesForMiddleRowWinner());
        newGame.winner.should.deep.equal(newGame.computerPlayer);

        resetMoves();
        resetWinner();
        makeMoves(movesForBottomRowWinner());
        newGame.winner.should.deep.equal(newGame.humanPlayer);
    });
});


function createPlayer(name){
    return player.create(name);
}

function setMoveValue(player, moveValue){
    player.moveValue = moveValue;
};

function createMove(player, coordinates){
    return {
        player: player,
        coordinates: coordinates
    };
};

function makeMoves(moves){
    for(var move of moves){
        newGame.makeMove(move);
    }
};

function movesForLeftToRightDiagonalWinner(){
    return [createMove(newGame.humanPlayer, { x:0, y:0 }),
            createMove(newGame.computerPlayer, { x:0, y:1 }),
            createMove(newGame.humanPlayer, { x:1, y:1 }),
            createMove(newGame.computerPlayer, { x:2, y:1 }),
            createMove(newGame.humanPlayer, { x:2, y:2 })];
};

function movesForRightToLeftDiagonalWinner(){
    return [createMove(newGame.computerPlayer, { x:0, y:2 }),
            createMove(newGame.humanPlayer, { x:0, y:1 }),
            createMove(newGame.computerPlayer, { x:1, y:1 }),
            createMove(newGame.humanPlayer, { x:2, y:1 }),
            createMove(newGame.computerPlayer, { x:2, y:0 })];
};

function movesForTopRowWinner(){
    return [createMove(newGame.humanPlayer, { x:0, y:0 }),
            createMove(newGame.computerPlayer, { x:1, y:1 }),
            createMove(newGame.humanPlayer, { x:0, y:1 }),
            createMove(newGame.computerPlayer, { x:2, y:2 }),
            createMove(newGame.humanPlayer, { x:0, y:2 })];
};

function movesForMiddleRowWinner(){
    return [createMove(newGame.computerPlayer, { x:1, y:0 }),
            createMove(newGame.humanPlayer, { x:0, y:0 }),
            createMove(newGame.computerPlayer, { x:1, y:1 }),
            createMove(newGame.humanPlayer, { x:2, y:2 }),
            createMove(newGame.computerPlayer, { x:1, y:2 })];
};

function movesForBottomRowWinner(){
    return [createMove(newGame.humanPlayer, { x:2, y:0 }),
            createMove(newGame.computerPlayer, { x:0, y:0 }),
            createMove(newGame.humanPlayer, { x:2, y:1 }),
            createMove(newGame.computerPlayer, { x:0, y:1 }),
            createMove(newGame.humanPlayer, { x:2, y:2 })];
};

function resetMoves(){
    newGame.moves = [];
};

function resetWinner(){
    newGame.winner = null;
}