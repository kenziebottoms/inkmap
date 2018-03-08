"use strict";

angular.module("inkmap", ['ui.router', 'ngMap']);

require("./router");
require("./keys");
require("./directives");

require("./ctrl/home");
require("./ctrl/map");
require("./ctrl/search");

require("./factory/auth");
require("./factory/artist");
require("./factory/geocode");

require("./init");