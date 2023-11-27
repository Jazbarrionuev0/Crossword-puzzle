export interface IUserRepository<User> {
    GetUserByName(name: string): Promise<User | null>;
}