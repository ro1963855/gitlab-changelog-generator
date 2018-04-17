export default interface IIssue {
    listProjectIssues(id: number, iids: Array<string>): string;
}