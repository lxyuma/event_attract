gulp = require('gulp')
pl = require('gulp-load-plugins')()

dist =
  jsDir:  "./public/javascripts"
  jsFile: "event_attract.js"

src =
  jsPath: "./client/**/*.js"

gulp.task 'scripts', ->
  gulp.src([src.jsPath])
    .pipe(pl.concat(dist.jsFile))
    .pipe(gulp.dest(dist.jsDir))
    .pipe(pl.connect.reload())

gulp.task 'bower', ->
  pl.bowerFiles().pipe(gulp.dest(dist.jsDir))

gulp.task 'connect', ['scripts'], ->
  pl.connect.server(
    root: './',
    livereload: true
  )

gulp.task 'build', ['scripts', 'bower']

gulp.task 'watch', ['build'], ->
  gulp.watch(src.jsPath, ['scripts'])

