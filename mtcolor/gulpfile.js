/// <binding BeforeBuild='default' AfterBuild='default' Clean='default' ProjectOpened='default' />
const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');


function css() {
    return src('static/css/*.less')
        .pipe(less())
        .pipe(dest('static/css/'));
}

exports.default = parallel(css);

