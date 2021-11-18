tasks = {
	autoprefixer: require('gulp-autoprefixer'),
	autoprefixer2: require('autoprefixer'),
	browserSync: require('browser-sync').create(),
	cleanCss: require('gulp-clean-css'),
	imagemin: require('gulp-imagemin'),
	include: require('posthtml-include'),
	gulp: require('gulp'),
	less: require('gulp-less'),
	path: require('path'),
	plumber: require('gulp-plumber'),
	postcss: require('gulp-postcss'),
	posthtml: require('gulp-posthtml'),
	rename: require('gulp-rename'),
	svgstore: require('gulp-svgstore'),
	watch: require('gulp-watch'),
	external: {
		config: require('./tasks/configuration.js')
	}
};

/*const gulp = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const autoprefixer2 = require('autoprefixer');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();*/

tasks.external.config.forEach(confPath => require(confPath)())

global.path = {
	build: {
		styles: './build/styles',
		images: './build/images',
		html: './build',
	},
	src: {
		styles: './src/styles/*.less',
		css: './src/css/*.css',
		images: './src/images/**/*.{jpg,png,svg}',
		img: './src/images/',
		html: './src/*.html',
		ht: './src'
	}
};

const configuration = {
	server: {
		baseDir: global.path.build.html
	}
};

exports.start = () => (
	tasks.browserSync.init(configuration),
	tasks.browserSync.reload(),
	this.stream()
);

exports.stream = () => (
	tasks.gulp.watch(global.path.src.styles, tasks.gulp.series('styles')),
	tasks.gulp.watch(global.path.src.images, tasks.gulp.series('images', 'sprite')),
	tasks.gulp.watch(global.path.src.html, tasks.gulp.series('html'))
);



