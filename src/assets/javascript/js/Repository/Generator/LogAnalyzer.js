import * as _ from "lodash";
export default class LogAnalyzer {
    constructor(commitMessages) {
        this._issueNumberList = [];
        this._issueNumberList = this.getIssueNumberFromCommitMessages(commitMessages);
    }
    getIssueNumberFromCommitMessages(commitMessages) {
        let issueNumberSet = new Set();
        const that = this;
        _.forEach(commitMessages, function (message) {
            const addIssueNumberList = that.getMessagesRelativeIssueNumber(message);
            issueNumberSet = that.addNummberIntoSet(issueNumberSet, addIssueNumberList);
        });
        // tanslate Set<string> to Array<string> and sort
        return Array.from(issueNumberSet).sort();
    }
    getMessagesRelativeIssueNumber(message) {
        let pattern = /#[0-9]+/g;
        let result = message.match(pattern);
        return result;
    }
    addNummberIntoSet(issueNumberSet, addIssueNumberList) {
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
    get issueNumberList() {
        return this._issueNumberList;
    }
}
