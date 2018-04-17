import ProjectV4 from "../Project/ProjectV4";
import BranchV4 from "../Branch/BranchV4";
import TagV4 from "../Tag/TagV4";
import RepositoryV4 from "../Repository/RepositoryV4";
import IssueV4 from "../Issue/IssueV4";
export default class GitLabApiV4 {
    constructor() {
        this._project = undefined;
        this._branch = undefined;
        this._tag = undefined;
        this._repository = undefined;
        this._issue = undefined;
        this._project = new ProjectV4();
        this._branch = new BranchV4();
        this._tag = new TagV4();
        this._repository = new RepositoryV4();
        this._issue = new IssueV4();
    }
    getProject() {
        return this._project;
    }
    getBranch() {
        return this._branch;
    }
    getTag() {
        return this._tag;
    }
    getRepository() {
        return this._repository;
    }
    getIssue() {
        return this._issue;
    }
}
