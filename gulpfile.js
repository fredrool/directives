var gulp = require('gulp');
var webserver = require('gulp-webserver');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');

var paths = {
	appRoot: '.',
	index: 'index.html',
	js: 'app/**/*.js',
	css: 'styles/**/*.css',
	appSrc: ['app/**/*', '!index.html'],
	bowerSrc: 'bower_components/**/*'
};

gulp.task('default', ['watch']);

gulp.task('watch', ['serve'], function() {
	gulp.watch(paths.appSrc, ['inject']);
	gulp.watch(paths.bowerSrc, ['inject']);
	gulp.watch(paths.index, ['inject']);
});

gulp.task('serve', ['inject'], function() {
	return gulp.src(paths.appRoot)
	.pipe(webserver({
		livereload: true,
	    open: true
	}));
});

gulp.task('inject', function() {
	var wiredep = require('wiredep').stream;

	return gulp.src(paths.index)
    .pipe(wiredep())
  	.pipe(inject(
    	gulp.src([paths.js]).pipe(angularFilesort()), {relative:true}))
	.pipe(inject(
    	gulp.src([paths.css]), {relative:true}))
	.pipe(gulp.dest(paths.appRoot));
});
