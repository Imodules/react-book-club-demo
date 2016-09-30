var gulp = require('gulp');

module.exports = function (options) {
	gulp.task('htmlSource', [], function () {
		return gulp.src([options.src + '/app/index.html'])
				.pipe(gulp.dest(options.dist));
	});
};