const {src, dest, watch, parallel, series } = require('gulp');

const less = require('gulp-less');
const scss = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const concat = require('gulp-concat');
const sourcemaps = require("gulp-sourcemaps");
const cssmin = require('gulp-cssmin');
const babel = require("gulp-babel");


function browsersync2(){
    browserSync.init({
        server: {
            baseDir: "app/",
            directory: true
        }
    });
}

function cleanDist() {
    return del('dist')
}
function scripts() {
    return src("app/assets/js/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(concat("scripts.js"))
        .pipe(sourcemaps.write("."))
        .pipe(dest("app/js/"))
        .pipe(browserSync.stream())
}
function styles() {
    return src('app/scss/*.scss')
        .pipe(scss({outputStyle: 'expanded'}))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(autoprefixer({
            overrideBrowserslist : ['last 10 version'],
            grid: true
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(concat('style.min.css'))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}


function build() {
    return src([
        'app/css/*.css',
        'app/fonts/**/*',
        'app/js/**/*',
        'app/img/**/*',
        'app/*.html'
], {base:'app'})
    .pipe(dest('dist'))
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(["app/assets/js/**/*.js"], { usePolling: true }, scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
}
exports.scripts = scripts;
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync2;
exports.cleanDist = cleanDist;


exports.build = series(cleanDist, build);
exports.default = parallel(browsersync2,watching)