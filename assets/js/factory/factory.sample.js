"use strict";

angular.module("appName").factory("Factory", function($q, $http) {
    let getData = () => {
        return $q((resolve, reject) => {
            $http.get("/assets/js/data/assets.json")
                .then(response => resolve(response))
                .catch(err => reject(err));
        });
    };

    return { getData };
});