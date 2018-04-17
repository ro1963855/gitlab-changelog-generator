export default interface IRepository {
    compareCommits(id: number, from: string, to: string): string;
}