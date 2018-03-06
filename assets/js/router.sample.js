"use strict";

angular.module("appName").config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "assets/partials/home.html",
            controller: "HomeCtrl"
        });
});