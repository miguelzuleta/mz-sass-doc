var gulp = require('gulp'),
	sassdoc = require('sassdoc');

gulp.task('docs:sassdoc', function(){
	return gulp.src('sass/*.scss')
		.pipe(sassdoc());
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['docs:sassdoc']);
})

gulp.task('default', ['docs:sassdoc', 'watch']);