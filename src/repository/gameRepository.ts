import supabase from "@/utils/supabase";
import { Game } from "@/types/types";

const TABLE = 'games';

// GET      ---------------------------------

export const getAllGames = async () => {
    let {data} = await supabase
                .from(TABLE)
                .select()

    return data
}

// INSERT   ---------------------------------

// EDIT     ---------------------------------

// DELETE   ---------------------------------