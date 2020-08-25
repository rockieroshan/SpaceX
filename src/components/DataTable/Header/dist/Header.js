"use strict";
exports.__esModule = true;
var React = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
require("./Header.scss");
var Header = function (_a) {
    var headers = _a.headers, onSorting = _a.onSorting;
    var _b = React.useState(''), sortingField = _b[0], setSortingField = _b[1];
    var _c = React.useState('asc'), sortingOrder = _c[0], setSortingOrder = _c[1];
    var onSortingChange = function (field) {
        var order = field === sortingField && sortingOrder === 'asc' ? 'desc' : 'asc';
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };
    return (React.createElement("thead", null,
        React.createElement("tr", null, headers.map(function (_a) {
            var name = _a.name, field = _a.field, sortable = _a.sortable;
            return (React.createElement("th", { key: name, onClick: function () { return (sortable ? onSortingChange(field) : null); } },
                name,
                sortingField && sortingField === field && (React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: sortingOrder === 'asc' ? 'arrow-down' : 'arrow-up' }))));
        }))));
};
exports["default"] = Header;
