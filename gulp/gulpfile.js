var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglifyes'),
    concat = require('gulp-concat');
    // babel = require('gulp-babel');

var cssDest = '../styles/css',
    mapsDest = './maps',
    sassWatch = '../styles/scss/**/*.scss',
    sassSources = ['../styles/scss/app.scss'],
    sassOptions = {outputStyle: 'compressed'};

gulp.task('sass', function() {
    gulp.src(sassSources)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions)
            .on('error', sass.logError))
        .pipe(sourcemaps.write(mapsDest))
        .pipe(gulp.dest(cssDest))
});

var jsDest = '../scripts',
    jsWatch = '../scripts/js/**/*.js',
    jsSources = ['../scripts/js/*.js'];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(sourcemaps.init())
        // .pipe(babel({
        //     presets: ['env']
        // }))
        .pipe(concat('app.js'))
        .pipe(uglify())
            .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsDest))
});

gulp.task('watch', function() {
    gulp.watch(sassWatch, ['sass']);
    gulp.watch(jsWatch, ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);
