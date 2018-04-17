export default class Issue {
    constructor(iid, title, labels, webUrl, author) {
        this._iid = 0;
        this._title = '';
        this._labels = [];
        this._webUrl = '';
        this._iid = iid;
        this._title = title;
        this._labels = labels;
        this._webUrl = webUrl;
        this._author = author;
    }
    /**
     * Getter iid
     * @return {number}
     */
    get iid() {
        return this._iid;
    }
    /**
     * Getter title
     * @return {string}
     */
    get title() {
        return this._title;
    }
    /**
     * Getter labels
     * @return {Array<string>}
     */
    get labels() {
        return this._labels;
    }
    /**
     * Getter webUrl
     * @return {string}
     */
    get webUrl() {
        return this._webUrl;
    }
    /**
     * Getter webUrl
     */
    get author() {
        return this._author;
    }
}
