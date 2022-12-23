import Company from "../entity/Company";
import Workspace from "../entity/Workspace";

export default interface WorkspaceRepository {
  getWorkspace(code: string): Promise<Workspace>;
  saveCompany(identification: string, name: string, date: Date): Promise<Company>;
}