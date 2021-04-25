import '../../css/faultpage.css';
import { useState, useCallback } from 'react';

import ImageViewer from 'react-simple-image-viewer';

const FaultItem = ({
  summary,
  description,
  year,
  area,
  priceToFix,
  faultLogged,
  rating,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const [expand, setExpand] = useState(false);

  // const handleRatingChange = (upOrDown) => {
  //   console.log(upOrDown)
  // }

  const images = [
    'http://placeimg.com/1200/800/nature',
    'http://placeimg.com/800/1200/nature',
    'http://placeimg.com/1920/1080/nature',
    'http://placeimg.com/1500/500/nature',
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="entire-container">
      <div className="counter-section">
        <p>{rating}</p>
      </div>

      <div className="main-fault-section">
        <p>Summary: {summary}</p>
        <p>Description: {description}</p>
        {expand && (
          <div className="expanded-container">
            <div className="expanded-text">
              <p>Area of fault: {area}</p>
              <p>Build year: {year}</p>
              <p>Price to fix: £{priceToFix}</p>
              <p>Reported on: {faultLogged}</p>
            </div>

            <div className="image-section">
              {images.map((src, index) => (
                <img
                  src={src}
                  onClick={() => openImageViewer(index)}
                  width="300"
                  key={index}
                  style={{ margin: '2px' }}
                  alt=""
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
      </div>

      <div className="right-fault-section">
        <button type="button" onClick={() => setExpand(!expand)}>
          Expand
        </button>
      </div>
    </div>
  );
};

export default FaultItem;
