import * as _ from "lodash";
import Project from "../Project/Project";
import DaArray from "../../Utilities/DaArray";

export default class ProjectHelper {
    private _projectList: Array<Project> = [];
    private _daArray: DaArray;

    constructor(reponse) {
        this.initProject(reponse);
        this._daArray = new DaArray();
    }

    private initProject(reponse) {
        const that = this;
        _.forEach(reponse, function (value) {
            that._projectList.push(new Project(value.id, value.name, value.name_with_namespace, value.path_with_namespace));
        });

    }

    public buildBranchIntoProjectById(reponse, id: number) {
        const project: Project = this._daArray.getArrayElementByFilter(this._projectList, ['id', id]);
        project.branchHelper.buildBranchList(reponse);
    }

    public buildTagIntoProjectById(reponse, id: number) {
        const project: Project = this._daArray.getArrayElementByFilter(this._projectList, ['id', id]);
        project.tagHelper.buildTagList(reponse);
    }

    public getAllProjectOptions() {
        const that = this;
        let projectOptions = [];
        _.forEach(this._projectList, function (element) {
            projectOptions.push({id: element.id, name: element.nameWithNamespace});
        });

        return projectOptions;
    }

    public getProjectById(id: number) {
        return this._daArray.getArrayElementByFilter(this._projectList, ['id', id]);
    }

    public getProjectCompareOptions(id: number) {
        const project: Project = this._daArray.getArrayElementByFilter(this._projectList, ['id', id]);
        const branchOptions = project.branchHelper.getAllBranchOptions();
        const tagOptions = project.tagHelper.getAllTagOptions();
        return _.concat(branchOptions, tagOptions);
    }

}