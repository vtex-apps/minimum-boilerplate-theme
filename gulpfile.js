const gulp = require('gulp'),
  concat = require('gulp-concat'),
  path = require('path'),
  glob = require('glob')

const sass = require('gulp-sass')(require('sass'))

// @TODO: melhorar a organização
/**
   ___ _                __             _      ___
 / __| |_ ___ _ _ ___ / _|_ _ ___ _ _| |_   / __| __ _ ______
 \__ \  _/ _ \ '_/ -_)  _| '_/ _ \ ' \  _|  \__ \/ _` (_-<_-<
 |___/\__\___/_| \___|_| |_| \___/_||_\__|  |___/\__,_/__/__/

 */
// Custom sass para o storefront
const pathsStore = {
  styles: {
    styles: 'styles/sass/**/',
    ext: 'styles/sass/**/*.{css,scss,sass}',
    dest: 'styles/css',
  },
}

// Quick/efficient way to get the unique values from a array.
function uniqValuesArray(a) {
  var seen = {}
  var out = []
  var len = a.length
  var j = 0
  for (var i = 0; i < len; i++) {
    var item = a[i]
    if (seen[item] !== 1) {
      seen[item] = 1
      out[j++] = item
    }
  }
  return out
}
function getCurrentTimestamp() {
  const date = new Date()

  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `\x1b[35m[${hours}:${minutes}:${seconds}]\x1b[0m`
}

let filteredFiles = []

gulp.task('getFiles', function (done) {
  glob(pathsStore.styles.ext, function (er, files) {
    filteredFiles = uniqValuesArray([
      ...files.map((file) => path.basename(file)),
    ])
    done()
  })
})

gulp.task('sass', function (done) {
  filteredFiles.forEach((file) => {
    const fileName = file

    gulp
      .src([
        'styles/sass/utils/_mixin.scss',
        'styles/sass/utils/_vars.scss',
        pathsStore.styles.styles + fileName,
      ])
      .pipe(concat(fileName))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(pathsStore.styles.dest))
  })
  done()
})

gulp.task('run', gulp.series('getFiles', 'sass'))

gulp.task('watch', function () {
  gulp.watch(pathsStore.styles.ext).on('change', function (fileName) {
    fileName = path.basename(fileName)

    if (fileName.includes('.css')) {
      gulp
        .src(pathsStore.styles.styles + fileName)
        .pipe(concat(fileName))
        .pipe(gulp.dest(pathsStore.styles.dest))
    } else {
      gulp
        .src([
          'styles/sass/utils/_mixin.scss',
          'styles/sass/utils/_vars.scss',
          pathsStore.styles.styles + fileName,
        ])
        .pipe(concat(fileName))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(pathsStore.styles.dest))
    }

    console.log(
      getCurrentTimestamp() + ' File: \x1b[32m' + fileName + '\x1b[0m builded.'
    )
  })
})

gulp.task('build', gulp.series('run', 'watch'))
