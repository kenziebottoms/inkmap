"use strict";

angular.module("inkmap").controller("AddArtistCtrl", function ($scope, GOOGLE, ArtistFactory) {
    $scope.mapScript = `http://maps.google.com/maps/api/js?key=${GOOGLE.apiKey}&libraries=places`;

    $scope.change = function() {
        let place = this.getPlace();
        $scope.lat = place.geometry.location.lat();
        $scope.lng = place.geometry.location.lng();
    };
    $scope.add = (lat, lng) => {
        $scope.artist.loc = {lat, lng};
        if ($scope.tags) {
            $scope.artist.tags = $scope.tags.split(",").map(w => w.trim());
        } else {
            $scope.artist.tags = [];
        }
        ArtistFactory.addArtist($scope.artist)
            .then(response => {
                $scope.err = "";
            })
            .catch(err => {
                $scope.err = err;
            });
    };
});