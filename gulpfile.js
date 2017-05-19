const gulp = require('gulp')

const uglify = require('gulp-uglify')
const stylus = require('gulp-stylus')
const concat = require('gulp-concat')

gulp.task('script', () => {
  gulp.src('./scripts/*.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('script-pub', () => {
  gulp.src('./scripts/*.js')
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
})

gulp.task('stylus', () => {
  gulp.src('./styles/*.styl')
    .pipe(concat('index.css'))
    .pipe(stylus())
    .pipe(gulp.dest('./dist'))
})

gulp.task('stylus-pub', () => {
  gulp.src('./styles/*.styl')
    .pipe(stylus({ compress: true }))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('dev', () => {
  gulp.watch('./scripts/*.js', ['script'])
  gulp.watch('./styles/*.styl', ['stylus'])
})

gulp.task('pub', ['script-pub', 'stylus-pub'])