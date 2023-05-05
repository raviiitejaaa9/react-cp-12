// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnailItem, changeThumbnail, isTrue} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnailItem

  const onClickThumbnail = () => {
    changeThumbnail(id)
  }

  console.log(isTrue)

  const opacityApplied = isTrue ? 'opacity' : ''

  console.log(opacityApplied)

  return (
    <li className="list-item">
      <button type="button">
        <img
          className={`thumbnail-img ${opacityApplied}`}
          alt={thumbnailAltText}
          src={thumbnailUrl}
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
