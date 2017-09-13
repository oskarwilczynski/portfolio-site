// Gulp.js configuration
const
    // modules
    gulp = require("gulp"),
    newer = require("gulp-newer"),
    imagemin = require("gulp-imagemin"),
    header = require("gulp-header"),
    htmlmin = require("gulp-htmlmin"),
    cssnano = require("gulp-cssnano"),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify"),
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
            htmlmin({collapseWhitespace: true}),
            header("<!-- To see the unminified version visit https://github.com/oskarwilczynski/portfolio-site/blob/master/index.html -->\n\n"),
            gulp.dest("dist/")
        ], cb);
    });

    // CSS processing
    gulp.task("css-min", function(cb) {
        pump([
            gulp.src("styles/main.css"),
            cssnano(),
            header("/* To see the unminified version visit https://github.com/oskarwilczynski/portfolio-site/blob/master/styles/main.css */\n\n"),
            gulp.dest("dist/styles/")
        ], cb);
    });

    // JS + Babel processing
    gulp.task("js-min", function(cb) {
        pump([
            gulp.src("scripts/main.js"),
            babel({presets: ["env"]}),
            uglify(),
            header("// To see the unminified version visit https://github.com/oskarwilczynski/portfolio-site/blob/master/scripts/main.js\n\n"),
            gulp.dest("dist/scripts/")
        ], cb);
    });

    // run all tasks
    gulp.task("min-all", ["html-min", "css-min", "js-min"]);

;
