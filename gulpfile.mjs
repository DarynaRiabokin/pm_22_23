import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import defaultSass from 'sass';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

const sass = gulpSass(defaultSass);

gulp.task('html', () => gulp.src('./src/*.html').pipe(gulp.dest('./dist')));
gulp.task('sass', () => (
    gulp.src('./src/sass/*.scss')
        .pipe(concat('styles.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
));
gulp.task('scripts', () => (
    gulp.src('./src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
));
gulp.task('imgs', () => (
    gulp.src('./src/images/*.+(jpg|jpeg|png|gif|avif|webp|svg)')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/images'))
));
gulp.task('watch', () => {
    gulp.watch('./src/*.html', gulp.series('html'));
    gulp.watch('./src/js/*.js', gulp.series('scripts'));
    gulp.watch('./src/sass/*.scss', gulp.series('sass'));
    gulp.watch('./src/images/*.+(jpg|jpeg|png|gif|avif|webp|svg)', gulp.series('imgs'));
});
gulp.task('default', gulp.series(['html', 'sass', 'scripts', 'imgs', 'watch']));
