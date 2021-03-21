import dynamic from 'next/dynamic'

import { IMapProps } from 'components/Map/types'

import LinkWrapper from 'components/LinkWrapper/LinkWrapper'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map/Map'), { ssr: false })

export default function HomeTemplate(props: IMapProps) {
  return (
    <>
      <Map places={props.places} />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
    </>
  )
}
