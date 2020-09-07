"use strict";
exports.__esModule = true;
var express = require("express");
var compression = require("compression");
var cors = require("cors");
var app = express();
app.use('*', cors());
app.use(compression());
app.use(express.json());
var routes_1 = require("./routes");
var docs = {
    "/api/w": "All wilayas.",
    "/api/w/{wilaya-code}": "Specific wilaya.",
    "/api/c": "All communes.",
    "/api/c/{wilaya-code}": "All communes of a specific wilaya.",
    "/api/all": "All wilayas with all their communes (more detailed).",
    "/api/all/{wilaya-code}": "A  Specific wilaya with all it's communes (more detailed).",
    "more infos": "check the source code: https://github.com/AM-77/dz-communes-api"
};
app.get("/", function (req, res) { res.status(200).send(docs); });
app.get('/favicon.ico', function (req, res) { res.status(204); });
app.use('/api', routes_1["default"]);
app.use(function (req, res, next) {
    var error = new Error('Not Found');
    next(error);
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500)
        .json({ message: err.message, method: err.method, url: err.url });
});
exports["default"] = app;
