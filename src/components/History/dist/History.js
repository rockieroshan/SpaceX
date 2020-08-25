"use strict";
exports.__esModule = true;
var React = require("react");
var historyActions_1 = require("../../state/history/historyActions");
var index_1 = require("../DataTable/index");
var useLoader_1 = require("../../hooks/useLoader");
require("./History.scss");
var react_redux_1 = require("react-redux");
// npm i react-bootstrap-validation-fixed
// npm i react-bootstrap-validation-fixed
// npm i react-bootstrap-validation-fixed
// npm i react-bootstrap-validation-fixed
var History = function () {
    var _a = useLoader_1["default"](), loader = _a[0], showLoader = _a[1], hideLoader = _a[2];
    var _b = React.useState(0), totalItems = _b[0], setTotalItems = _b[1];
    var _c = React.useState(1), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = React.useState(''), search = _d[0], setSearch = _d[1];
    var _e = React.useState({ field: '', order: '' }), sorting = _e[0], setSorting = _e[1];
    var dispatchHistory = react_redux_1.useDispatch();
    var ITEMS_PER_PAGE = 50;
    var historyRespData = react_redux_1.useSelector(function (_a) {
        var history = _a.history;
        return ({
            historyRespData: history.data
        });
    }).historyRespData;
    React.useEffect(function () {
        showLoader;
        dispatchHistory(historyActions_1.fetchHistoryRequest());
        hideLoader;
    }, [historyActions_1.fetchHistoryRequest]);
    var headers = [
        { name: 'Date of Event', field: 'event_date_utc', sortable: false },
        { name: 'Description', field: 'details', sortable: true },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "history_container" },
            React.createElement("div", { className: "pagination" },
                React.createElement(index_1.Pagination, { total: totalItems, itemsPerPage: ITEMS_PER_PAGE, currentPage: currentPage, onPageChange: function (page) { return setCurrentPage(page); } })),
            React.createElement("div", { className: "wrap-table" },
                React.createElement("table", null,
                    React.createElement(index_1.TableHeader, { headers: headers, onSorting: function (field, order) {
                            return setSorting({ field: field, order: order });
                        } }),
                    React.createElement("tbody", null, historyRespData &&
                        historyRespData.map(function (history) { return (React.createElement("tr", null,
                            React.createElement("th", { scope: "row", key: history.id }, history.id),
                            React.createElement("td", null, history.title))); }))))),
        loader));
};
exports["default"] = History;
