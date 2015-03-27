var NwBuilder = require('node-webkit-builder');
var nw = new NwBuilder({
    buildDir: 'dist',
    files: ['package.json', 'index.html', 'stage.css', 'stage.js', 'node_modules/jquery/**'],
    platforms: ['win64', 'osx64']
    //winIco: 'res/slack.ico'
});

// Log stuff you want
nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});

