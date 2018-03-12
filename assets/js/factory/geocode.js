"use strict";

const _ = require("lodash");

angular.module("inkmap").factory("GeocodeFactory", function($q, $http, GOOGLE) {
    const reverseGeocode = (lat, lng) => {
        return $q((resolve, reject) => {
            $http.get(`${GOOGLE.GEOCODE.url}?latlng=${lat},${lng}&key=${GOOGLE.apiKey}`)
                .then(({data: {results}}) => {
                    if (results[0]) {
                        let addressComponents = results[0].address_components;
                        let state = addressComponents.find(a => a.types.includes("administrative_area_level_1"));
                        let country = addressComponents.find(a => a.types.includes("country"));
                        resolve(`${state.long_name}, ${country.long_name}`);
                    } else {
                        reject("no results or maybe you've over-api'd");
                    }
                })
                .catch(err => reject(err));
        });
    };
    return { reverseGeocode };
});