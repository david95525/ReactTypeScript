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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const React = __importStar(require("react"));
const cloudy_day_png_1 = __importDefault(require("./images/cloudy-day.png"));
const Home = () => (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "image-container" },
        React.createElement("div", { className: "font-top" },
            React.createElement("p", null,
                "Connected Health +",
                React.createElement("br", null),
                "Personal Health Record",
                React.createElement("br", null),
                " Platform"))),
    React.createElement("div", { className: "font-bottom" },
        React.createElement("p", { id: "p1", className: "text-center" }, "What is Connected Health +"),
        React.createElement("p", { id: "p2", className: "text-center" }, "Microlife Trend Tracl is a trusted place for people to gather,store,use and share health information online.")),
    React.createElement("div", { className: "steps" },
        React.createElement("a", { href: "#" },
            React.createElement("img", { src: cloudy_day_png_1.default, alt: "Image_step1" })),
        React.createElement("a", { href: "#" },
            React.createElement("img", { alt: "Image_step1" })),
        React.createElement("a", { href: "#" },
            React.createElement("img", { alt: "Image_step1" })),
        React.createElement("a", { href: "#" },
            React.createElement("img", { alt: "Image_step1" })))));
exports.Home = Home;
