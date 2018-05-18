var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Task for building blog when something changed:
gulp.task('build', shell.task(['bundle exec jekyll serve']));
// If you don't use bundle:
// gulp.task('build', shell.task(['jekyll serve']));
// If you use  Windows Subsystem for Linux (thanks @SamuliAlajarvela):
// gulp.task('build', shell.task(['bundle exec jekyll serve --force_polling']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch(['_site/**/*.*','css/*.*']).on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('_sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});
gulp.task('sass:watch', function () {
  gulp.watch('_sass/**/*.scss', ['sass']);
});

gulp.task('default', ['build', 'serve','sass:watch']);