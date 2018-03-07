"use strict";

angular.module("inkmap", ['ui.router']);

require("./router");
require("./keys");
require("./directives");

require("./ctrl/home");
require("./ctrl/map");

require("./factory/auth");
require("./factory/artist");

require("./init");