"use strict";

const _ = require("lodash");

angular.module("inkmap").factory("ArtistFactory", function($q, $http, FIREBASE, $location) {
    const getArtists = () => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE.db}/artists.json`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));
        });
    };

    const addArtist = ({name, email, tags, loc, insta}) => {
        return $q((resolve, reject) => {
            searchArtists("name", name)
                .then(artists => {
                    if (artists) {
                        return reject("Duplicate artist.");
                    } else {
                        tags = tags.filter(t => t);
                        console.log(tags);
                        $http.post(`${FIREBASE.db}/artists.json`,{name, email, tags, loc, insta})
                            .then(response => {
                                if (response.status == 200) {
                                    $location.path("/");
                                }
                            })
                            .catch(err => console.log(err));
                    }
                })
                .catch(err => console.log(err));
        });
    };

    const searchArtists = (property, term) => {
        return $q((resolve, reject) => {
            getArtists()
                .then(artists => {
                    resolve(_.find(artists, [property, term]));
                });
        });
    };

    const getArtist = key => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE.db}/artists/${key}.json`)
                .then(({data}) => {
                    resolve(data);
                })
                .catch(err => reject(err));
        });
    };

    return {getArtists, addArtist, getArtist};
});