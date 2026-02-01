export interface IStorage {
  // Purely client-side app, no storage needed
}

export class MemStorage implements IStorage {
}

export const storage = new MemStorage();
