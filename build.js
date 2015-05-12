var NwBuilder = require('node-webkit-builder');
var nw = new NwBuilder({
    buildDir: 'dist',
    files: ['package.json'],
    platforms: ['win64', 'osx64'],
    macIcns: 'fbm.icns',
    macZip: true,
    version: '0.12.1',
    winIco: 'fbm.ico'
});

// Log stuff you want
nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});

