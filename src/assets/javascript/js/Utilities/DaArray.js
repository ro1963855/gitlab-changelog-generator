import * as _ from "lodash";
export default class DaArray {
    getArrayElementByFilter(array, filter) {
        const index = _.findIndex(array, filter);
        return array[index];
    }
}
