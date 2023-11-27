export interface IUserCoordRepository<UserCoord> {
    GetUserCoordByUserId(userId: number): Promise<UserCoord | null>;
    GetUserCoordByCoordId(coordId: number): Promise<UserCoord | null>;
}