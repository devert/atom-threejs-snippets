var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('changelog', function () {
  return gulp
      .src('CHANGELOG.md', {buffer: false})
      .pipe($.conventionalChangelog({
        preset: 'atom'
      }))
      .pipe(gulp.dest('./'));
});
