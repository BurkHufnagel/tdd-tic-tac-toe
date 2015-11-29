'use strict';

let chai = require('chai'),
    should = chai.should(),
    player = require('../src/player');

describe('Player Tests', () => {

    it('should have property name after created', () => {
        var player1 = player.create();

        player1.should.have.property('name');
    });

});