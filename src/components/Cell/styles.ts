import styled from 'styled-components'
import { CellTypes } from 'components/Cell'

export const Cell = styled('span')<CellTypes>`
  background-color: ${(props) => (props.isAlive ? '#ffb86c' : 'transparent')};
  border: 1px solid #595959;
  cursor: pointer;
  display: block;
  height: 20px;
  width: 20px;
`
