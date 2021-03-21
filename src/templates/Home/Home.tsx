import dynamic from 'next/dynamic'

import { IMapProps } from 'components/Map/types'

import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper/LinkWrapper'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map/Map'), { ssr: false })

export default function HomeTemplate(props: IMapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went ans show more informations and photos when clicked."
        canonical="https://my-trips.felipecunh4.com.br/"
        openGraph={{
          images: [
            {
              url: 'https://my-trips.felipecunh4.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <Map places={props.places} />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
    </>
  )
}
