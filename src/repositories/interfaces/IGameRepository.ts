export interface IGameRepository<Game> {
    GetGameByCode(code: string): Promise<Game | null>;
}