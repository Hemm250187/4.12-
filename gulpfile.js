const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const mincss = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const webserver = require("gulp-webserver");

// 开发 css
gulp.task("devcss", () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest("./src/css"))
})
gulp.task("devjs", () => {
    return gulp.src("./src/js/**/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest("./bulid/js"))
})
gulp.task("watch", () => {
    return gulp.watch(["./src/css/**/*.scss", "./src/js/**/*.js"], gulp.series("devcss", "devjs"))
})

gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(webserver({
            port: 1245,
            livereload: true,
        }))
})
gulp.task("default", gulp.series("devcss", "devjs", "server", "watch"))


//上线
//压缩 css
gulp.task("css", () => {
    return gulp.src("./src/css/**/*.css")
        .pipe(mincss())
        .pipe(gulp.dest("./bulid/css"))
})
gulp.task("js", () => {
    return gulp.src("./bulid/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./bulid/js"))
})
gulp.task("html", () => {
    return gulp.src("./src/index.html")
        .pipe(htmlmin({
            removeComments: true, //清除HTML注释
            collapseWhitespace: true, //压缩HTML
            collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        }))
        .pipe(gulp.dest("./bulid"))
})
gulp.task("watcher", () => {
    return gulp.watch(["./src/css/**/*.css", "./bulid/js/**/*.js", "./src/index.html"], gulp.parallel("css", "js", "html"))
})