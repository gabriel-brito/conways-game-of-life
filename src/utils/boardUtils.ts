import { numberOfRows, numberOfColumns } from 'utils/constants'

export const generateEmptyBoard = (): number[][] => {
  const result: number[][] = []

  for (let counter = 0; counter < numberOfRows; counter++) {
    result.push(Array.from(Array(numberOfColumns), () => 0))
  }

  // Setting up "The Glider" (https://conwaylife.com/wiki/Glider)
  result[13][15] = 1
  result[13][16] = 1
  result[13][17] = 1
  result[12][17] = 1
  result[11][16] = 1

  return result
}

export const generateRandomBoard = (): number[][] => {
  const result: number[][] = []

  for (let counter = 0; counter < numberOfRows; counter++) {
    result.push(
      Array.from(Array(numberOfColumns), () => (Math.random() > 0.8 ? 1 : 0))
    )
  }

  return result
}

export const deepBoardCopy = (board: number[][]) =>
  JSON.parse(JSON.stringify(board))
