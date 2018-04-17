import IGitLabApi from "./SimpleFactory/IGitLabApi";
import AxiosGitLab from '../Axios/AxiosGitLab';

export default class GitLabApiHelper {
	private _axiosGitLab: AxiosGitLab;
	private _iGitLabApi: IGitLabApi;

	constructor(iGitLabApi: IGitLabApi, axiosGitLab: AxiosGitLab) {
		this._axiosGitLab = axiosGitLab;
		this._iGitLabApi = iGitLabApi;
	}

	public getAllProjectList() {
		return this._axiosGitLab.get(this._iGitLabApi.getProject().listAllProjects());
	}

	public getProjectAllBranchList(id: number) {
		return this._axiosGitLab.get(this._iGitLabApi.getBranch().listRepositoryBranches(id));
	}

	public getProjectAllTagList(id: number) {
		return this._axiosGitLab.get(this._iGitLabApi.getTag().listRepositoryTags(id));
	}

	public compareCommits(id: number, from: string, to: string) {
		return this._axiosGitLab.get(this._iGitLabApi.getRepository().compareCommits(id, from, to));
	}

}