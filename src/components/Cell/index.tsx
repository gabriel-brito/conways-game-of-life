import * as S from 'components/Cell/styles'
import { ReactEventHandler } from 'react'

export type CellTypes = {
  isAlive?: number
  setNewState?: ReactEventHandler
}

const Cell = ({ isAlive, setNewState }: CellTypes) => (
  <S.Cell data-testid="cell" isAlive={isAlive} onClick={setNewState} />
)

export default Cell
