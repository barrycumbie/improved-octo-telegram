// const app = require("./backend/app");

const debug = require("debug")("node-angular");
const http = require("http");
const path = require('path');

const express = require('express');
const app = express();

console.log('serving node, expressive');

// app.use(express.static('./dist/mean-app'));
app.use(express.static(__dirname + '/dist/mean-app'));


app.get('/', function(req, res) {
    // res.send('this be a test');
    console.log('in the app slash to get endpoint');
    //res.sendFile('index.html', { root: './dist/mean-app' });
    // res.sendSendFile('index.html', { root: './dist/mean-app' });
    res.sendFile(path.join(__dirname + '/dist/index.html'));

});

const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);

server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
console.log("app listening at http://%s:%s", server.address().address, port)