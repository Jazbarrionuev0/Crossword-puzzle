import supabase from "@/utils/supabase";
import { GameClue } from "@/types/types";
import { IRepository } from "./interfaces/IRepository";
import { IGameClueRepository } from "./interfaces/IGameClueRepository";
import { Delete, Edit, GetAll, GetById, GetByIds, Insert } from "./Repository";

const TABLE = 'games_clues';
type Object = GameClue

export default class GameClueRepository implements IRepository<Object>, IGameClueRepository<Object> {
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

    //#region IGameClueRepository

    public async GetGameClueByGameId(gameId: number): Promise<Object | null> {
        try {
			const { data, error } = await this._supabase
				.from(TABLE)
				.select(`
                *,
                games (*),
                users_coords (*)
                `)
			if (error) {
				throw new Error(`Error fetching games: ${error.message}`);
			}
			return data[0];
		} catch (error) {
			console.error('Error in GetGameByCode:', error);
			throw error;
		}
    }

    public async GetGameClueByUserCoordId(userCoordId: number): Promise<Object | null> {
        throw new Error("Method not implemented.");
    }

    //#endregion
}
