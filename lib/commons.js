"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.isElectronWebpack = exports.resolvePath = void 0;
const path = __importStar(require("path"));
function resolvePath(filePath, file) {
    if (!filePath) {
        return '';
    }
    return (file ? path.resolve(filePath, file) : path.resolve(filePath)).replace(/\\/g, '/');
}
exports.resolvePath = resolvePath;
/**
  * detect if electron https://github.com/electron/electron/issues/2288
 */
function isElectronWebpack() {
    // return process.versions.hasOwnProperty('electron');
    // assume module required by webpack if no system path inv envs
    return !process.env.path
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        && global.window && global.window.process && global.window.process.type
        && global.navigator && ((global.navigator.userAgent || '').toLowerCase().indexOf(' electron/') > -1);
}
exports.isElectronWebpack = isElectronWebpack;
