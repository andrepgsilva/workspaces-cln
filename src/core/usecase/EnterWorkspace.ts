import Company from "../entity/Company";
import Workspace from "../entity/Workspace";
import WorkspaceRepository from "../repository/WorkspaceRepository";

export default class EnterWorkspace {
  workspaceRepository: WorkspaceRepository;

  constructor(workspaceRepository: WorkspaceRepository) {
    this.workspaceRepository = workspaceRepository;
  }

  async execute(code: string, identification: string, name: string, date: Date): Promise<Workspace> {
    const workspace = await this.workspaceRepository.getWorkspace(code);
    
    if (! workspace.isOpen) {
      throw new Error("The workspace is closed");
    }

    if (workspace.isFull()) {
      throw new Error("The workspace is full");
    }    
    
    this.workspaceRepository.saveCompany(identification, name, date);

    return workspace;
  }
}