import supabase from '@/utils/supabase';
import { Game } from '@/types/types';
import { IGameRepository } from './interfaces/IGameRepository';
import { IRepository } from './interfaces/IRepository';

const TABLE = 'games'

export default class GameRepository implements IGameRepository<Game>, IRepository<Game> {
  private _supabase;

  constructor() {
    this._supabase = supabase;
  }

  /**
  * Retrieves all records from the 'games' table stored in Supabase.
  * 
  * @returns {Promise<Game[]>} A promise that resolves to an array of `Game` objects representing all records in the 'games' table.
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
  public async GetAll(): Promise<Game[]> {
    try {
      const { data, error } = await this._supabase
        .from(TABLE)
        .select();
      if (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
      return data;
    } catch (error) {
      console.error('Error in getAll:', error);
      throw error;
    }
  }

  /**
  * Retrieves a single game record from the 'games' table stored in Supabase based on the provided ID.
  * 
  * @param {number} id - The unique identifier of the game to retrieve.
  * @returns {Promise<Game | null>} A promise that resolves to a `Game` object representing the retrieved game, or `null` if no matching record is found.
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
  public async GetById(id: number): Promise<Game | null> {
    try {
      const { data, error } =
        await this._supabase
          .from(TABLE)
          .select()
          .eq('id', id);
      if (error) {
        throw new Error(`Error fetching games: ${error.message}`);
      }
      return data[0];
    } catch (error) {
      console.error('Error in GetGameById:', error);
      throw error;
    }
  }

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
  public async GetGameByCode(code: string): Promise<Game | null> {
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

  /**
  * Retrieves multiple game records from the 'games' table stored in Supabase based on the provided array of game IDs.
  * 
  * @param {number[]} ids - An array of unique identifiers of the games to retrieve.
  * @returns {Promise<Game[]>} A promise that resolves to an array of `Game` objects representing the retrieved games.
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
  public async GetByIds(ids: number[]): Promise<Game[]> {
    try {
      const { data, error } = await this._supabase
        .from(TABLE)
        .select()
        .in('id', ids);
      if (error) {
        throw new Error(`Error fetching games: ${error.message}`);
      }
      return data;

    } catch (error) {
      console.error('Error in GetGameByCode:', error);
      throw error;
    }
  }

  /**
  * Inserts a new game record into the 'games' table stored in Supabase.
  * 
  * @param {Game} game - The game object to insert into the database.
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
  public async Insert(game: Game): Promise<void> {
    try {
      const { data, error } = await this._supabase
        .from(TABLE)
        .insert(game);
      if (error) {
        throw new Error(`Error inserting data: ${error.message}`);
      }
      return data![0];
    } catch (error) {
      console.error('Error in insert:');
      throw error;
    }
  }

  /**
  * Updates an existing game record in the 'games' table stored in Supabase based on the provided game ID.
  * 
  * @param {number} id - The unique identifier of the game to update.
  * @param {Game} updatedGame - The updated game object to apply to the existing record.
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
  public async Edit(id:number, updatedGame: Game): Promise<void> {
    try {
      const { data, error } = await this._supabase
        .from(TABLE)
        .update(updatedGame)
        .eq('id', id);
      if (error) {
        throw new Error(`Error updating data: ${error.message}`);
      }
      return data![0];
    } catch (error) {
      console.error('Error in edit:');
      throw error;
    }
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
    try {
      const { error } = await this._supabase
        .from(TABLE)
        .delete()
        .eq('id', id);
      if (error) {
        throw new Error(`Error deleting data: ${error.message}`);
      }
    } catch (error) {
      console.error('Error in delete:');
      throw error;
    }
  }
}
