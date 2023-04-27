import * as S from 'components/Layout/styles'
import { ReactNode } from 'react'

type LayoutTypes = {
  children: ReactNode
}

const Layout = ({ children }: LayoutTypes) => <S.Layout>{children}</S.Layout>

export default Layout
