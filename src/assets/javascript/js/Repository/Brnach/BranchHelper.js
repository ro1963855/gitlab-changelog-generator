import * as _ from "lodash";
import Branch from "./Branch";
export default class BranchHelper {
    constructor() {
        this._branchList = [];
    }
    buildBranchList(reponse) {
        const that = this;
        that._branchList = [];
        _.forEach(reponse, function (value) {
            that._branchList.push(new Branch(value.commit.id, value.name));
        });
    }
    getAllBranchOptions() {
        const that = this;
        let branchOptions = [];
        _.forEach(this._branchList, function (element) {
            branchOptions.push({ id: element.id, name: element.name });
        });
        return branchOptions;
    }
}
