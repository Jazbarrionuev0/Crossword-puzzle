export interface IGameRepository<GameClue> {
    GetGameClueByGameId(gameId: number): Promise<GameClue | null>;
    GetGameClueByUserCoordId(userCoordId: number): Promise<GameClue | null>;
}