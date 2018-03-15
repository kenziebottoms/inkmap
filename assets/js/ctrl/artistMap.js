"use strict";

require("../../../dist/markerclusterer.js");

angular.module("inkmap").controller("ArtistMapCtrl", function ($scope, $rootScope, artists, NgMap, GOOGLE) {
    $scope.artists = artists;
    $scope.mapScript = `http://maps.google.com/maps/api/js?key=${GOOGLE.apiKey}&libraries=places`;

    // google maps initialization
    let goldStar = {
        path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
        anchor: new google.maps.Point(130, 150),
        fillColor: 'yellow',
        fillOpacity: 0.8,
        scale: 0.13,
        strokeColor: 'gold',
        strokeWeight: 1
    };
    MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = 'assets/img/m';

    // $scope.artists => coords
    let artistInfo = Object.entries(artists);
    artistInfo = artistInfo.map(a => {
        a[1].key = a[0];
        return a[1];
    });

    // gets markers and clusters them
    let dynMarkers = [];
    NgMap.getMap().then(function (map) {
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

        // listen for non-point clicks
        google.maps.event.addListener(map, 'click', (event) => {

            $scope.activeLatLng = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            };

            // get rid of existing "You Are Here" marker
            if ($scope.activeMarker) {
                $scope.activeMarker.setMap(null);
            }
            // make a new one
            $scope.activeMarker = new google.maps.Marker({
                position: $scope.activeLatLng,
                icon: goldStar,
                map: map
            });
        });
    });

    $scope.click = () => {
        if (event.target.tagName == "H3") {
            $rootScope.$broadcast("focusArtist", event.target.id);
        }
    };
});