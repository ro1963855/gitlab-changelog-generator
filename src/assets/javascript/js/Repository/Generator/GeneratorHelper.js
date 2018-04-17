import CommitHelper from "../Commit/CommitHelper";
import LogGenerator from "./LogGenerator";
import LogAnalyzer from "./LogAnalyzer";
import IssueHelper from "../Issue/IssueHelper";
export default class GeneratorHelper {
    constructor(iGitLabApi, axiosGitLab, config) {
        this._commitHelper = new CommitHelper();
        this._axiosGitLab = axiosGitLab;
        this._iGitLabApi = iGitLabApi;
        this._config = config;
    }
    buildCommitsList(project, compareSourceAndTarget, reponse) {
        this._commitHelper.buildCommitList(project, reponse);
        this._compareSourceAndTarget = compareSourceAndTarget;
    }
    getReleaseLog(changelog) {
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
    getIssueList(projectId, issueNumberList) {
        return this._axiosGitLab.get(this._iGitLabApi.getIssue().listProjectIssues(Number(projectId), issueNumberList));
    }
}
