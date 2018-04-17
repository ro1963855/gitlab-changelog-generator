import IProject from "../Project/IProject";
import IBranch from "../Branch/IBranch";
import ITag from "../Tag/ITag";
import IRepository from "../Repository/IRepository";
import IIssue from "../Issue/IIssue";

export default interface IGitLabApi {
    getProject(): IProject;
    getBranch(): IBranch;
    getTag(): ITag;
    getRepository(): IRepository;
    getIssue(): IIssue;
}