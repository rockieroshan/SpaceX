"use strict";
exports.__esModule = true;
var React = require("react");
require("./App.scss");
var History_1 = require("../History/History");
var Launches_1 = require("../Launches/Launches");
var App = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(History_1["default"], null),
        React.createElement(Launches_1["default"], null)));
};
exports["default"] = App;
