import { IPlacesTemplateProps } from './types'

export default function PlacesTemplate(props: IPlacesTemplateProps) {
  const renderGallery = () => {
    const gallery = props.place.gallery

    return gallery.map((image, index) => (
      <img key={`photo-${index}`} src={image.url} alt={props.place.name} />
    ))
  }

  return (
    <>
      <h1>{props.place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: props.place.description.html }} />
      {renderGallery()}
    </>
  )
}
