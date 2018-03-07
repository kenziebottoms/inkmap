"use strict";

angular.module("inkmap").config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("home", {
            url: "/",
            resolve: {
                user: (AuthFactory) => AuthFactory.authenticate(),
                artists: (ArtistFactory) => ArtistFactory.getArtists()
            },
            views: {
                "" : {
                    controller: "HomeCtrl",
                    templateUrl: "assets/partials/home.html"
                },
                "map@home" : {
                    controller: "MapCtrl",
                    templateUrl: "assets/partials/map.html"
                }
            }
        });
});