Package.describe({
    summary: "zencoder npm packaged for meteor"
});

Package.on_use(function (api) {
    //api.use('jquery', 'client');
    api.add_files([
        'lib/zencoder.js'
    ], 'server'
    );

});
Npm.depends({'zencoder':"0.0.3"});