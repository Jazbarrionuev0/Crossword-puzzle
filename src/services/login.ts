import GameRepository from "@/repositories/GameRepository";
import UserRepository from "@/repositories/UserRepository";
import { IUser } from "@/types/database";
import { Game, GameUser, User } from "@/types/types";

let gameRepository = new GameRepository()
let userRepository = new UserRepository()

export const createGame = async ({ avatar, name }: IUser): Promise<void> => {
    let game: Game = await gameRepository.Create()
    let user: User = await userRepository.Insert({ avatar, name })
}

export const joinGame = async (code:string): Promise<boolean> => {
    let game: Game | null = await gameRepository.GetGameByCode(code)
    if (game != null) return false
    else return true
}