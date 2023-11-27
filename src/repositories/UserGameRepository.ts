import supabase from "@/utils/supabase";
import { UserGame } from "@/types/types";
import { IRepository } from "./interfaces/IRepository";
import { IUserGameRepository } from "./interfaces/IUserGameRepository";
import { Delete, Edit, GetAll, GetById, GetByIds, Insert } from "./Repository";

const TABLE = 'users_games';
type Object = UserGame

export default class UserGameRepository implements IRepository<Object>, IUserGameRepository<Object> {
    private _supabase;

    constructor() {
        this._supabase = supabase;
    }

	//#region Common Repository

    public async GetAll(): Promise<Object[]> {
        return await GetAll(this._supabase, TABLE);
    }

    public async GetById(id: number): Promise<Object | null> {
        return await GetById(this._supabase, TABLE, id);
    }

    public async GetByIds(ids: number[]): Promise<Object[]> {
        return await GetByIds(this._supabase, TABLE, ids);
    }

    public async Insert(object: Object): Promise<void> {
        await Insert(this._supabase, TABLE, object);
    }

    public async Edit(id: number, updatedObject: Object): Promise<void> {
        await Edit(this._supabase, TABLE, id, updatedObject);
    }

    public async Delete(id: number): Promise<void> {
        await Delete(this._supabase, TABLE, id);
    }
    
    //#endregion

    //#region IUserGameRepository

    public async GetUserGameByUserId(userId: number): Promise<UserGame | null> {
        throw new Error("Method not implemented.");
    }

    public async GetUserGameByGameId(gameId: number): Promise<UserGame | null> {
        throw new Error("Method not implemented.");
    }

    //#endregion
}