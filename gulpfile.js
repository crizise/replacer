var gulp 		 = require('gulp');
var replace 	 = require('gulp-replace');
	//You can use string, function or even regex
	replacePiece = "";
	replaceBy	 = "";

gulp.task('default', function () {
    return gulp.src('original/**/*.*')
    	.pipe(replace(replacePiece, replaceBy))
        .pipe(gulp.dest('output'))
});
//Look the changed files on output directory