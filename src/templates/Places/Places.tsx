import { useRouter } from 'next/dist/client/router'

import { IPlacesTemplateProps } from './types'

import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper/LinkWrapper'

import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export default function PlacesTemplate(props: IPlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  const renderGallery = () => {
    const gallery = props.place.gallery

    return gallery.map((image, index) => (
      <Image
        key={`photo-${index}`}
        src={image.url}
        alt={props.place.name}
        width={1000}
        height={600}
        quality={75}
      />
    ))
  }

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{props.place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: props.place.description?.html }}
          />
          <S.Gallery>{renderGallery()}</S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
