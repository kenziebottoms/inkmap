"use strict";

angular.module("inkmap").controller("ArtistSearchCtrl", function($scope, $rootScope, ArtistFactory, GeocodeFactory) {
    ArtistFactory.getArtists()
        .then(artists => {
            for (let a in artists) {
                artists[a].insta_handle = artists[a].insta.split("/")[3];
                artists[a].key = a;
            }
            $scope.results = Object.values(artists);
            return Promise.all(Object.values(artists).map(a => {
                return GeocodeFactory.reverseGeocode(a.loc.lat, a.loc.lng);
            }));
        })
        .then(response => {
            $scope.results.map((r, index) => {
                $scope.results[index].locale = response[index];
            });
        })
        .catch(err => {
            console.log(err);
        });

    $rootScope.$on("focusArtist", (event, data) => {
        if ($scope.results) {
            $scope.focusedArtist = $scope.artists.find(a => a.key == data);
        }
    });
    $rootScope.$on("centerOn", (event, {lat, lng}) => {
        $scope.results = ArtistFactory.sortByDistanceFrom($scope.results, lat, lng);
    });
});