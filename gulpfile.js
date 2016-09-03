var gulp = require ('gulp');
var purify = require('purify-css');

gulp.task('css', function() {
  return purify(['**/assets/js/*.js', '**/*.html', '**/assets/external/*.js', '**/assets/external/*.html', '**/json/*.txt'], ['**/assets/css/sources/*.css'], { output: './assets/css/purified.css', minify: true, rejected: true });
});