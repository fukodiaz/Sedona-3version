/*const { task } = require("gulp");*/

module.exports = () => {
	tasks.gulp.task('styles', styles)
};

const styles = () => (
	tasks.gulp.src(global.path.src.styles)
		/*.pipe(tasks.plumber())*/
		.pipe(tasks.less({
			paths: [tasks.path.join(global.path.src.styles, 'less', 'includes')]
		}))
		/*.pipe(tasks.postcss([
			tasks.autoprefixer2({ browsers: ['last 2 version'] })
		])) */
		.pipe(tasks.autoprefixer({
			cascade: false,
			browsers: ['last 2 version']
		}))
		.pipe(tasks.gulp.dest(global.path.build.styles))
		.pipe(tasks.cleanCss({ compatibility: 'ie8' }))
		.pipe(tasks.rename("style-min.css"))
		.pipe(tasks.gulp.dest(global.path.build.styles))
		.pipe(tasks.browserSync.stream())
);
