const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')

function reactMount() {
  return (
    gulp
      .src('./react/styles/scss/*.scss')
      .pipe(sass())
      // .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./react/styles/css'))
  )
}

function mount() {
  return (
    gulp
      .src('./styles/scss/*.scss')
      .pipe(sass())
      // .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./styles/css'))
  )
}

function watch() {
  gulp.watch('./react/styles/scss/*.scss', reactMount)
  gulp.watch('./styles/scss/*.scss', mount)
  // gulp.watch(cleanCSS({compatibility: 'ie8'}));
  gulp.watch('./styles/scss/**/*.scss', mount)
}

exports.watch = watch
exports.mount = mount
exports.mount = reactMount
