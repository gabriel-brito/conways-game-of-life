import { useState, useRef, useCallback, useEffect } from 'react'

import Layout from 'components/Layout'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import GenerationInfo from 'components/GenerationInfo'
import Board from 'components/Board'
import Cell from 'components/Cell'
import Button from 'components/Button'

import {
  deepBoardCopy,
  generateEmptyBoard,
  generateRandomBoard
} from 'utils/boardUtils'
import { numberOfRows, numberOfColumns, operations } from 'utils/constants'

export default function App() {
  const [board, setBoard] = useState(() => generateEmptyBoard())
  const [generationsCounter, setGenerationsCounter] = useState(1)
  const [evolving, setEvolving] = useState(false)
  const evolvingRef = useRef(evolving)
  evolvingRef.current = evolving

  const handleClear = () => {
    setBoard(() => generateEmptyBoard())
    setGenerationsCounter(1)
  }
  const handleRandomBoard = () => {
    setBoard(() => generateRandomBoard())
    setGenerationsCounter(1)
  }

  const handleCellLifecycle = (row: number, col: number) => {
    const isCellAlive = board[row][col] ? 0 : 1
    const newBoard = deepBoardCopy(board)

    newBoard[row][col] = isCellAlive

    setBoard(newBoard)
  }

  const handleStart = () => {
    setEvolving(!evolving)

    if (!evolving) {
      evolvingRef.current = true
    }
  }

  const runLifecycle = useCallback(
    (board: number[][]) => {
      if (!evolvingRef.current) return

      const newBoard = deepBoardCopy(board)

      for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
          let neighbors = 0

          operations.forEach(([x, y]) => {
            const currRow = rowIndex + x
            const currCol = colIndex + y
            const rowLimit = currRow >= 0 && currRow < numberOfRows
            const colLimit = currCol >= 0 && currCol < numberOfColumns

            if (rowLimit && colLimit) {
              neighbors += board[currRow][currCol]
            }
          })

          const willDie = neighbors < 2 || neighbors > 3
          const WillBorn = board[rowIndex][colIndex] === 0 && neighbors === 3

          if (willDie) newBoard[rowIndex][colIndex] = 0
          if (WillBorn) newBoard[rowIndex][colIndex] = 1
        }
      }

      setBoard(newBoard)
      setGenerationsCounter(generationsCounter + 1)
    },
    [generationsCounter]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (evolvingRef) {
        runLifecycle(board)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [board, runLifecycle])

  return (
    <Layout>
      <Heading>Conway&rsquo;s game of life</Heading>
      <GenerationInfo generations={generationsCounter} />
      <Board>
        {board.map((rows: number[], index: number) =>
          rows.map((isAlive, colIndex: number) => (
            <Cell
              isAlive={isAlive}
              key={`board-cell-[${index}]-[${colIndex}]`}
              setNewState={() => handleCellLifecycle(index, colIndex)}
            />
          ))
        )}
      </Board>

      <Footer>
        <Button clickFunction={handleClear}>Clear</Button>
        <Button clickFunction={handleStart}>
          {evolving ? 'Stop' : 'Start'}
        </Button>
        <Button clickFunction={handleRandomBoard}>Random</Button>
      </Footer>
    </Layout>
  )
}
