import IProject from "./IProject";

export default class ProjectV4 implements IProject {

    public listAllProjects(): string {
        return "/projects";
    }

}