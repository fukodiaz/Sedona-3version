module.exports = () => {
	tasks.gulp.task('html', html)
}

const html = () => (
	tasks.gulp.src(global.path.src.html)
		/*.pipe(tasks.posthtml([
			tasks.include({
				encoding: 'utf8'
			})
		]))
		.pipe(tasks.gulp.dest(global.path.src.ht))*/
		.pipe(tasks.gulp.dest(global.path.build.html))
		.pipe(tasks.browserSync.stream())
)