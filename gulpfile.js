'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
sass.compiler = require('node-sass');
 
function cssTask() {
  return gulp.src('htdocs/src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('htdocs/dist/css'));
}

function jsTask() {
  return gulp.src('htdocs/src/**/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('htdocs/dist/js'));
}

exports.default = cssTask
exports.default = jsTask

gulp.task('watch',function(){
  gulp.watch('htdocs/src/**/*.scss', cssTask);
  gulp.watch('htdocs/src/**/*.js', jsTask);
});