import * as _ from "lodash";

export default class DaArray {

    public getArrayElementByFilter(array: Array<any>, filter: Object) {
        const index = _.findIndex(array, filter);
        return array[index];
    }

}