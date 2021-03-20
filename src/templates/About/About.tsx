import LinkWrapper from 'components/LinkWrapper/LinkWrapper'

import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        possimus minima nam officiis voluptatibus officia, illum, veritatis
        nihil, delectus facilis ipsum consequuntur laboriosam sapiente minus
        neque tenetur obcaecati explicabo expedita?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
