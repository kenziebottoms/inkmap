"use strict";

angular.module("inkmap").config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "assets/partials/home.html",
            controller: "HomeCtrl",
            resolve: {
                user: (AuthFactory) => AuthFactory.authenticate()
            }
        });
});