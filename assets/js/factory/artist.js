"use strict";

angular.module("inkmap").factory("ArtistFactory", function($q, $http, FIREBASE) {
    const getArtists = () => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE.db}/artists.json`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));
        });
    };

    return {getArtists};
});