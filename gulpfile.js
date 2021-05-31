// Gulp.js configuration
const
    // modules
    gulp = require("gulp"),
    header = require("gulp-header"),
    htmlmin = require("gulp-htmlmin"),
    cssnano = require("gulp-cssnano"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify"),
    imagemin = require("gulp-imagemin"),
    pump = require("pump");

    // development mode?
    devBuild = (process.env.NODE_ENV !== "production"),

    // image processing
    gulp.task("images-min", function(cb) {
        pump([
            gulp.src("images/*"),
            imagemin({ optimizationLevel: 5 }),
            gulp.dest("dist/images/")
        ], cb);
    });

    // HTML processing
    gulp.task("html-min", function(cb) {
        pump([
            gulp.src("index.html"),
            htmlmin({
                collapseWhitespace: true,
                conservativeCollapse: true
            }),
            header("<!-- To see the unminified version visit https://github.com/oskarwilczynski/portfolio-site/blob/master/index.html -->\n\n"),
            gulp.dest("dist/")
        ], cb);
    });

    // CSS processing
    gulp.task("css-min", function(cb) {
        pump([
            gulp.src("styles/main.scss"),
            sass(),
            autoprefixer(),
            cssnano(),
            header("/* To see the unminified version visit https://github.com/oskarwilczynski/portfolio-site/blob/master/styles/main.scss */\n\n"),
            gulp.dest("dist/styles/")
        ], cb);
    });

    // JS + Babel processing
    gulp.task("js-min", function(cb) {
        pump([
            gulp.src("scripts/main.js"),
            babel({presets: ["@babel/preset-env"]}),
            uglify(),
            header("// To see the unminified version visit https://github.com/oskarwilczynski/portfolio-site/blob/master/scripts/main.js\n\n"),
            gulp.dest("dist/scripts/")
        ], cb);
    });

    gulp.task("img-min", function(cb) {
        pump([
            gulp.src("images/*"),
            imagemin(),
            gulp.dest('dist/images/')
        ], cb);
    })

    // run all tasks
    gulp.task("min-all", gulp.parallel("html-min", "css-min", "js-min"));

;
