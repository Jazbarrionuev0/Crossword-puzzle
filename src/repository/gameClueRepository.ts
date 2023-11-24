import supabase from "@/utils/supabase";
import { GameClue } from "@/types/types";
import { IRepository } from "./interfaces/IRepository";
import { IGameClueRepository } from "./interfaces/IGameClueRepository";
import { GetAll } from "./Repository";

const TABLE = 'games_clues';

export default class GameClueRepository implements IGameClueRepository<GameClue>, IRepository<GameClue> {
    private _supabase;

    constructor() {
        this._supabase = supabase;
    }

    public async GetAll(): Promise<GameClue[]> {
        return await GetAll(this._supabase, TABLE);
    }

    GetById(id: number): Promise<GameClue | null> {
        throw new Error("Method not implemented.");
    }

    GetByIds(id: number[]): Promise<GameClue[]> {
        throw new Error("Method not implemented.");
    }

    Insert(object: GameClue): void {
        throw new Error("Method not implemented.");
    }

    Edit(id: number, updatedObject: GameClue): void {
        throw new Error("Method not implemented.");
    }

    Delete(id: number): void {
        throw new Error("Method not implemented.");
    }

    GetGameClueByGameId(gameId: number): Promise<GameClue | null> {
        throw new Error("Method not implemented.");
    }
    GetGameClueByUserCoordId(userCoordId: number): Promise<GameClue | null> {
        throw new Error("Method not implemented.");
    }
}
