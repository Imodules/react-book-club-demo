'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var size = require('gulp-size');

module.exports = function (options) {

	function browserSyncInit(baseDir, port) {

		var server = {
			baseDir: baseDir,
			routes: {
				'/bower_components': 'bower_components'
			}
		};

		browserSync.instance = browserSync.init({
			startPath: '/',
			server: server,
			browser: [],
			port: port,
			ui: {
				port: port + 1
			}
		});

	}

	browserSync.use(browserSyncSpa());

	gulp.task('serve', [], function () {

		var source = gulp.src([
			options.dist + '/**/*',
			options.src + '/app/index.html'
		]);

		return source
			.pipe(gulp.dest(options.tmp + '/serve'))
			.pipe(size({title: options.tmp + '/serve', showFiles: true}));

	});

	gulp.task('serve:e2e', ['serve'], function () {
		browserSyncInit(options.tmp + '/serve', 8000);
	});

	gulp.task('jsxWatch', ['buildFull'], browserSync.reload);

	gulp.task('serve:dev', ['buildFull'], function () {
		browserSyncInit(options.dist, 3000);

		gulp.watch([
			options.src + '/app/index.html',
			options.src + '/app/**/*.jsx',
			options.src + '/app/**/*.js',
			options.src + '/app/**/*.less'
		], ['jsxWatch']);
	});

};
