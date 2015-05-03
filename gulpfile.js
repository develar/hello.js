var gulp = require("gulp")
var uglify = require("gulp-uglify")
var concat = require("gulp-concat")
var sourcemaps = require("gulp-sourcemaps")

gulp.task("default", function () {
  return gulp.src([
    //'src/hello.polyfill.js',
    'src/hello.js',
    //'src/hello.legacy.js',
    //'src/modules/dropbox.js',
    'src/modules/facebook.js',
    //'src/modules/flickr.js',
    //'src/modules/foursquare.js',
    'src/modules/github.js',
    'src/modules/google.js',
    //'src/modules/instagram.js',
    //'src/modules/linkedin.js',
    //'src/modules/soundcloud.js',
    //'src/modules/twitter.js',
    //'src/modules/windows.js',
    //'src/modules/yahoo.js',
    'src/hello.amd.js'
    //'src/hello.commonjs.js'
  ])
      .pipe(sourcemaps.init())
      .pipe(concat("hello-1.5.1.js"))
      .pipe(uglify({mangle: false}))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest('dist'))
})