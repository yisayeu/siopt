var gulp = require('gulp'),
    exec = require('child_process').exec,
    argv = require('yargs').argv;

gulp.task('copy', function () {
    // almond
    gulp.src('bower_components/almond/almond.js')
        .pipe(gulp.dest('web/app/vendor/almond'));

    // requirejs
    gulp.src('bower_components/requirejs/require.js')
        .pipe(gulp.dest('web/app/vendor/requirejs'));

    // rjs
    gulp.src('bower_components/rjs/dist/r.js')
        .pipe(gulp.dest('.'));
});

gulp.task('rjs', function (cb) {
    var env = argv.env ? argv.env : 'dev',
        cmd = [
            'php bin/console cache:clear --env=' + env,
            // 'php bin/console assets_version:increment --env=' + env,
            // 'php bin/console assetic:dump --env=' + env,
            'php bin/console assets:install --env=' + env,
            'node r.js -o web/app/app.build.js'
        ];

    exec(cmd.join(' && '), function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('build', ['copy', 'rjs']);
gulp.task('default', ['build']);