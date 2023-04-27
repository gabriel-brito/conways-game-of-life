import * as S from 'components/GenerationInfo/styles'

type GenerationInfoTypes = {
  generations: number
}

const Board = ({ generations }: GenerationInfoTypes) => (
  <S.GenerationsInfo>Number of generations: {generations}</S.GenerationsInfo>
)

export default Board
