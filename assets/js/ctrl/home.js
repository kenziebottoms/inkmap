"use strict";

angular.module("inkmap").controller("HomeCtrl", function($scope, user, ArtistFactory) {
    $scope.user = user;
    ArtistFactory.getArtists()
        .then(artists => {
            $scope.artists = artists;
        })
        .catch(err => console.log(err));
});