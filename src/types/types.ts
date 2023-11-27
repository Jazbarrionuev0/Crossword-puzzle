export type Coord = {
    id: number,
    coord: string
}

export type Game = {
    id: number,
    guessed: number,
    failed: number,
    round: number,
    code: string
}

export type GameClue = {
    id: number,
    game_id: number,
    user_coord_id: number
}

export type User = {
    id: number,
    name: string
}

export type UserCoord = {
    id: number,
    user_id: number,
    coord_id: number
}

export type UserGame = {
    id: number,
    user_id: number,
    game_id: number
}

export type Word = {
    id: number,
    word: string
}

export type Table = Coord | Game | GameClue | User | UserCoord | UserGame | Word

export type UserInfo = {
    username: string,
    coord: string
}

export type Score = {
    guessed: number,
    failed: number,
    round: number
}