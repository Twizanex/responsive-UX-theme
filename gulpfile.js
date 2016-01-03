var gulp = require('gulp'),
base64 = require('gulp-css-base64'),
htmlmin = require('gulp-html-minifier'),
cssmin = require('gulp-cssnano'),
svgmin = require('gulp-svgmin');
/**/
gulp.task('svg', function () {
    return gulp.src('theme/icons/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/icons'));
});

gulp.task('css', function () {
    return gulp.src('dist/css/main.css')
        .pipe(base64({extensionsAllowed: ['.svg']}))
		.pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});
//9999//
gulp.task('default', ['css', 'svg'],function () {
  gulp.src('theme/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist'))
});