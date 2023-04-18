import './index.css'

const ThumbnailItem = props => {
  const {item, onChangeImage} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = item
  const onSelectThumbnail = () => {
    console.log('i have clicked')
    onChangeImage(id, imageUrl, imageAltText)
  }
  return (
    <li>
      <button type="button" onClick={onSelectThumbnail} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbimage" />
      </button>
    </li>
  )
}

export default ThumbnailItem
