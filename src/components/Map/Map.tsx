import { useRouter } from 'next/dist/client/router'

import { IMapProps } from './types'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = (props: IMapProps) => {
  const router = useRouter()

  const renderMarker = () => {
    const placesToMark = props.places ? props.places : []

    return placesToMark.map((place) => {
      const { latitude, longitude } = place.location
      return (
        <Marker
          key={`place-${place.id}`}
          position={[latitude, longitude]}
          title={place.name}
          eventHandlers={{
            click: () => {
              console.log('aqui')
              router.push(`/place/${place.slug}`)
            }
          }}
        />
      )
    })
  }
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />
      {props.places && renderMarker()}
    </MapContainer>
  )
}

export default Map
