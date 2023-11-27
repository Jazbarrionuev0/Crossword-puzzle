import supabase from "@/utils/supabase";
import { Word } from "@/types/types";
import { Delete, Edit, GetAll, GetById, GetByIds, Insert } from "./Repository";

const TABLE = 'words';
type Object = Word
