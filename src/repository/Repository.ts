import { SupabaseClient } from "@supabase/supabase-js";

export async function GetAll(supabaseClient: SupabaseClient, tableName: string) {
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

export async function GetById(supabaseClient: SupabaseClient, tableName: string, id: number) {
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