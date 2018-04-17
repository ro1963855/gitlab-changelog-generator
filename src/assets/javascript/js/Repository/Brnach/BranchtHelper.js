"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Branch_1 = require("../Brnach/Branch");
var _ = require("lodash");
var BranchtHelper = /** @class */ (function () {
    function BranchtHelper() {
    }
    BranchtHelper.prototype.buildBranchList = function (reponse) {
        var that = this;
        _.forEach(reponse, function (value) {
            that._branchList.push(new Branch_1.default(reponse.name));
        });
    };
    return BranchtHelper;
}());
exports.default = BranchtHelper;
