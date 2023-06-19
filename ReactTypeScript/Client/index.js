"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const home_1 = require("./components/home");
const navheader_1 = require("./components/navheader");
const APP = () => (React.createElement(React.Fragment, null,
    React.createElement(navheader_1.NavHeader, null),
    React.createElement(react_router_dom_1.HashRouter, null,
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/home", className: "nav-link" }, "\u9996\u9801"))),
        React.createElement(react_bootstrap_1.Container, { fluid: true },
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: "/home", element: React.createElement(home_1.Home, null) })))))));
react_dom_1.render(React.createElement(APP, null), document.getElementById('root'));
