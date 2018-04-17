import * as _ from "lodash";
import Issue from "./Issue";

export default class IssueHelper {
    private _issueList: Array<Issue> = [];

	constructor(reponse) {
        const that = this;
        that._issueList = [];
        _.forEach(reponse, function (value) {
            that._issueList.push(new Issue(value.iid, value.title, value.labels, value.web_url, value.author));
        });

	}

    public getIssueContainLabel(label: string): Array<Issue>  {
        let issueContainLabelList = [];
        _.forEach(this._issueList, function (element: Issue) {
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
	public get issueList(): Array<Issue> {
		return this._issueList;
	}

}