export type IGallery = {
  url: string
  width: number
  height: number
}

export type IPlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: IGallery[]
  }
}
