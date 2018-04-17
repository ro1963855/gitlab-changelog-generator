import * as _ from "lodash";
import Issue from "./Issue";
export default class IssueHelper {
    constructor(reponse) {
        this._issueList = [];
        const that = this;
        that._issueList = [];
        _.forEach(reponse, function (value) {
            that._issueList.push(new Issue(value.iid, value.title, value.labels, value.web_url, value.author));
        });
    }
    getIssueContainLabel(label) {
        let issueContainLabelList = [];
        _.forEach(this._issueList, function (element) {
            if (_.indexOf(element.labels, label) !== -1) {
                issueContainLabelList.push(element);
            }
        });
        return issueContainLabelList;
    }
    /**
     * Getter issueList
     * @return {Array<Issue>}
     */
    get issueList() {
        return this._issueList;
    }
}
