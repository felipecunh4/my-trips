import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'

import client from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'graphql/generated/graphql'
import { IPlacesTemplateProps } from 'templates/Places/types'

import PlacesTemplate from 'templates/Places/Places'

export default function Place(props: IPlacesTemplateProps) {
  const router = useRouter()

  // retorna um loading ou qlqer coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return <PlacesTemplate place={props.place} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}
