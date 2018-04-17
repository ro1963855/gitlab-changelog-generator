import ITag from "./ITag";

export default class TagV4 implements ITag {

    public listRepositoryTags(id: number): string {
        return `/projects/${id}/repository/tags`;
    }

}