import '../../css/faultpage.css'
import moment from 'moment'
import { useState, useCallback } from 'react'

import img1 from '../../images/img1.jpg'

import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'

import img9 from '../../images/img9.jpg'
import img10 from '../../images/img10.jpg'
import img11 from '../../images/img11.jpg'
import img12 from '../../images/img12.jpg'

import ImageViewer from 'react-simple-image-viewer'

const FaultItem = ({
  summary,
  description,
  year,
  area,
  priceToFix,
  faultLogged,
  rating,
  imageIndex
}) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [expand, setExpand] = useState(false)
  const [faultRating, setFaultRating] = useState(rating)

  const handleRatingChange = (upOrDown) => {
    if (upOrDown === 'up') {
      setFaultRating(faultRating + 1)
    } else {
      setFaultRating(faultRating - 1)
    }
  }

  const images = [
    [img1],
    [img5, img6, img7, img8],
    [img9, img10, img11, img12]
  ]

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  const setBorder = () => {
    switch (true) {
      case faultRating < 10:
        return 'entire-container col glass green'

      case faultRating < 50:
        return 'entire-container col glass orange'

      default:
        return 'entire-container col glass red'
    }
  }

  const setRatingColour = () => {
    switch (true) {
      case faultRating < 10:
        return 'icn-green'

      case faultRating < 50:
        return 'icn-orange'

      default:
        return 'icn-red'
    }
  }

  return (
    <div className={setBorder()}>
      <div className='counter-section'>
        <div>
          <i
            class='fas fa-arrow-up fa-lg icn'
            onClick={() => handleRatingChange('up')}
          />
        </div>

        <div>
          <p className={setRatingColour()}>{faultRating}</p>
        </div>
        <div>
          <i
            class='fas fa-arrow-down fa-lg icn'
            onClick={() => handleRatingChange('down')}
          />
        </div>
      </div>
      {!expand

        ? (
          <div className='main-fault-section '>
            <h4 className='fault-item-detail'>Summary: {summary}</h4>

            <p className='fault-item-detail'>Price to fix: £{priceToFix}</p>
          </div>
          )
        : (
          <div className='expanded-container '>
            <div className='expanded-text'>
              <p className='fault-item-detail'>Summary: {summary}</p>
              <p className='fault-item-detail'>Price to fix: £{priceToFix}</p>
              <p className='fault-item-detail'>Area of fault: {area}</p>
              <p className='fault-item-detail'>Build year: {year}</p>
              <p className='fault-item-detail'>Description: {description}</p>
              <p className='fault-item-detail'>
                Reported on:{' '}
                {moment(faultLogged).format('MMMM Do YYYY, h:mm:ss a')}
              </p>
            </div>

            <div className='image-section'>
              {images[imageIndex].map((src, index) => (
                <img
                  className='image-thumbnail'
                  src={src}
                  onClick={() => openImageViewer(index)}
                  width='200px'
                  key={index}
                  alt=''
                />
              ))}

              {isViewerOpen && (
                <ImageViewer
                  src={images}
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                />
              )}
            </div>
          </div>
          )}

      <div className='right-fault-section'>

        {expand
          ? (

            <i
              class='fas fa-arrow-circle-up arrow fa-3x'
              onClick={() => setExpand(!expand)}
            />
            )
          : (
            <i
              class='fas fa-arrow-circle-down arrow fa-3x'
              onClick={() => setExpand(!expand)}
            />
            )}
      </div>
    </div>
  )
}

export default FaultItem
