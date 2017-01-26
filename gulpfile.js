var gulp = require('gulp');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('pug', function(){
  gulp.src('./pug/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'))
});

gulp.task('default', () =>
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./style'))
);

gulp.task('watch', function(){
  gulp.watch('./src/pug/*.pug',['pug'])
});

gulp.task('default', ['pug','watch'])
