"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectV4_1 = require("../Project/ProjectV4");
var ApiVersion4 = /** @class */ (function () {
    function ApiVersion4() {
        this._project = undefined;
        this._project = new ProjectV4_1.default();
    }
    ApiVersion4.prototype.getProject = function () {
        return this._project;
    };
    return ApiVersion4;
}());
exports.default = ApiVersion4;
