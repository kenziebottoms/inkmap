"use strict";

angular.module("inkmap").config(($stateProvider, $urlRouterProvider, MAPS) => {
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
                    controller: "ArtistMapCtrl",
                    templateUrl: "assets/partials/map.html"
                },
                "search@home": {
                    controller: "ArtistSearchCtrl",
                    templateUrl: "assets/partials/search.html"
                }
            }
        })
        .state("addArtist", {
            url: "/new",
            resolve: {
                user: (AuthFactory) => AuthFactory.authenticate()
            },
            views: {
                "": {
                    controller: "AddArtistCtrl",
                    templateUrl: "assets/partials/addArtist.html"
                }
            }
        });
    $urlRouterProvider.otherwise("/");
});