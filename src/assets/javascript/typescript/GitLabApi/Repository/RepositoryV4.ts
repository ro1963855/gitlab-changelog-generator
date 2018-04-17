import IRepository from "./IRepository";

export default class RepositoryV4 implements IRepository {

    public compareCommits(id: number, from: string, to: string): string {
        return `/projects/${id}/repository/compare?from=${from}&to=${to}`;
    }

}