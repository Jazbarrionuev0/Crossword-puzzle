import { WordsAxis } from "@/types/types"

export function getRandomCode(): string {
    let code: string = ""
    let charASCII: number = 0

    for (let i = 0; i < 4; i++) {
        charASCII = Math.floor(Math.random() * 25) + 65
        code += String.fromCharCode(charASCII)
    }

    return code
}

export function getRandomStringPairs(array: string[]): WordsAxis {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    const wordsX = shuffledArray.slice(0, 6);
    const wordsY = shuffledArray.slice(6, 12);
    return { wordsX, wordsY };
  }