export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      coords: {
        Row: {
          coord: string
          created_at: string
          id: number
        }
        Insert: {
          coord: string
          created_at?: string
          id?: number
        }
        Update: {
          coord?: string
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      games: {
        Row: {
          code: string
          created_at: string
          failed: number
          guessed: number
          id: number
          round: number
        }
        Insert: {
          code: string
          created_at?: string
          failed?: number
          guessed?: number
          id?: number
          round?: number
        }
        Update: {
          code?: string
          created_at?: string
          failed?: number
          guessed?: number
          id?: number
          round?: number
        }
        Relationships: []
      }
      games_clues: {
        Row: {
          created_at: string
          game_id: number
          id: number
          user_coord_id: number
        }
        Insert: {
          created_at?: string
          game_id: number
          id?: number
          user_coord_id: number
        }
        Update: {
          created_at?: string
          game_id?: number
          id?: number
          user_coord_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "games_clues_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "games_clues_user_coord_id_fkey"
            columns: ["user_coord_id"]
            isOneToOne: false
            referencedRelation: "users_coords"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      users_coords: {
        Row: {
          coord_id: number
          created_at: string
          id: number
          user_id: number
        }
        Insert: {
          coord_id: number
          created_at?: string
          id?: number
          user_id: number
        }
        Update: {
          coord_id?: number
          created_at?: string
          id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_coords_coord_id_fkey"
            columns: ["coord_id"]
            isOneToOne: false
            referencedRelation: "coords"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_coords_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_games: {
        Row: {
          created_at: string
          game_id: number
          id: number
          user_id: number
        }
        Insert: {
          created_at?: string
          game_id: number
          id?: number
          user_id: number
        }
        Update: {
          created_at?: string
          game_id?: number
          id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_games_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_games_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      words: {
        Row: {
          created_at: string
          id: number
          word: string
        }
        Insert: {
          created_at?: string
          id?: number
          word: string
        }
        Update: {
          created_at?: string
          id?: number
          word?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
