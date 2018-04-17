export default class GitLabApiHelper {
    constructor(iGitLabApi, axiosGitLab) {
        this._axiosGitLab = axiosGitLab;
        this._iGitLabApi = iGitLabApi;
    }
    getAllProjectList() {
        return this._axiosGitLab.get(this._iGitLabApi.getProject().listAllProjects());
    }
    getProjectAllBranchList(id) {
        return this._axiosGitLab.get(this._iGitLabApi.getBranch().listRepositoryBranches(id));
    }
    getProjectAllTagList(id) {
        return this._axiosGitLab.get(this._iGitLabApi.getTag().listRepositoryTags(id));
    }
    compareCommits(id, from, to) {
        return this._axiosGitLab.get(this._iGitLabApi.getRepository().compareCommits(id, from, to));
    }
}
