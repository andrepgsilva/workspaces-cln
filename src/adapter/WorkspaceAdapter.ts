import Workspace from "../core/entity/Workspace";

export default class WorkspaceAdapter {
  static create(code: string, capacity: number, openHour: number, closeHour: number, occupiedRooms: number): Workspace {
    return new Workspace(code, capacity, openHour, closeHour, occupiedRooms);
  }
}