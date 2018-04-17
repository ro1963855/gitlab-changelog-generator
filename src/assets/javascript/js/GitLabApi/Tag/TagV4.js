export default class TagV4 {
    listRepositoryTags(id) {
        return `/projects/${id}/repository/tags`;
    }
}
