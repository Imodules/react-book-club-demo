var gulp = require('gulp'),
	del = require('del'),
	runSequence = require('run-sequence');

module.exports = function (options) {
	gulp.task('clean', function () {
		return del([options.dist + '/', options.tmp + '/']);
	});

	gulp.task('build', ['clean'], function (done) {
		runSequence(
			'appSource',
			['cssSource','imgSource','fontSource'],
            'htmlSource',
			done
		);
	});

	gulp.task('buildFull', ['clean'], function(done) {
		runSequence(
			'appSourceFull',
			['cssSource','imgSource','fontSource'],
			'htmlSource',
			done
		);
	});
};
