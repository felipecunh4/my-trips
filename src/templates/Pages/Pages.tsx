import { IPageTemplateProps } from './types'

import LinkWrapper from 'components/LinkWrapper/LinkWrapper'

import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

const PagesTemplate = (props: IPageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="" />
    </LinkWrapper>

    <S.Heading>{props.heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
    </S.Body>
  </S.Content>
)

export default PagesTemplate
