"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var PORT = process.env.PORT || 4800;
var server = app_1["default"].listen(PORT, function () { return console.log("[+] The dz-api is running on port " + PORT); });
exports["default"] = server;
