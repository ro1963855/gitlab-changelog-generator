export default class Commit {
    private _id: string;
    private _message: string;

    constructor(id: string, name: string) {
        this._id = id;
        this._message = name;
    }
    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter message
     * @return {string}
     */
	public get message(): string {
		return this._message;
    }
    
}