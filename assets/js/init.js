"use strict";

angular.module("inkmap").run((FIREBASE, AuthFactory) => {
    let {apiKey, authDomain} = FIREBASE;
    firebase.initializeApp({apiKey, authDomain});
    AuthFactory.logIn()
        .then(response => console.log(response))
        .catch(err => console.log(err));
});