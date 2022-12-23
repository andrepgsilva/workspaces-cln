import CompanyAdapter from "../../adapter/CompanyAdapter";
import WorkspaceAdapter from "../../adapter/WorkspaceAdapter";
import Company from "../../core/entity/Company";
import Workspace from "../../core/entity/Workspace";
import WorkspaceRepository from "../../core/repository/WorkspaceRepository";

export default class WorkspaceMemoryRepository implements WorkspaceRepository {
  workspaces = [
    {
      code: 'shopping',
      capacity: 2,
      open_hour: 8,
      close_hour: 23,
      occupiedRooms: 0
    }
  ];

  companies = [];

  async getWorkspace(code: string): Promise<Workspace> {
    const workspaceData = this.workspaces.filter(workspace => workspace.code === code)[0];
    const workspace = WorkspaceAdapter.create(
      workspaceData.code,
      workspaceData.capacity, 
      workspaceData.open_hour, 
      workspaceData.close_hour, 
      this.companies.length
    );

    return Promise.resolve(workspace);
  }

  async saveCompany(identification: string, name: string, date: Date) {
    this.companies.push({
      identification,
      name,
      date
    });

    return Promise.resolve(CompanyAdapter.create(identification, name, date));
  }
}