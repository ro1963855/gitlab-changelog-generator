import * as _ from "lodash";
export default class IssueV4 {
    listProjectIssues(id, iids) {
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
