import IGitLabApi from "./IGitLabApi";
import IProject from "../Project/IProject";
import ProjectV4 from "../Project/ProjectV4";
import IBranch from "../Branch/IBranch";
import BranchV4 from "../Branch/BranchV4";
import ITag from "../Tag/ITag";
import TagV4 from "../Tag/TagV4";
import IRepository from "../Repository/IRepository";
import RepositoryV4 from "../Repository/RepositoryV4";
import IIssue from "../Issue/IIssue";
import IssueV4 from "../Issue/IssueV4";

export default class GitLabApiV4 implements IGitLabApi {
    private _project: IProject = undefined;
    private _branch: IBranch = undefined;
    private _tag: ITag = undefined;
    private _repository: IRepository = undefined;
    private _issue: IIssue = undefined;

    constructor() {
        this._project = new ProjectV4();
        this._branch = new BranchV4();
        this._tag = new TagV4();
        this._repository = new RepositoryV4();
        this._issue = new IssueV4();
    }

    public getProject(): IProject {
        return this._project;
    }

    public getBranch(): IBranch {
        return this._branch;
    }

    public getTag(): ITag {
        return this._tag;
    }

    public getRepository(): IRepository {
        return this._repository;
    }

    public getIssue(): IIssue {
        return this._issue;
    }

}