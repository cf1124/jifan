var gulp = require("gulp");

gulp.task("copy-html",function(){
	gulp.src("./**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\jifanxiguanwang"));
});