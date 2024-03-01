"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const promisify_js_1 = __importDefault(require("./promisify.js"));
// import extendWithJsSources from './src';
const cvloader_js_1 = require("./cvloader.js");
function loadOpenCV(opt) {
    const cvBase = (0, cvloader_js_1.getOpenCV)(opt);
    if (!cvBase.accumulate) {
        throw Error('failed to load opencv basic accumulate not found.');
    }
    if (!cvBase.blur) {
        throw Error('failed to load opencv basic blur not found.');
    }
    // promisify async methods
    let cvObj = (0, promisify_js_1.default)(cvBase);
    //   cvObj = extendWithJsSources(cvObj);
    // add xmodules alias if not present (moved to C++ part)
    // if (!cvObj.xmodules && cvObj.modules)
    //  cvObj.xmodules = cvObj.modules
    return cvObj;
}
const cv = loadOpenCV({ prebuild: 'latestBuild' });
const defExport = { cv };
// duplicate all export for retro-compatibility
for (const key in cv) {
    defExport[key] = cv[key];
}
defExport['cv'] = cv;
module.exports = defExport;
