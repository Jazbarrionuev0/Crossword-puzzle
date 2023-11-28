import GameRepository from "@/repositories/GameRepository";

export const handleCreateGame = () => {
    const gameRepository = new GameRepository()

    alert('create game');
}

export const handleJoineGame = () => {
    alert('join game');
}