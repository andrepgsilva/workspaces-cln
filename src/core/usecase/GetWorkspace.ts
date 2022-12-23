import Workspace from "../entity/Workspace";
import WorkspaceRepository from "../repository/WorkspaceRepository";

export default class GetWorkspace {
  workspaceRepository: WorkspaceRepository;
  
  constructor(workspaceRepository: WorkspaceRepository) {
    this.workspaceRepository = workspaceRepository;
  }

  async execute(code: string): Promise<Workspace>{
    return this.workspaceRepository.getWorkspace(code);
  }
}