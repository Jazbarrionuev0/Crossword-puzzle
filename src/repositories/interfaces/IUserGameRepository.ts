export interface IUserGameRepository<UserGame> {
    GetUserGameByUserId(userId: number): Promise<UserGame | null>;
    GetUserGameByGameId(gameId: number): Promise<UserGame | null>;
}