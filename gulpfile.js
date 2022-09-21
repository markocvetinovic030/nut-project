let gulp = require('gulp')
let cssnano = require('gulp-cssnano')
let sass = require('gulp-sass')(require('sass'))
let concat = require('gulp-concat')
let uglify = require('gulp-uglify')
let imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
    return gulp.src('src/sass/main.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function(){
    return gulp.src(['src/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('img', function(){
    return gulp.src(['src/img/*'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
})

gulp.task('watch', function(){
    gulp.watch(['sass/*.scss', 'sass/*/*.scss'], gulp.series('sass'))
    gulp.watch('js/*.js', gulp.series('js'))
})

gulp.task('default', gulp.series('sass', 'js', 'img', 'watch'))