module.exports = () => {
	tasks.gulp.task('images', images)
}

const images = () => (
	tasks.gulp.src(global.path.src.images)
		.pipe(tasks.imagemin([
			tasks.imagemin.optipng({ optimizationLevel: 3 }),
			tasks.imagemin.mozjpeg({ quality: 75, progressive: true }),
			tasks.imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		]))
		.pipe(tasks.gulp.dest(global.path.build.images))
		.pipe(tasks.browserSync.stream())
)