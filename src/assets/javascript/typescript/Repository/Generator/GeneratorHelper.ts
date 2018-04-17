import * as _ from "lodash";
import AxiosGitLab from '../../Axios/AxiosGitLab';
import IGitLabApi from "../../GitLabApi/SimpleFactory/IGitLabApi";
import CommitHelper from "../Commit/CommitHelper";
import LogGenerator from "./LogGenerator";
import LogAnalyzer from "./LogAnalyzer";
import IssueHelper from "../Issue/IssueHelper";
import Project from "../Project/Project";

export default class GeneratorHelper {
    private _commitHelper: CommitHelper;
    private _axiosGitLab: AxiosGitLab;
    private _iGitLabApi: IGitLabApi;
    private _config;
    private _compareSourceAndTarget;

    constructor(iGitLabApi: IGitLabApi, axiosGitLab: AxiosGitLab, config) {
        this._commitHelper = new CommitHelper();
        this._axiosGitLab = axiosGitLab;
        this._iGitLabApi = iGitLabApi;
        this._config = config;
    }

    public buildCommitsList(project: Project, compareSourceAndTarget, reponse) {
        this._commitHelper.buildCommitList(project, reponse);
        this._compareSourceAndTarget = compareSourceAndTarget;
    }

    public getReleaseLog(changelog) {
        const that = this;
        const commitMessages = this._commitHelper.getAllCommitMessages();
        const logAnalyzer = new LogAnalyzer(commitMessages);
        return this.getIssueList(this._commitHelper.project.id, logAnalyzer.issueNumberList)
            .then((response) => {
                const issueHelper = new IssueHelper(response.data);
                const logGenerator = new LogGenerator(this._config, this._commitHelper.project, issueHelper, changelog, this._compareSourceAndTarget);
                return logGenerator.markdownResult;
            });
    }

    private getIssueList(projectId: string, issueNumberList: Array<string>) {
        return this._axiosGitLab.get(this._iGitLabApi.getIssue().listProjectIssues(Number(projectId), issueNumberList));
    }

}