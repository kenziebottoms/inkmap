"use strict";

require("../../../dist/markerclusterer.js");

angular.module("inkmap").controller("ArtistMapCtrl", function ($scope, $rootScope, artists, NgMap, GOOGLE) {
    $scope.artists = artists;
    $scope.mapScript = `http://maps.google.com/maps/api/js?key=${GOOGLE.apiKey}&libraries=places`;

    // $scope.artists => coords
    let artistInfo = Object.entries(artists);
    artistInfo = artistInfo.map(a => {
        a[1].key = a[0];
        return a[1];
    });

    // marker cluster image paths
    MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = 'assets/img/m';

    // gets markers and clusters them
    let dynMarkers = [];
    NgMap.getMap().then(function (map) {
        map.markers = [];
        for (let artist of artistInfo) {
            var latLng = new google.maps.LatLng(artist.loc.lat, artist.loc.lng);
            let marker = new google.maps.Marker({ position: latLng, title: artist.name });
            let info = new google.maps.InfoWindow({
                content: `<h3 id="${artist.key}">${artist.name}</h3><p>${artist.tags.join(", ")}`
            });
            marker.addListener('click', () => {
                info.open(map, marker);
            });
            dynMarkers.push(marker);
        }
        $scope.markerClusterer = new MarkerClusterer(map, dynMarkers, {});
    });

    $scope.click = () => {
        if (event.target.tagName == "H3") {
            $rootScope.$broadcast("focusArtist", event.target.id);
        }
    };
});