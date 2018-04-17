import GitLabApiV4 from "./GitLabApiV4";
export default class SimpleApiVersionFactory {
    createAPIVersion(apiVer) {
        if (apiVer === "v4") {
            return new GitLabApiV4();
        }
        return null;
    }
}
