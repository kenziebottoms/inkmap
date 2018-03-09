"use strict";

require("../../../dist/markerclusterer.js");

angular.module("inkmap").controller("ArtistMapCtrl", function ($scope, artists, NgMap, GOOGLE) {
    $scope.artists = artists;
    $scope.mapScript = `http://maps.google.com/maps/api/js?key=${GOOGLE.apiKey}`;

    // $scope.artists => coords
    let markers = Object.entries(artists).map(a => [a[1].loc.lat, a[1].loc.lng]);
    markers = markers.map(a => {
        a = { position: a };
        return a;
    });

    // marker cluster image paths
    MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = 'assets/img/m';

    // gets markers and clusters them
    let dynMarkers = [];
    NgMap.getMap().then(function (map) {
        map.markers = [];
        for (let marker of markers) {
            var latLng = new google.maps.LatLng(marker.position[0], marker.position[1]);
            dynMarkers.push(new google.maps.Marker({ position: latLng }));
        }
        $scope.markerClusterer = new MarkerClusterer(map, dynMarkers, {});
    });
});