"use strict";

angular.module("inkmap")
    .constant("FIREBASE", {
        db: "https://inkmap-a0ed0.firebaseio.com",
        apiKey: "AIzaSyBi386GLoJ3acEQdGWBb3J0ONkEB7VKe6c",
        authDomain: "inkmap-a0ed0.firebaseapp.com",
    })
    .constant("MAPS", {
        apiKey: "AIzaSyDrHGfvisSKQ6WtBNnjCmV14eUzFEjpGdw"
    })
    .constant("GEOCODE", {
        url: "https://maps.googleapis.com/maps/api/geocode/json",
        apiKey: "AIzaSyBAhm7HGM77ClBfP8qpYIwt06Oi6kVTAXU"
    });