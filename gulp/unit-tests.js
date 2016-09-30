const gulp = require('gulp');
const mocha = require('gulp-mocha');
const runSequence = require('run-sequence');

require('babel-core/register');

module.exports = function ( options ) {
	function getUnitTests() {
		return gulp.src([
			options.src + '/**/tests/*.unit.js'
		], { read: false });
	}

	gulp.task('test', [], function ( done ) {
		runSequence(
			'validateSource',
			'test:unit',
			done
		);
	});

	gulp.task('test:unit', function () {
		return getUnitTests()
			.pipe(mocha({
				require: [ './' + options.src + '/utils/mockEnvironment.js' ],
				compilers: [ 'js:babel-core/register' ]
			}));
	});

};
