import styled from 'styled-components'
import { numberOfColumns } from 'utils/constants'

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${numberOfColumns}, 20px);
  margin: 0 auto;
  width: fit-content;
`
