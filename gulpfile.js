const gulp = require('gulp');
const eslint = require('gulp-eslint');
const minify = require('gulp-minify');
const size = require('gulp-size');
const notify = require('gulp-notify');

const paths = {
	dist: 'dist',
	distIndex: 'dist/index.js',
	distJS: 'dist/**/*.js',
};

gulp.task('default', ['lint'], () => {
	//  gulp.watch('js/**/*.js')
});

gulp.task('lint', () => gulp.src(['**/*.js', '!node_modules/**'])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError()));

gulp.task('compress', () => {
	gulp.src(['**/*.js'])
		.pipe(minify({
			ignoreFiles: ['node_modules/**', '.env', 'README.md', 'swagger.json'],
		}))
		.pipe(gulp.dest(paths.dist)).pipe(notify({
			onLast: true,
			message: () => 'finished compression',
		}));
});

gulp.task('sizes', () => gulp.src('**/*.js')
	.pipe(size({ showTotal: true, pretty: true })));
