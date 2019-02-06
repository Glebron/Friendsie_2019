var gulp = require('gulp')
var concat = require('gulp-concat')

var postcss= require('gulp-postcss')
var autoprefixer = require('gulp-autoprefixer')
var cssvars= require('postcss-simple-vars')
var nested= require('postcss-nested')
var cssImport= require('postcss-import')
var browserSync = require('browser-sync').create();
var webpack = require('webpack')

var cleanCSS = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var del = require('del')

   const cssFiless = [
        './dev/css/style.css'];
 function styles(){
  return gulp.src(cssFiless)
    .pipe(concat('styles.css'))
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]) )
    .pipe(cleanCSS({level:2}))
    .pipe(gulp.dest("./build/style"))
    .pipe(browserSync.stream());
    };

    function wp(cb){
        webpack(require('./configs/webpack.config.js'), function(err,stats){
                    if (err){
                        console.log(err.toString());
                    }
                console.log(stats.toString());
            cb();            
        }       
        );
    }
   /* function js(){
        return gulp.src('./dev/js/index.js')
            .pipe(uglify())
            .pipe(gulp.dest("./build/js"))
            .pipe(browserSync.stream());
          };*/    
        function php(){
            return gulp.src('./dev/**/*.php')
            .pipe(gulp.dest("./build"))
               .pipe(browserSync.stream());
            };
        function html(){
             return gulp.src('./dev/**/*.html')
                 .pipe(gulp.dest("./build"))
                 .pipe(browserSync.stream());
                  };

function clean(){
            return del(['build/*'])
          }

function watch(){
    browserSync.init({
        injectChanges: true,
        //proxy: "http://localhost/"
        server: {  baseDir: "./build" }
    });
    gulp.watch("./dev/css/**/*.css", styles)
    gulp.watch("./dev/js/**/*.js", wp).on('change', browserSync.reload)
    gulp.watch("./dev/**/*.html", html)
    gulp.watch("./dev/**/*.php", php)
}

gulp.task("start", watch);
gulp.task("wp", wp);
 
gulp.task("build", gulp.series(clean, 
            gulp.parallel( styles, wp)
    ));
