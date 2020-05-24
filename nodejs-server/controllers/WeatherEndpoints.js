'use strict';

var utils = require('../utils/writer.js');
var WeatherEndpoints = require('../service/WeatherEndpointsService');

module.exports.getWeather = function getWeather (req, res, next, zip, units, q, id, lat, lon, lang, mode) {
  WeatherEndpoints.getWeather(zip, units, q, id, lat, lon, lang, mode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
