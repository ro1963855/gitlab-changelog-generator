export default class Branch {
    constructor(id, name) {
        this._name = name;
        this._id = id;
    }
    /**
     * Getter name
     * @return {string}
     */
    get name() {
        return this._name;
    }
    /**
     * Getter id
     * @return {string}
     */
    get id() {
        return this._id;
    }
}
