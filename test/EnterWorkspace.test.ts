import EnterWorkspace from "../src/core/usecase/EnterWorkspace";
import GetWorkspace from "../src/core/usecase/GetWorkspace";
import WorkspaceMemoryRepository from "../src/infra/repository/WorkspaceMemoryRepository";

test('Should enter workspace', async () => {
  const memoryRepository = new WorkspaceMemoryRepository();
  const enterWorkspace = new EnterWorkspace(memoryRepository);
  
  await enterWorkspace.execute('shopping', 'AAA-1234','Random', new Date('2021-12-20T10:00:00'));
  
  const getWorkspace = new GetWorkspace(memoryRepository);
  const updatedWorkspace = await getWorkspace.execute('shopping');

  expect(updatedWorkspace.occupiedRooms).toBe(1);
});