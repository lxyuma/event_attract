gulp = require('gulp')
pl = require('gulp-load-plugins')()

dist =
  jsDir:  "./public/javascripts"
  jsFile: "event_attract.js"

src =
  jsPath: "./client/**/*.js"

bower =
  ractive: "./bower_components/ractive/ractive.js"

gulp.task 'scripts', ->
  gulp.src([bower.ractive, src.jsPath])
    .pipe(pl.concat(dist.jsFile))
    .pipe(gulp.dest(dist.jsDir))
    .pipe(pl.connect.reload())

gulp.task 'connect', ['scripts'], ->
  pl.connect.server(
    root: './',
    livereload: true
  )

gulp.task 'build', ['scripts']

gulp.task 'watch', ['build'], ->
  gulp.watch(src.jsPath, ['scripts'])

