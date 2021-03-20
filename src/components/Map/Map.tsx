import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { IMapProps } from './types'

const Map = (props: IMapProps) => {
  const renderMarker = () => {
    const placesToMark = props.places ? props.places : []

    return placesToMark.map((place) => {
      const { latitude, longitude } = place.location
      return (
        <Marker
          key={`place-${place.id}`}
          position={[latitude, longitude]}
          title={place.name}
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
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.places && renderMarker()}
    </MapContainer>
  )
}

export default Map
