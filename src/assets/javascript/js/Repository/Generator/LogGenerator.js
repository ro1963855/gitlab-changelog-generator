import * as _ from "lodash";
import * as moment from 'moment';
import DaMarkdown from "../../Utilities/DaMarkdown";
export default class LogGenerator {
    constructor(config, project, issueHelper, changelog, compareSourceAndTarget) {
        this._markdownResult = '';
        this._markdown = new DaMarkdown();
        this._issueHelper = issueHelper;
        this._changlog = changelog;
        this._config = config;
        this._project = project;
        this._compareSourceAndTarget = compareSourceAndTarget;
        const labelGroupList = this.getLabelGroup();
        this._markdownResult = this.generateLogWithMarkdownFormat(labelGroupList);
    }
    generateLogWithMarkdownFormat(labelGroupList) {
        const markdown = this._markdown;
        let result = markdown.title(2, markdown.textWithLink(this._changlog.title, this._changlog.url)) + markdown.space(1) + `(${moment().format('YYYY-MM-DD')})` + markdown.changeLine() +
            markdown.textWithLink("Full Changelog", this.getCompareUrl()) + markdown.changeLine() +
            markdown.changeLine() +
            this.getLabelContent(labelGroupList);
        return result;
    }
    getLabelContent(labelGroupList) {
        const markdown = this._markdown;
        let result = '';
        _.forEach(labelGroupList, function (labelGroup) {
            result += markdown.strong(labelGroup.label.indicate) + markdown.changeLine();
            _.forEach(labelGroup.issueList, function (issue) {
                result +=
                    markdown.list(issue.title) +
                        markdown.space(1) +
                        markdown.textWithLink(`#${issue.iid}`, issue.webUrl) +
                        markdown.space(1) +
                        '(' + markdown.textWithLink(`${issue.author.username}`, issue.author.web_url) + ')' +
                        markdown.changeLine();
            });
            result += markdown.changeLine();
        });
        return result;
    }
    getLabelGroup() {
        const that = this;
        const labelGroupList = [];
        _.forEach(this._changlog.labelTitle, function (labelTitle) {
            const issueContainLabelList = that._issueHelper.getIssueContainLabel(labelTitle.label);
            if (issueContainLabelList.length !== 0) {
                labelGroupList.push({ label: labelTitle, issueList: issueContainLabelList });
            }
        });
        return labelGroupList;
    }
    getCompareUrl() {
        const gitlabConfig = this._config.gitlab;
        const source = this._compareSourceAndTarget.source;
        const target = this._compareSourceAndTarget.target;
        const url = `${gitlabConfig.protocol}://${gitlabConfig.host}:${gitlabConfig.port}/${this._project.pathWithNamespace}/compare/${source}...${target}`;
        return url;
    }
    /**
     * Getter markdownResult
     * @return {string}
     */
    get markdownResult() {
        return this._markdownResult;
    }
}
