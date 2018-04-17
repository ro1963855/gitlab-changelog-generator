import * as _ from "lodash";

export default class LogAnalyzer {
    private _issueNumberList: Array<string> = [];

    constructor(commitMessages: Array<string>) {
        this._issueNumberList = this.getIssueNumberFromCommitMessages(commitMessages);
    }

    private getIssueNumberFromCommitMessages(commitMessages: Array<string>): Array<string> {
        let issueNumberSet = new Set();
        const that = this;
        _.forEach(commitMessages, function (message) {
            const addIssueNumberList = that.getMessagesRelativeIssueNumber(message);
            issueNumberSet = that.addNummberIntoSet(issueNumberSet, addIssueNumberList);
        });

        // tanslate Set<string> to Array<string> and sort
        return Array.from(issueNumberSet).sort();
    }

    private getMessagesRelativeIssueNumber(message: string): Array<string> {
        let pattern = /#[0-9]+/g;
        let result = message.match(pattern);
        return result;
    }

    private addNummberIntoSet(issueNumberSet: Set<string>, addIssueNumberList: Array<string>): Set<string> {
        const that = this;
        _.forEach(addIssueNumberList, function (issueNumber) {
            const issueNumberWithoutHashtag = _.trimStart(issueNumber, '#');
            issueNumberSet.add(issueNumberWithoutHashtag);
        });

        return issueNumberSet;
    }

    /**
     * Getter issueNumberList
     * @return {Array<string> }
     */
	public get issueNumberList(): Array<string>  {
		return this._issueNumberList;
	}

}