"use strict";

const $ = require("jquery");

angular.module("inkmap").directive("ngScript", () => {
    return {
        link: function (scope, element, attrs) {
            $.getScript(attrs.ngScript);
        }
    };
});