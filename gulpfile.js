let gulp = require('gulp')
let cleanCSS = require('gulp-clean-css')
let minifyjs = require('gulp-js-minify')

gulp.task('minify-css', () => {
  return gulp.src('./src/assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
})

gulp.task('minify-js', function () {
  return gulp.src('./build/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('default', gulp.series('minify-css', 'minify-js', function (done) {
  done()
}))
