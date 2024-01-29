import supabase from "@/utils/supabase";
import { Game, User, UserGame } from "@/types/types";
import { IRepository } from "./interfaces/IRepository";
import { IUserGameRepository } from "./interfaces/IUserGameRepository";
import { Delete, Edit, GetAll, GetById, GetByIds, Insert } from "./Repository";
import { IUserGame } from "@/types/database";

const TABLE = 'users_games';
type Object = UserGame
type IObject = IUserGame


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

    public async Insert(object: IObject): Promise<Object> {
        try {
            const { data, error } = await this._supabase
                .from(TABLE)
                .insert(object)
                .select()
            if (error) {
                throw new Error(`Error inserting data: ${error.message}`);
            }
            return data[0]
        } catch (error) {
            console.error('Error in insert:');
            throw error;
        }
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

    public async GetUsersByCode(code: string): Promise<User[]> {
        try {
            const { data, error } = await this._supabase
                .from(TABLE)
                .select('games (*), users (*)')
                .eq('games.code', code)

            if (error) {
                throw new Error(`Error inserting data: ${error.message}`);
            }

            type QueryType = {
                games: Game | null,
                users: User | null
            }
            return data
                .filter((queryResponse: QueryType) => queryResponse.games != null)
                .map((queryResponse: QueryType) => queryResponse.users as User)
        } catch (error) {
            console.error('Error in insert:');
            throw error;
        }
    }

    public async Count(id: number): Promise<number> {
        try {
            const { data, error, count } = await this._supabase
                .from(TABLE)
                .select('*', { count: 'exact', head: true })
                .eq('game_id', id)

            console.log({ data });

            if (error) {
                throw new Error(`Error inserting data: ${error.message}`);
            }
            return count ?? 0
        } catch (error) {
            console.error('Error in insert:');
            throw error;
        }
    }

    //#endregion
}