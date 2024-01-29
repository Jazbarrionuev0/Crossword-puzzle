import GameRepository from "@/repositories/GameRepository";
import UserGameRepository from "@/repositories/UserGameRepository";
import UserRepository from "@/repositories/UserRepository";
import { IUser } from "@/types/database";
import { Game, User, UserGame } from "@/types/types";

let gameRepository = new GameRepository()
let userRepository = new UserRepository()
let userGameRepository = new UserGameRepository()

export const createGame = async (iUser: IUser): Promise<string> => {
    let game: Game = await gameRepository.Create()
    let user: User = await userRepository.Insert(iUser)
    let userGame: UserGame = await userGameRepository.Insert({ game_id: game.id, user_id: user.id })

    return game.code

}

export const joinGame = async (code: string, iUser: IUser): Promise<boolean> => {
    let game: Game | null = await gameRepository.GetGameByCode(code.toUpperCase())
    if (game == null) {
        alert('codigo invalido')
        return true
    }

    let userGameCount: number = await userGameRepository.Count(game.id)
    if (userGameCount >= 4) {
        alert('sala llena')
        return true
    }

    let user: User = await userRepository.Insert(iUser)
    let userGame: UserGame = await userGameRepository.Insert({ game_id: game.id, user_id: user.id })

    return false
}

export const startGame = async (users: User[]) => {
console.log(users);
    alert('start')
}