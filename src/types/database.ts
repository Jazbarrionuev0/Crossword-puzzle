export type ICoord = {
    coord: string
}

export type IGame = {
    code: string
}

export type IGameClue = {
    game_id: number,
    user_coord_id: number
}

export type IUser = {
    name: string,
    avatar: string
}

export type IUserCoord = {
    user_id: number,
    coord_id: number
}

export type IUserGame = {
    user_id: number,
    game_id: number
}

export type IWord = {
    word: string
}

export type ITable = ICoord | IGame | IGameClue | IUser | IUserCoord | IUserGame | IWord