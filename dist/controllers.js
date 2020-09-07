"use strict";
exports.__esModule = true;
exports.getOne = exports.getAll = exports.getCommune = exports.getCommunes = exports.getWilaya = exports.getWilayas = void 0;
var dz = require("dz-communes");
var wilayas = dz.wilayas, communes = dz.communes, wilayas_communes = dz.wilayas_communes;
var getWilayas = function (req, res) { return res.send(wilayas); };
exports.getWilayas = getWilayas;
var getWilaya = function (req, res) {
    var code = req.params.code;
    ((parseInt(code) > 0) && (parseInt(code) < 49)) ? res.send(wilayas[(parseInt(code) - 1)]) : res.status(404).send({ message: 'Not found' });
};
exports.getWilaya = getWilaya;
var getCommunes = function (req, res) { return res.send(communes); };
exports.getCommunes = getCommunes;
var getCommune = function (req, res) {
    var code = req.params.code;
    ((parseInt(code) > 0) && (parseInt(code) < 49)) ? res.send(communes.filter(function (c) { return parseInt(c.wilayacode) === parseInt(code); })) : res.status(404).send({ message: 'Not found' });
};
exports.getCommune = getCommune;
var getAll = function (req, res) { return res.send(wilayas_communes); };
exports.getAll = getAll;
var getOne = function (req, res) {
    var code = req.params.code;
    ((parseInt(code) > 0) && (parseInt(code) < 49)) ? res.send(wilayas_communes[(parseInt(code) - 1)]) : res.status(404).send({ message: 'Not found' });
};
exports.getOne = getOne;
