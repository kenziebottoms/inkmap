"use strict";

angular.module("inkmap").controller("MapCtrl", function($scope, artists, NgMap, MAPS) {
    $scope.artists = artists;
    $scope.mapScript = `http://maps.google.com/maps/api/js?key=${MAPS.apiKey}`;

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
});