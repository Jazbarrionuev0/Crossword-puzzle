export interface IGameRepository<Game> {
    GetAll(): Promise<Game[]>;
    GetGameById(id: number): Promise<Game | null>;
    GetGameByCode(code: string): Promise<Game | null>;
    GetGamesByIds(id: number[]): Promise<Game[]>;
    Insert(game: Game): void;
    Edit(id:number, updatedGame: Game): void;
    Delete(id: number): void;
  }