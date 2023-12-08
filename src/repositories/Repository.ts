import { ITable } from "@/types/database";
import { Table } from "@/types/types";
import { SupabaseClient } from "@supabase/supabase-js";

export const GetAll = async (supabaseClient: SupabaseClient, tableName: string) => {
	try {
		const { data, error } = await supabaseClient
			.from(tableName)
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

export const GetById = async (supabaseClient: SupabaseClient, tableName: string, id: number) => {
	try {
		const { data, error } =
			await supabaseClient
				.from(tableName)
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

export const GetByIds =  async (supabaseClient: SupabaseClient, tableName: string, ids: number[]) => {
	try {
		const { data, error } = await supabaseClient
			.from(tableName)
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

export const Insert = async (supabaseClient: SupabaseClient, tableName: string, object: ITable): Promise<Table> => {
	try {
		const { data, error } = await supabaseClient
			.from(tableName)
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

export const Edit = async (supabaseClient: SupabaseClient, tableName: string, id: number, object: Table) => {
	try {
		const { data, error } = await supabaseClient
			.from(tableName)
			.update(object)
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

export const Delete = async (supabaseClient: SupabaseClient, tableName: string, id: number) => {
	try {
		const { error } = await supabaseClient
			.from(tableName)
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