import supabase from "@/utils/supabase";
import { User } from "@/types/types";
import { Delete, Edit, GetAll, GetById, GetByIds, Insert } from "./Repository";
import { IRepository } from "./interfaces/IRepository";
import { IUserRepository } from "./interfaces/IUserRepository";

const TABLE = 'users';
type Object = User

export default class UserRepository implements IRepository<Object>, IUserRepository<Object> {
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

    //#region IUserRepository

    public async GetUserByName(name: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }

    //#endregion
}