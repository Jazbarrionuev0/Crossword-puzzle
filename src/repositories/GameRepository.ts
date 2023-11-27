import supabase from '@/utils/supabase';
import { Game } from '@/types/types';
import { IRepository } from './interfaces/IRepository';
import { IGameRepository } from './interfaces/IGameRepository';
import { Delete, Edit, GetAll, GetById, GetByIds, Insert } from './Repository';

const TABLE = 'games'
type Object = Game

export default class GameRepository implements IRepository<Object>, IGameRepository<Object> {
	private _supabase;

	constructor() {
		this._supabase = supabase;
	}

	//#region Common Repository

	/**
	* Retrieves all records from the 'games' table stored in Supabase.
	* 
	* @returns {Promise<Object[]>} A promise that resolves to an array of `Game` objects representing all records in the 'games' table.
	* @throws {Error} If an error occurs during the data retrieval process.
	* 
	* @example
	* // Usage example:
	* try {
	*   const allGames = await yourInstance.GetAll();
	*   console.log('All games:', allGames);
	* } catch (error) {
	*   console.error('Error getting all games:', error.message);
	* }
	*/
	public async GetAll(): Promise<Object[]> {
		return await GetAll(this._supabase, TABLE);
	}

	/**
	* Retrieves a single game record from the 'games' table stored in Supabase based on the provided ID.
	* 
	* @param {number} id - The unique identifier of the game to retrieve.
	* @returns {Promise<Object | null>} A promise that resolves to a `Game` object representing the retrieved game, or `null` if no matching record is found.
	* @throws {Error} If an error occurs during the data retrieval process.
	* 
	* @example
	* // Usage example:
	* try {
	*   const gameId = 1;
	*   const game = await yourInstance.GetGameById(gameId);
	*   console.log('Game by ID:', game);
	* } catch (error) {
	*   console.error('Error getting game by ID:', error.message);
	* }
	*/
	public async GetById(id: number): Promise<Object | null> {
		return await GetById(this._supabase, TABLE, id);
	}

	/**
	* Retrieves multiple game records from the 'games' table stored in Supabase based on the provided array of game IDs.
	* 
	* @param {number[]} ids - An array of unique identifiers of the games to retrieve.
	* @returns {Promise<Object[]>} A promise that resolves to an array of `Game` objects representing the retrieved games.
	* @throws {Error} If an error occurs during the data retrieval process.
	* 
	* @example
	* // Usage example:
	* try {
	*   const gameIds = [1, 2, 3];
	*   const games = await yourInstance.GetGamesByIds(gameIds);
	*   console.log('Games by IDs:', games);
	* } catch (error) {
	*   console.error('Error getting games by IDs:', error.message);
	* }
	*/
	public async GetByIds(ids: number[]): Promise<Object[]> {
		return await GetByIds(this._supabase, TABLE, ids);
	}

	/**
	* Inserts a new game record into the 'games' table stored in Supabase.
	* 
	* @param {Object} game - The game object to insert into the database.
	* @returns {Promise<void>} A promise that resolves when the insertion is successful.
	* @throws {Error} If an error occurs during the insertion process.
	* 
	* @example
	* // Usage example:
	* try {
	*   const newGame = {
	*     id: 1,
	*     guessed: 0,
	*     failed: 0,
	*     round: 1,
	*     code: 'ABC123'
	*   };
	*   await yourInstance.Insert(newGame);
	*   console.log('Game inserted successfully');
	* } catch (error) {
	*   console.error('Error inserting game:', error.message);
	* }
	*/
	public async Insert(game: Object): Promise<void> {
		await Insert(this._supabase, TABLE, game);
	}

	/**
	* Updates an existing game record in the 'games' table stored in Supabase based on the provided game ID.
	* 
	* @param {number} id - The unique identifier of the game to update.
	* @param {Object} updatedGame - The updated game object to apply to the existing record.
	* @returns {Promise<void>} A promise that resolves when the update is successful.
	* @throws {Error} If an error occurs during the update process.
	* 
	* @example
	* // Usage example:
	* try {
	*   const gameId = 1;
	*   const updatedGame = {
	*     id: 1,
	*     guessed: 1,
	*     failed: 0,
	*     round: 2,
	*     code: 'XYZ789'
	*   };
	*   await yourInstance.Edit(gameId, updatedGame);
	*   console.log('Game updated successfully');
	* } catch (error) {
	*   console.error('Error updating game:', error.message);
	* }
	*/
	public async Edit(id: number, updatedGame: Object): Promise<void> {
		await Edit(this._supabase, TABLE, id, updatedGame);
	}

	/**
	* Deletes an existing game record from the 'games' table stored in Supabase based on the provided game ID.
	* 
	* @param {number} id - The unique identifier of the game to delete.
	* @returns {Promise<void>} A promise that resolves when the deletion is successful.
	* @throws {Error} If an error occurs during the deletion process.
	* 
	* @example
	* // Usage example:
	* try {
	*   const gameIdToDelete = 1;
	*   await yourInstance.Delete(gameIdToDelete);
	*   console.log('Game deleted successfully');
	* } catch (error) {
	*   console.error('Error deleting game:', error.message);
	* }
	*/
	public async Delete(id: number): Promise<void> {
		await Delete(this._supabase, TABLE, id);
	}

	//#endregion

	//#region IGameRepository

	/**
	* Retrieves a single game record from the 'games' table stored in Supabase based on the provided game code.
	* 
	* @param {string} code - The unique code of the game to retrieve.
	* @returns {Promise<Game | null>} A promise that resolves to a `Game` object representing the retrieved game, or `null` if no matching record is found.
	* @throws {Error} If an error occurs during the data retrieval process.
	* 
	* @example
	* // Usage example:
	* try {
	*   const gameCode = 'ABC123';
	*   const game = await yourInstance.GetGameByCode(gameCode);
	*   console.log('Game by code:', game);
	* } catch (error) {
	*   console.error('Error getting game by code:', error.message);
	* }
	*/
	public async GetGameByCode(code: string): Promise<Object | null> {
		try {
			const { data, error } = await this._supabase
				.from(TABLE)
				.select()
				.eq('code', code);
			if (error) {
				throw new Error(`Error fetching games: ${error.message}`);
			}
			return data[0];
		} catch (error) {
			console.error('Error in GetGameByCode:', error);
			throw error;
		}
	}

	//#endregion
}
