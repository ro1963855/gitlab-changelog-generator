import IBranch from "./IBranch";

export default class BranchV4 implements IBranch {

    public listRepositoryBranches(id: number): string {
        return `/projects/${id}/repository/branches`;
    }

}