"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var compression = require("compression");
var cors = require("cors");
var app = express();
app.use('*', cors());
app.use(compression());
app.use(express.json());
var routes_1 = require("./routes");
app.get('/', function (req, res) { res.send({ message: "Check the documentation on https://github.com/AM-77/dz-communes-api#readme" }); });
app.get('/favicon.ico', function (req, res) { res.status(204); });
app.use('/api', routes_1.default);
app.use(function (req, res, next) {
    var error = new Error('Not Found');
    next(error);
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500)
        .json({ message: err.message, method: err.method, url: err.url });
});
exports.default = app;
//# sourceMappingURL=app.js.map