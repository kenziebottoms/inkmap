"use strict";

angular.module("inkmap").controller("AddArtistCtrl", function ($scope, GOOGLE) {
    $scope.mapScript = `http://maps.google.com/maps/api/js?key=${GOOGLE.apiKey}&libraries=places&callback=initialize`;

    let autocomplete;
    $scope.initialize = () => {
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById("newLocation"))
        );
    };
    $scope.change = function() {
        let place = this.getPlace();
        $scope.lat = place.geometry.location.lat();
        $scope.lng = place.geometry.location.lng();
    };
});