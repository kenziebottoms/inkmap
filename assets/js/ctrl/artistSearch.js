"use strict";

angular.module("inkmap").controller("ArtistSearchCtrl", function($scope, ArtistFactory, GeocodeFactory) {
    ArtistFactory.getArtists()
        .then(artists => {
            $scope.results = Object.values(artists);
            return Promise.all(Object.values(artists).map(a => {
                return GeocodeFactory.reverseGeocode(a.loc.lat, a.loc.lng);
            }));
        })
        .then(response => {
            $scope.results.map((r, index) => {
                $scope.results[index].locale = response[index];
            });
        });
});