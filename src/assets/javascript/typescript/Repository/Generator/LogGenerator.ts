import * as _ from "lodash";
import * as moment from 'moment';
import IssueHelper from "../Issue/IssueHelper";
import DaMarkdown from "../../Utilities/DaMarkdown";
import Project from "../Project/Project";
import Issue from "../Issue/Issue";

export default class LogGenerator {
    private _issueHelper: IssueHelper;
    private _markdown: DaMarkdown;
    private _project: Project;
    private _compareSourceAndTarget;
    private _changlog;
    private _config;
    private _markdownResult: string = '';

    constructor(config, project: Project, issueHelper: IssueHelper, changelog, compareSourceAndTarget) {
        this._markdown = new DaMarkdown();
        this._issueHelper = issueHelper;
        this._changlog = changelog;
        this._config = config;
        this._project = project;
        this._compareSourceAndTarget = compareSourceAndTarget;
        const labelGroupList = this.getLabelGroup();
        this._markdownResult = this.generateLogWithMarkdownFormat(labelGroupList);
    }

    private generateLogWithMarkdownFormat(labelGroupList): string {
        const markdown = this._markdown;
        let result =
            markdown.title(2, markdown.textWithLink(this._changlog.title, this._changlog.url)) + markdown.space(1) + `(${moment().format('YYYY-MM-DD')})` + markdown.changeLine() +
            markdown.textWithLink("Full Changelog", this.getCompareUrl()) + markdown.changeLine() +
            markdown.changeLine() +
            this.getLabelContent(labelGroupList);

        return result;
    }

    private getLabelContent(labelGroupList): string {
        const markdown = this._markdown;
        let result = '';
        _.forEach(labelGroupList, function (labelGroup) {
            result += markdown.strong(labelGroup.label.indicate) + markdown.changeLine();
            _.forEach(labelGroup.issueList, function (issue: Issue) {
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

    private getLabelGroup() {
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

    private getCompareUrl(): string {
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
    public get markdownResult(): string {
        return this._markdownResult;
    }

}