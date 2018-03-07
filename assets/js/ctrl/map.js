"use strict";

angular.module("inkmap").controller("MapCtrl", function($scope, artists, MAPS) {
    $scope.artists = artists;
    $scope.script = `https://maps.googleapis.com/maps/api/js?key=${MAPS.apiKey}&callback=initMap`;
});