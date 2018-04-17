export default class Issue {
    private _iid: number = 0;
    private _title: string = '';
    private _labels: Array<string> = [];
    private _webUrl: string = '';
    private _author;

    constructor(iid: number, title: string, labels: Array<string>, webUrl: string, author) {
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
    public get iid(): number {
        return this._iid;
    }

    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter labels
     * @return {Array<string>}
     */
    public get labels(): Array<string> {
        return this._labels;
    }

    /**
     * Getter webUrl
     * @return {string}
     */
    public get webUrl(): string {
        return this._webUrl;
    }

    /**
     * Getter webUrl
     */
    public get author() {
        return this._author;
    }

}