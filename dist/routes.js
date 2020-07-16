"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dzRouter = express.Router();
var controllers_1 = require("./controllers");
dzRouter.get("/w", controllers_1.getWilayas);
dzRouter.get("/w/:code", controllers_1.getWilaya);
dzRouter.get("/c", controllers_1.getCommunes);
dzRouter.get("/c/:code", controllers_1.getCommune);
dzRouter.get("/all", controllers_1.getAll);
dzRouter.get("/all/:code", controllers_1.getOne);
exports.default = dzRouter;
//# sourceMappingURL=routes.js.map