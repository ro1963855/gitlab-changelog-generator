export default class BranchV4 {
    listRepositoryBranches(id) {
        return `/projects/${id}/repository/branches`;
    }
}
