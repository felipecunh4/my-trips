import dynamic from 'next/dynamic'

import LinkWrapper from 'components/LinkWrapper/LinkWrapper'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <Map />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
    </>
  )
}
