// const babel = require("gulp-babel");
// const es2015Preset = require("babel-preset-es2015");
const gulp = require("gulp");
const sass=require("gulp-sass");
const concat=require("gulp-concat");
const uglify=require("gulp-uglify");
const minfyCSS=require("gulp-minify-css");
const imagemin=require("gulp-imagemin");

// 监听任务
gulp.task("watchall",async()=>{
    // 监听html.进行复制
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\jifanxi01"))
	});
	gulp.task('watchall',function(){
		gulp.src('*/**/*')
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jifanxi01"));
	});
    // 监听sass文件
    gulp.watch("sass/**/*",async()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(minfyCSS())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\jifanxi01\\css"))
    })
    //监听js
     gulp.watch("js/**/*",async()=>{
        gulp.src("js/**/*")
//      .pipe(concat("js/**/*"))
//      .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\jifanxi01\\js"))
    })
    //监听img
     gulp.watch("img/**/*",async()=>{
        gulp.src("img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\jifanxi01\\img"))
    })
})

//gulp.task("copy",function(){
//	return gulp.src("./**/*").pipe(gulp.dest("D:\\phpStudy2016\\phpStudy\\WWW\\test\\jinli"));
//});