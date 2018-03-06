"use strict";

angular.module("inkmap").factory("AuthFactory", function ($q, $http) {

    // async retrieval of active user
    const getActiveUser = () => {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                } else {
                    reject();
                }
            });
        });
    };

    // async popup google login
    const logIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    };

    return { getActiveUser, logIn };
});