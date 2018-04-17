import * as _ from "lodash";
import Commit from "./Commit";
export default class CommitHelper {
    constructor() {
        this._commitList = [];
    }
    buildCommitList(project, reponse) {
        const that = this;
        this._project = project;
        that._commitList = [];
        _.forEach(reponse.commits, function (value) {
            that._commitList.push(new Commit(value.id, value.message));
        });
    }
    getAllCommitMessages() {
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
    get project() {
        return this._project;
    }
}
