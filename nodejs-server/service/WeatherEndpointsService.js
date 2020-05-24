'use strict';


/**
 * weather
 * Access current weather data for any location on Earth including over 200,000 cities! Current weather is frequently updated based on global models and data from more than 40,000 weather stations.
 *
 * zip String **Zip code**. Search by zip code. *Example: 95050,us*. Please note that if the country is not specified, the search uses USA as a default. (optional)
 * units String **Units**. *Example: imperial*. Possible values: `standard`, `metric`, and `imperial`. When you do not use the `units` parameter, the format is `standard` by default. (optional)
 * q String **City name**. *Example: London*. You can call by city name, or by city name and country code. The API responds with a list of results that match a searching word. For the query value, type the city name and optionally the country code divided by a comma; use ISO 3166 country codes. (optional)
 * id String **City ID**. *Example: `2172797`*. You can call by city ID. The API responds with the exact result. The List of city IDs can be downloaded [here](http://bulk.openweathermap.org/sample/). You can include multiple cities in this parameter — just separate them by commas. The limit of locations is 20. *Note: A single ID counts as a one API call. So, if you have city IDs, it’s treated as 3 API calls.* (optional)
 * lat String **Latitude**. *Example: 35*. The latitude coordinate of the location of your interest. Must use with `lon`. (optional)
 * lon String **Longitude**. *Example: 139*. Longitude coordinate of the location of your interest. Must use with `lat`. (optional)
 * lang String **Language**. *Example: en*. You can use lang parameter to get the output in your language. We support the following languages that you can use with the corresponded lang values: Arabic - `ar`, Bulgarian - `bg`, Catalan - `ca`, Czech - `cz`, German - `de`, Greek - `el`, English - `en`, Persian (Farsi) - `fa`, Finnish - `fi`, French - `fr`, Galician - `gl`, Croatian - `hr`, Hungarian - `hu`, Italian - `it`, Japanese - `ja`, Korean - `kr`, Latvian - `la`, Lithuanian - `lt`, Macedonian - `mk`, Dutch - `nl`, Polish - `pl`, Portuguese - `pt`, Romanian - `ro`, Russian - `ru`, Swedish - `se`, Slovak - `sk`, Slovenian - `sl`, Spanish - `es`, Turkish - `tr`, Ukrainian - `ua`, Vietnamese - `vi`, Chinese Simplified - `zh_cn`, Chinese Traditional - `zh_tw`. (optional)
 * mode String **Mode*. *Example: html. Determines the format of the response. Possible values are `json`, `xml`, and `html`. If the mode parameter is empty, the format is `json` by default. (optional)
 * returns inline_response_200
 **/
exports.getWeather = function(zip,units,q,id,lat,lon,lang,mode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "visibility" : 16093,
  "timezone" : -28800,
  "main" : {
    "temp" : 29325,
    "temp_min" : 289.82,
    "humidity" : 83,
    "pressure" : 83,
    "feels_like" : 41.16,
    "temp_max" : 295.37
  },
  "clouds" : {
    "all" : 51
  },
  "sys" : {
    "country" : "AU",
    "sunrise" : 1435610796,
    "sunset" : 1435650870,
    "id" : 1,
    "type" : 1
  },
  "dt" : 1435658272,
  "coord" : {
    "lon" : 145.77,
    "lat" : -16.92
  },
  "name" : "Cairns",
  "weather" : [ {
    "icon" : "04n",
    "description" : "broken clouds",
    "main" : "clouds",
    "id" : 0.8008281904610115
  }, {
    "icon" : "04n",
    "description" : "broken clouds",
    "main" : "clouds",
    "id" : 0.8008281904610115
  } ],
  "cod" : 200,
  "id" : 2172797,
  "wind" : {
    "deg" : 150,
    "speed" : 5.1
  },
  "base" : "cmc stations"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

