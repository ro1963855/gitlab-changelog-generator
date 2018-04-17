import IGitLabApi from "./IGitLabApi";
import GitLabApiV4 from "./GitLabApiV4";

export default class SimpleApiVersionFactory {

    public createAPIVersion(apiVer: string): IGitLabApi {
        if (apiVer === "v4") {
            return new GitLabApiV4();
        }

        return null;
    }
}