var gulp = require('gulp');
var del  = require('del');
var files = require('./config/files');
var sequence = require("gulp-sequence");
var run = require("gulp-run");


gulp.task('clean', () => del([files.output]));
gulp.task('finalize', ()=> del(files.finalize));
gulp.task("build", ()=> run("npm run build").exec());
gulp.task('release', sequence('clean', 'build', 'finalize'));

