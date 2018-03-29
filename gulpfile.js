// Sass configuration

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./src/assets/stylesheet/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/assets/stylesheet/css/'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./src/assets/stylesheet/scss/**/*.scss', ['sass']);
});
