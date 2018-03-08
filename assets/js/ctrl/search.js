"use strict";

angular.module("inkmap").controller("SearchCtrl", function($scope, ArtistFactory) {
    $scope.search = () => {
        ArtistFactory.getArtists()
            .then(artists => {
                $scope.results = artists;
            });
    };
});