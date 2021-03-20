import Link from 'next/link'

import { ILinkWrapperProps } from './types'

import * as S from './styles'

const LinkWrapper = (props: ILinkWrapperProps) => (
  <S.Wrapper>
    <Link href={props.href}>{props.children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
