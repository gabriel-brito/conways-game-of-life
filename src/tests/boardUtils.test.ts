import {
  deepBoardCopy,
  generateEmptyBoard,
  generateRandomBoard
} from 'utils/boardUtils'
import { numberOfRows, numberOfColumns } from 'utils/constants'

describe('boardUtils', () => {
  describe('generateEmptyBoard', () => {
    it('should have correctly length', () => {
      expect(generateEmptyBoard()).toHaveLength(numberOfRows)
    })

    it('should have correctly columns length', () => {
      const emptyBoard = generateEmptyBoard()

      for (let counter = 0; counter < emptyBoard.length; counter++) {
        expect(emptyBoard[counter]).toHaveLength(numberOfColumns)
      }
    })

    it('should have the glider pattern as standard', () => {
      const emptyBoard = generateEmptyBoard()

      expect(emptyBoard[13][15]).toBe(1)
      expect(emptyBoard[13][16]).toBe(1)
      expect(emptyBoard[13][17]).toBe(1)
      expect(emptyBoard[12][17]).toBe(1)
      expect(emptyBoard[11][16]).toBe(1)
    })
  })

  describe('generateRandomBoard', () => {
    it('should have correctly length', () => {
      expect(generateRandomBoard()).toHaveLength(numberOfRows)
    })

    it('should have correctly columns length', () => {
      const randomBoard = generateRandomBoard()

      for (let counter = 0; counter < randomBoard.length; counter++) {
        expect(randomBoard[counter]).toHaveLength(numberOfColumns)
      }
    })
  })

  describe('deepBoardCopy', () => {
    it('should have copied deeply', () => {
      const board = generateRandomBoard()
      const deepCopyBoard = deepBoardCopy(board)

      expect(deepCopyBoard).toStrictEqual(board)
    })
  })
})
