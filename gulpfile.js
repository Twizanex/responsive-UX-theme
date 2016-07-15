
var gulp = require("gulp"),
base64 = require("gulp-css-base64"),

jshint = require("gulp-jshint"),
stylish = require("jshint-stylish"),

htmlmin = require("gulp-html-minifier"),

pathSource = "theme",
pathSite = "site",
pathDist = pathSite + "/dist";

gulp.task("base64", function(){
	
    gulp.src(pathSource + "/css/style.css")
	.pipe(base64({extensionsAllowed: [".svg"]}))
	.pipe(gulp.dest(pathSite + "/css"));
	
});

gulp.task("valid-js", function (){
	
    gulp.src(pathSource + "/**/*.js")
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	
});

gulp.task("default", ["base64"],function(){
	
	gulp.src(pathSite + "/index.html")
	.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
	.pipe(gulp.dest(pathDist));
	
});