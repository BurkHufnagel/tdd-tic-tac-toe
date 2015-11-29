'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha');

var config = {
    core: {
        src: '*.js'
    },
    server: {
        path: './game.js'
    },
    test:{
        src: {
            unit:'test/**/*-test.js'
        },
        mocha: {
            reporter: 'spec'
        }
    }
};

gulp.task('default', ['local'], function(){
});

gulp.task('local',['mocha-unit'], function() {
    gulp.watch('**/*.js', ['mocha-unit']);
});

gulp.task('mocha-unit', function() {
    process.env.PORT = 8001;
    return gulp.src([config.test.src.unit], { read: false })
        .pipe(mocha({
            reporter: config.test.mocha.reporter,
            ui: 'bdd'
        }))
});
