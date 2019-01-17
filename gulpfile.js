var gulp = require('gulp')
var concat = require('gulp-concat')

var postcss= require('gulp-postcss')
var autoprefixer = require('gulp-autoprefixer')
var cssvars= require('postcss-simple-vars')
var nested= require('postcss-nested')
var cssImport= require('postcss-import')

var cleanCSS = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var del = require('del')

   const cssFiless = [
        './dev/css/style.css',
        './dev/css/style2.css'];
 function styles(){
  return gulp.src(cssFiless)
    .pipe(concat('styles.css'))
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]) )
    .pipe(cleanCSS({level:2}))
    .pipe(gulp.dest("./build/style"));
    };
    function js(){
        return gulp.src('./dev/js/index.js')
            .pipe(uglify())
            .pipe(gulp.dest("./build/js"));
          };
    

function clean(){
            return del(['build/*'])
          }

function watch(){
    gulp.watch("./dev/css/**/*.css", styles)
    gulp.watch("./dev/js/**/*.js", js)
}

 

gulp.task("start", watch);

 
gulp.task("build", gulp.series(clean, 
            gulp.parallel( styles, js)
    ));