var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browsersync = require('browser-sync');


gulp.task('browsersync', function () {
  browsersync({
    server: {
       baseDir: "./"
    }
  });
});


gulp.task('sass', function () {
  gulp.src('imports.sass')
  .pipe(sass())
  .pipe(rename('index.css'))
  .pipe(gulp.dest('./'));
});


gulp.task('browserreload', function () {
  browsersync.reload()
});


gulp.task('default', ['browsersync', 'sass'],function () {
  gulp.watch(['sass/*.sass', 'sass/*.scss', 'imports.sass'], ['sass']);
  gulp.watch(['*.html', '*.css', 'js/*.js'], ['browserreload']);
});
