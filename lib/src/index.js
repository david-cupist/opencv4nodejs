"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const drawUtils_js_1 = __importDefault(require("./drawUtils.js"));
const deprecations_js_1 = __importDefault(require("./deprecations.js"));
const misc_js_1 = __importDefault(require("./misc.js"));
function default_1(cv) {
    // add functions
    (0, drawUtils_js_1.default)(cv);
    // add functions
    (0, misc_js_1.default)(cv);
    (0, deprecations_js_1.default)(cv);
    return cv;
}
exports.default = default_1;
