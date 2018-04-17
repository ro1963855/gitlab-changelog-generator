export default class Tag {
    private _id: string;
    private _name: string;

    constructor(id: string, name: string) {
        this._name = name;
        this._id = id;
    }
    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
    }
    
    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
    }
    
}