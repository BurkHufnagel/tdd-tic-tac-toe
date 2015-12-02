'use strict';

var board = require('./board'),
    player = require('./player');

// pattern 1 - define properties within constructor function with 'this'
// then add functions to its prototype
//var Game = module.exports = function(){
//    this.started = false;
//    this.board = board.create();
//    this.humanPlayer = null;
//    this.computerPlayer = player.create('player 2 (computer)')
//};
//
//Game.prototype.play = function(){
//    this.started = true
//};

// pattern 2 - same as 1 but we're defining the play function inside the constructor function
//var Game = module.exports = function(){
//    this.play = function(){
//        this.started = true
//    };
//    this.started = false;
//    this.board = board.create();
//    this.humanPlayer = null;
//    this.computerPlayer = player.create('player 2 (computer)')
//};

// PATTERN 3- took out the variable, not sure why Dave was using them, need to understand the use case for doing that
//module.exports = function(){
//    this.play = function(){
//        this.started = true
//    };
//    this.started = false;
//    this.board = board.create();
//    this.humanPlayer = null;
//    this.computerPlayer = player.create('player 2 (computer)')
//};

// PATTERN 4 - OBJECT LITERAL
// ? - can you new up object literals like you can with constructor functions?  I thought I had a problem where i couldn't and therefore
// thought if I changed it to a function then I could start newing up separate instances of my module.  Check this...

// Test

// note: trying to create an instance of game fails, you can't do that apparently with object literals?
//let chai = require('chai'),
//    should = chai.should(),
//    game = require('../src/game');
//works:
//it('should set status to started when in play mode', () => {
//    game.play();
//
//    game.started.should.equal(true);
//});
// doesn't work, you can't use new??
//it('should set status to started when in play mode', () => {
//    var newGame = new game();
//    newGame.play();
//
//    newGame.started.should.equal(true);
//});

//module.exports = {
//    started: false,
//    board: board.create(),
//    humanPlayer: null,
//    computerPlayer: player.create('player 2 (computer)'),
//    play: function(){
//        this.started = true
//    },
//};

// PATTERN 4 - OBJECT LITERAL - call local function to set property of module (this)
// ? is there any advantage to moving it to a local function other than preference?  I think it's cleaner but maybe not, maybe inlining it like Dave does is
//module.exports = {
//    started: false,
//    board: board.create(),
//    humanPlayer: null,
//    computerPlayer: player.create('player 2 (computer)'),
//    play: play
//};
//
//function play(){
//    this.started = true
//}


//PATTERN 5 - Constructor Function and then set a property to an object literal to define the properties of the api (or the object)

//https://github.com/cengage/proxit/blob/master/lib/proxit.js