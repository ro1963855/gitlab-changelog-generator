// Sass configuration

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('sass', function () {
    gulp.src('./src/assets/stylesheet/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/assets/stylesheet/css/'))
});

gulp.task('concat', function() {
    return gulp.src('./src/assets/stylesheet/css/**/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./src/assets/stylesheet/build/'));
});

gulp.task('minify-css',['concat'], function() {
    return gulp.src('./src/assets/stylesheet/build/all.css')
      .pipe(minifyCSS({
         keepBreaks: true,
      }))
      .pipe(rename(function(path) {
        path.basename += ".min";
        path.extname = ".css";
      }))
      .pipe(gulp.dest('./src/assets/stylesheet/build/'));
});

gulp.task('default', ['sass', 'minify-css'], function () {
    gulp.watch('./src/assets/stylesheet/scss/**/*.scss', ['sass']);
    gulp.watch('./src/assets/stylesheet/css/**/*.css', ['minify-css']);
});
