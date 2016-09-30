var gulp = require('gulp');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var streamify = require('gulp-streamify');
var sourcecmaps = require('gulp-sourcemaps');

module.exports = (options) => {
    gulp.task('validateSource', () => {
        var appSource = gulp.src([
            options.src + '/**/*.jsx',
			options.src + '/**/*.js'
        ]);

        return appSource
            .pipe(eslint('.eslintrc'))
			.pipe(eslint.format())
			.pipe(eslint.failOnError());
    });

    gulp.task('appSource', ['validateSource'], function () {
		return browserify({
			entries: ['./src/app/index.js'],
			insertGlobals: true
		})
			.transform('babelify', {presets: ['es2015', 'react']})
			.bundle()
			.pipe(source(options.outFile))
			.pipe(streamify(uglify()))
			.pipe(gulp.dest(options.dist));
	});

	gulp.task('appSourceFull', ['validateSource'], function () {
		return browserify({
			entries: ['./src/app/index.js'],
			debug: true,
			insertGlobals: true
		})
			.transform('babelify', {presets: ['es2015', 'react']})
			.bundle()
			.pipe(source(options.outFile))
			.pipe(buffer())
			.pipe(sourcecmaps.init({loadMaps: true}))
			.pipe(sourcecmaps.write())
			.pipe(gulp.dest(options.dist));
	});
};