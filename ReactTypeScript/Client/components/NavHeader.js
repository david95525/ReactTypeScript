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
exports.NavHeader = void 0;
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const NavHeader = () => (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "logo-containter" },
        React.createElement("a", { href: "#" },
            React.createElement("img", { src: "", className: "logo", alt: "Microlifelogo" }))),
    React.createElement("div", { className: "nav-container" },
        React.createElement(react_bootstrap_1.Navbar, { expand: "lg" },
            React.createElement(react_bootstrap_1.Navbar.Collapse, { id: "navbarScroll" },
                React.createElement(react_bootstrap_1.Nav, { className: "me-auto", navbarScroll: true },
                    React.createElement(react_bootstrap_1.Nav.Link, { href: "#Aboutus" }, "About us"),
                    React.createElement(react_bootstrap_1.Nav.Link, { href: "#FAQ" }, "FAQ "),
                    React.createElement(react_bootstrap_1.NavDropdown, { title: "Logout/Main", id: "navbarScrollingDropdown" },
                        React.createElement(react_router_dom_1.Link, { to: "/start", className: "nav-link" }, "main"))))))));
exports.NavHeader = NavHeader;
