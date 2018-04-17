import * as _ from "lodash";
import Project from "../Project/Project";
import DaArray from "../../Utilities/DaArray";
export default class ProjectHelper {
    constructor(reponse) {
        this._projectList = [];
        this.initProject(reponse);
        this._daArray = new DaArray();
    }
    initProject(reponse) {
        const that = this;
        _.forEach(reponse, function (value) {
            that._projectList.push(new Project(value.id, value.name, value.name_with_namespace, value.path_with_namespace));
        });
    }
    buildBranchIntoProjectById(reponse, id) {
        const project = this._daArray.getArrayElementByFilter(this._projectList, ['id', id]);
        project.branchHelper.buildBranchList(reponse);
    }
    buildTagIntoProjectById(reponse, id) {
        const project = this._daArray.getArrayElementByFilter(this._projectList, ['id', id]);
        project.tagHelper.buildTagList(reponse);
    }
    getAllProjectOptions() {
        const that = this;
        let projectOptions = [];
        _.forEach(this._projectList, function (element) {
            projectOptions.push({ id: element.id, name: element.nameWithNamespace });
        });
        return projectOptions;
    }
    getProjectById(id) {
        return this._daArray.getArrayElementByFilter(this._projectList, ['id', id]);
    }
    getProjectCompareOptions(id) {
        const project = this._daArray.getArrayElementByFilter(this._projectList, ['id', id]);
        const branchOptions = project.branchHelper.getAllBranchOptions();
        const tagOptions = project.tagHelper.getAllTagOptions();
        return _.concat(branchOptions, tagOptions);
    }
}
