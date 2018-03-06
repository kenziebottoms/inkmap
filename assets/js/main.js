"use strict";

angular.module("inkmap", ['ui.router']);

require("./router");
require("./keys");

require("./ctrl/home");
require("./factory/auth");

require("./init");