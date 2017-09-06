
const gulp = require('gulp'),
			exec = require('gulp-exec')


gulp.task('latex', function() {
	const options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false, // default = false, true means stdout is written to file.contents
    customTemplatingThing: "test" // content passed to gutil.template()
  }, reportOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
  }


	return gulp.src('*.tex')
    .pipe(exec('/Library/TeX/texbin/pdflatex <%= file.path %>', options))
		.pipe(exec('mv *.log ./build', options))
		.pipe(exec('mv *.aux ./build', options))
		.pipe(exec('mv *.pdf ./build', options))
    .pipe(exec.reporter(reportOptions))
})

gulp.task('watch', function() {
	return gulp.watch('*.tex', ['latex'])
})

gulp.task('default', ['watch'], function() {
	console.log('Running')
})
