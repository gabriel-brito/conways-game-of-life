import { ReactEventHandler, ReactNode } from 'react'
import * as S from 'components/Button/styles'

type ButtonTypes = {
  children: ReactNode
  clickFunction?: ReactEventHandler
}

const Button = ({ children, clickFunction }: ButtonTypes) => (
  <S.Button onClick={clickFunction}>{children}</S.Button>
)

export default Button
