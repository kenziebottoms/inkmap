"use strict";

const $ = require("jquery");

angular.module("inkmap").directive("ngScript", () => {
    return {
        link: function (scope, element, attrs) {
            $.getScript(attrs.ngScript);
        }
    };
});

// reference: https://stackoverflow.com/questions/17470790/how-to-use-a-keypress-event-in-angularjs
angular.module("inkmap").directive("ngEnter", function () {
    return {
        link: function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        }
    };
});