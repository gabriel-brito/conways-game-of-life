import * as S from 'components/Board/styles'
import { ReactNode } from 'react'

type BoardTypes = {
  children: ReactNode
}

const Board = ({ children }: BoardTypes) => <S.Board>{children}</S.Board>

export default Board
