import { IMapProps } from 'components/Map/types'
import client from 'graphql/client'
import { GET_PLACES } from '../graphql/queries'
import { GetPlacesQuery } from '../graphql/generated/graphql'

import HomeTemplate from 'templates/Home/Home'

export default function Home(props: IMapProps) {
  return <HomeTemplate places={props.places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: {
      places
    }
  }
}
