
var gulp = require("gulp"),
base64 = require("gulp-css-base64"),

jshint = require("gulp-jshint"),
stylish = require("jshint-stylish"),

htmlmin = require("gulp-html-minifier"),
htmlreplace = require("gulp-html-replace"),

pathSource = "theme",
pathDist = "site";

gulp.task("base64", function(){
	
    gulp.src(pathSource + "/css/style.css")
	.pipe(base64({extensionsAllowed: [".svg"]}))
	.pipe(gulp.dest(pathDist + "/css"));
	
});

gulp.task("valid-js", function(){
	
    gulp.src(pathSource + "/**/*.js")
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	
});

gulp.task("html", function(){
	
    gulp.src(pathSource + "/index.html")
	.pipe(htmlreplace({js: "js/min/app.min.js"}))
	.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
	.pipe(gulp.dest(pathDist));
	
});

gulp.task("default", ["html", "base64"]);