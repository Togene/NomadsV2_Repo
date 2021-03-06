const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const path = require('path')
const livereload = require("livereload")
const connectLiveReload = require("connect-livereload");

// crud data loaders
app.use(bodyParser.json());
app.use(connectLiveReload());
require('./meta/IO/routes/data.routes.js')(app)

app.use(express.static(__dirname+ '/public'))
app.use('/build', express.static(path.join(__dirname, 'node_modules/three/build')))
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')))
//!---------------------- custom modules ----------------------!//
app.use('/public/', express.static(path.join(__dirname, 'public/')))
app.use('/meta/', express.static(path.join(__dirname, 'meta')))
app.use('/core/', express.static(path.join(__dirname, 'custom_modules/core')))
app.use('/nomads/', express.static(path.join(__dirname, 'custom_modules/nomads')))
app.use('/nomads/components', express.static(path.join(__dirname, 'custom_modules/nomads/components'))) 
app.use('/core/physics/', express.static(path.join(__dirname, 'custom_modules/core/physics')))
app.use('/core/input/', express.static(path.join(__dirname, 'custom_modules/core/input')))
app.use('/core/math/', express.static(path.join(__dirname, 'custom_modules/core/math')))
app.use('/core/data/', express.static(path.join(__dirname, 'custom_modules/core/data')))
app.use('/core/geometry/', express.static(path.join(__dirname, 'custom_modules/core/geometry')))
app.use('/core/data/instance_geometry', express.static(path.join(__dirname, 'custom_modules/core/data/instance_geometry')))
//!---------------------- custom modules ----------------------!//

const publicDirectory = path.join(__dirname+ '/public')
var liveReloadServer = livereload.createServer()
liveReloadServer.watch(publicDirectory);

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.listen(3000, function() {
    console.log('Visit http://127.0.0.1:3000')
})
