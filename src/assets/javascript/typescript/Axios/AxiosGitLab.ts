import * as _ from "lodash";
import axios from "axios";

export default class AxiosGitLab {
    private _protocol: string;
    private _host: string;
    private _port: string;
    private _version: string;
    private _privateToken: string;

	constructor(config) {
		this._protocol = config.gitlab.protocol;
		this._host = config.gitlab.host;
		this._port = config.gitlab.port;
		this._version = config.gitlab.api.version;
        this._privateToken = config.gitlab.api["Private-Token"];
    }
    
    public get(api) {
        let connectionSymbol = '?';
        if (_.includes(api, '?')) {
            connectionSymbol = '&';
        }

        const url = `${this._protocol}://${this._host}:${this._port}/api/${this._version}/${api}${connectionSymbol}private_token=${this._privateToken}`;
        return axios.get(url);
    }
    
}
