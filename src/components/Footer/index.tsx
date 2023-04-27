import * as S from 'components/Footer/styles'
import { ReactNode } from 'react'

type FooterTypes = {
  children: ReactNode
}

const Footer = ({ children }: FooterTypes) => <S.Footer>{children}</S.Footer>

export default Footer
