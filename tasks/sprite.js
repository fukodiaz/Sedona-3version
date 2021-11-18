module.exports = () => {
	tasks.gulp.task('sprite', sprite)
};

const sprite = () => (
	tasks.gulp.src(global.path.src.img + '*-foot.svg')
		.pipe(tasks.svgstore({
			ilineSvg: true
		}))
		.pipe(tasks.rename('sprite.svg'))
		.pipe(tasks.gulp.dest(global.path.src.img))
		.pipe(tasks.browserSync.stream())
);