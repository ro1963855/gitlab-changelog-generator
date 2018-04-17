import BranchHelper from "../Brnach/BranchHelper";
import TagHelper from "../Tag/TagHelper";
export default class Project {
    constructor(id, name, nameWithNamespace, pathWithNamespace) {
        this._id = id;
        this._name = name;
        this._nameWithNamespace = nameWithNamespace;
        this._pathWithNamespace = pathWithNamespace;
        this._branchHelper = new BranchHelper();
        this._tagHelper = new TagHelper();
    }
    /**
     * Getter id
     * @return {string}
     */
    get id() {
        return this._id;
    }
    /**
     * Getter name
     * @return {string}
     */
    get name() {
        return this._name;
    }
    /**
     * Getter nameWithNamespace
     * @return {string}
     */
    get nameWithNamespace() {
        return this._nameWithNamespace;
    }
    /**
     * Getter pathWithNamespace
     * @return {string}
     */
    get pathWithNamespace() {
        return this._pathWithNamespace;
    }
    /**
     * Getter branchtHelper
     * @return {BranchtHelper}
     */
    get branchHelper() {
        return this._branchHelper;
    }
    /**
     * Getter tagHelper
     * @return {TagHelper}
     */
    get tagHelper() {
        return this._tagHelper;
    }
}
