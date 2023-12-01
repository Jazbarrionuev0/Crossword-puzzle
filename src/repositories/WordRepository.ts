import { Word } from "@/types/types";
import { IRepository } from "./interfaces/IRepository";
import { Delete, Edit, GetAll, GetById, GetByIds, Insert } from "./Repository";
import supabase from "@/utils/supabase";

const TABLE = 'words';

class WordRepository implements IRepository<Word> {

    private _supabase;
    
    constructor() {
        this._supabase = supabase
    }

    public async GetAll(): Promise<Word[]> {
        return await GetAll(this._supabase,TABLE);
    }
    public async GetById(id: number): Promise<Word | null> {
        return await GetById(this._supabase,TABLE, id);
    }
    public async GetByIds(id: number[]): Promise<Word[]> {
        return await GetByIds(this._supabase,TABLE, id);
    }
    public async Insert(object: Word):Promise<void> {
        return await Insert(this._supabase,TABLE, object);
    }
    public async Edit(id: number, updatedObject: Word): Promise<void> {
        return await Edit(this._supabase,TABLE, id, updatedObject);
    }
    public async Delete(id: number): Promise<void> {
        return await Delete(this._supabase,TABLE, id);
    }
    
}

export default WordRepository