import * as _ from "lodash";
import IIssue from "./IIssue";

export default class IssueV4 implements IIssue {

    public listProjectIssues(id: number, iids: Array<string>): string {
        let url = `projects/${id}/issues`;
        _.forEach(iids, function (iid) {
            if (_.includes(url, '?')) {
                url = `${url}&iids[]=${iid}`;
            }
            else {
                url = `${url}?iids[]=${iid}`;
            }

        });

        return url;
    }

}