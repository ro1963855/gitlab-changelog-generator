export default class RepositoryV4 {
    compareCommits(id, from, to) {
        return `/projects/${id}/repository/compare?from=${from}&to=${to}`;
    }
}
