import * as _ from "lodash";
import Tag from "./Tag";
export default class TagHelper {
    constructor() {
        this._tagList = [];
    }
    buildTagList(reponse) {
        const that = this;
        that._tagList = [];
        _.forEach(reponse, function (value) {
            that._tagList.push(new Tag(value.commit.id, value.name));
        });
    }
    getAllTagOptions() {
        const that = this;
        let tagOptions = [];
        _.forEach(this._tagList, function (element) {
            tagOptions.push({ id: element.id, name: element.name });
        });
        return tagOptions;
    }
}
