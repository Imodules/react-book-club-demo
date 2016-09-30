var gulp = require('gulp');
var fs = require('fs');
var os = require('os');

var options = {
	src: 'src',
	dist: 'dist',
	tmp: 'tmp',
	build: 'build',
	outFile: 'app.min.js',
	nodeModules: 'node_modules',
	errorHandler: function(title) {
		return function(err) {
			gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
			this.emit('end');
		};
	}
};


fs.readdirSync('./gulp').filter(function(file) {
	return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
	require('./gulp/' + file)(options);
});

gulp.task('default', function () {
	gulp.start('build');
});
