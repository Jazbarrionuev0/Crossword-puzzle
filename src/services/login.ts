import GameRepository from "@/repositories/GameRepository";
import UserRepository from "@/repositories/UserRepository";
import { Game, User } from "@/types/types";
import { getRandomCoord } from "@/utils/coords";
import { getRandomCode } from "@/utils/functions";

export const handleCreateGame = async (username:string) => {
    // create a new instance of GameRepository
     //let gameRepository = new GameRepository()
     //let userRepository = new UserRepository()

    // use the method Create() to create a new game
    // retrieve the response and store it in a variable
     //let game: Game = await gameRepository.Create()

     //create a user
     //let user:User = {id: 0, name: username, avatar: ''}

     //userRepository.Insert

     // create a random coord

     //let coord = getRandomCoord()
}

export const handleJoineGame = () => {
    alert('join game');
}