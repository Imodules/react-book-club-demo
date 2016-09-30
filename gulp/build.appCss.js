const gulp = require('gulp');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
	filter = require('gulp-filter'),
	sourcemaps = require('gulp-sourcemaps'),
	less = require('gulp-less'),
	size = require('gulp-size'),
	concat = require('gulp-concat'),
	cleancss = new LessPluginCleanCSS({ advanced: true });

module.exports = (options) => {
	gulp.task('cssSource', function () {
		var cssSource = gulp.src([
			options.src + '/app/styles/main.less',
			options.nodeModules + '/font-awesome/less/font-awesome.less',
		], {base: './'});

		var lessFilter = filter(['**/*.less'], {restore: true});

		return cssSource
			.pipe(sourcemaps.init())
			.pipe(less({plugins: [cleancss]}))
			.pipe(concat('app.min.css'))
			.pipe(sourcemaps.write('maps'))
			.pipe(gulp.dest(options.dist + '/css/'))
			.pipe(size({title: options.dist + '/css/', showFiles: true}));
	});

	gulp.task('fontSource', [], function () {
		var fontSource = gulp.src([
			options.nodeModules + '/font-awesome/fonts/*'
		]);

		return fontSource
			.pipe(gulp.dest(options.dist + '/fonts/'))
			.pipe(size({title: options.dist + '/fonts/', showFiles: true}));
	});

	gulp.task('imgSource', [], function () {
		return gulp.src([options.src + '/app/images/*'])
			.pipe(gulp.dest(options.dist + '/images/'));
	});
};
