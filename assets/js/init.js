"use strict";

angular.module("inkmap").run((FIREBASE) => {
    let {apiKey, authDomain} = FIREBASE;
    firebase.initializeApp({apiKey, authDomain});
});