import * as _ from "lodash";
import Commit from "./Commit";
import Project from "../Project/Project";

export default class CommitHelper {
    private _commitList: Array<Commit> = [];
    private _project: Project;

    public buildCommitList(project: Project, reponse) {
        const that = this;
        this._project = project;
        that._commitList = [];
        _.forEach(reponse.commits, function (value) {
            that._commitList.push(new Commit(value.id, value.message));
        });

    }

    public getAllCommitMessages(): Array<string> {
        const that = this;
        let commitMessages = [];
        _.forEach(this._commitList, function (element) {
            commitMessages.push(element.message);
        });

        return commitMessages;
    }

    /**
     * Getter project
     * @return {Project}
     */
	public get project(): Project {
		return this._project;
	}

}