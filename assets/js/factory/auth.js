"use strict";

angular.module("inkmap").factory("AuthFactory", function ($q, $http) {

    // async retrieval of active user
    const getActiveUser = () => {
        return $q((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    resolve(user);
                } else {
                    reject();
                }
            });
        });
    };

    const authenticate = () => {
        return $q((resolve, reject) => {
            getActiveUser()
                .then(user => {
                    resolve(user);
                })
                .catch(err => {
                    logIn()
                        .then(user => {
                            resolve(user);
                        })
                        .catch(err => reject(err));
                });
        });
    };

    // async popup google login
    const logIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    };

    return { getActiveUser, logIn, authenticate };
});