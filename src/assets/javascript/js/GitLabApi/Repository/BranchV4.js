"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BranchV4 = /** @class */ (function () {
    function BranchV4() {
    }
    BranchV4.prototype.listRepositoryBranches = function (id) {
        return "/projects/" + id + "/repository/branches";
    };
    return BranchV4;
}());
exports.default = BranchV4;
