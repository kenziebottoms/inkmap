"use strict";

angular.module("inkmap").controller("SearchCtrl", function($scope, ArtistFactory) {
    ArtistFactory.getArtists()
        .then(artists => {
            $scope.results = Object.values(artists);
        });
});