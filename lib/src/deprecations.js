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
const assert = __importStar(require("assert"));
function default_1(cv) {
    // deprecate wrapper for the old calcHist API
    const _calcHist = cv.calcHist;
    cv.calcHist = function calcHist(img, histAxes, mask) {
        assert(img instanceof cv.Mat, 'Imgproc::CalcHist - Error: expected argument 0 to be of type Mat');
        assert(Array.isArray(histAxes), 'Imgproc::CalcHist - Error: expected argument 1 to be of type array of HistAxes');
        histAxes = histAxes.slice();
        let warningThrown = false;
        const len = histAxes.length;
        for (let i = 0; i < len; ++i) {
            const entry = histAxes[i];
            if (!(entry instanceof cv.HistAxes)) {
                if (!warningThrown) {
                    warningThrown = true;
                    console.warn(`Imgproc::CalcHist - Deprecated support for object in argument 1 at index ${i}. Please switch to using HistAxes instances.`);
                }
                histAxes[i] = new cv.HistAxes(entry);
            }
        }
        if (mask) {
            return _calcHist(img, histAxes, mask);
        }
        return _calcHist(img, histAxes);
    };
}
exports.default = default_1;
