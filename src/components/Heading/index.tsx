import * as S from 'components/Heading/styles'

type HeadingTypes = {
  children: string
}

const Heading = ({ children }: HeadingTypes) => (
  <S.Heading>{children}</S.Heading>
)

export default Heading
