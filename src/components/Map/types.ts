interface IPlace {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export interface IMapProps {
  places?: IPlace[]
}
