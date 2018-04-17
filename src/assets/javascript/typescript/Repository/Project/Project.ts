import * as _ from "lodash";
import BranchHelper from "../Brnach/BranchHelper";
import TagHelper from "../Tag/TagHelper";

export default class Project {
    private _id: string;
    private _name: string;
    private _nameWithNamespace: string;
    private _pathWithNamespace: string;
    private _branchHelper: BranchHelper;
    private _tagHelper: TagHelper;

    constructor(id: string, name: string, nameWithNamespace: string, pathWithNamespace: string) {
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
    public get id(): string {
        return this._id;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter nameWithNamespace
     * @return {string}
     */
    public get nameWithNamespace(): string {
        return this._nameWithNamespace;
    }

    /**
     * Getter pathWithNamespace
     * @return {string}
     */
    public get pathWithNamespace(): string {
        return this._pathWithNamespace;
    }

    /**
     * Getter branchtHelper
     * @return {BranchtHelper}
     */
    public get branchHelper(): BranchHelper {
        return this._branchHelper;
    }

    /**
     * Getter tagHelper
     * @return {TagHelper}
     */
    public get tagHelper(): TagHelper {
        return this._tagHelper;
    }

}