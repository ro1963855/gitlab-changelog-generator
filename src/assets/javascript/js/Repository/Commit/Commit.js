export default class Commit {
    constructor(id, name) {
        this._id = id;
        this._message = name;
    }
    /**
     * Getter id
     * @return {string}
     */
    get id() {
        return this._id;
    }
    /**
     * Getter message
     * @return {string}
     */
    get message() {
        return this._message;
    }
}
