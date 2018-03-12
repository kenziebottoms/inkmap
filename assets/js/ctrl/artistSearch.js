"use strict";

angular.module("inkmap").controller("ArtistSearchCtrl", function($scope, $rootScope, ArtistFactory, GeocodeFactory) {
    ArtistFactory.getArtists()
        .then(artists => {
            $scope.artists = artists;
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

    $rootScope.$on("focusArtist", (event, data) => {
        if ($scope.results) {
            $scope.focusedArtist = $scope.artists[data];
        }
    });
});