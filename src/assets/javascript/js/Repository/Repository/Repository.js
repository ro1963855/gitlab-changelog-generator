"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repository = /** @class */ (function () {
    function Repository(id, name) {
        this._name = name;
        this._id = id;
    }
    Object.defineProperty(Repository.prototype, "name", {
        /**
         * Getter name
         * @return {string}
         */
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "id", {
        /**
         * Getter id
         * @return {string}
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return Repository;
}());
exports.default = Repository;
