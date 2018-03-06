"use strict";

angular.module("inkmap").controller("HomeCtrl", function($scope, AuthFactory) {
    AuthFactory.getActiveUser()
        .then(user => {
            $scope.user = user;
        })
        .catch(err => {
            AuthFactory.logIn();
        });
});