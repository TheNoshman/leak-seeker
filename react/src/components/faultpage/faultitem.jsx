import '../../css/faultpage.css';
import { useState, useCallback } from 'react';

import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'

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
   img1,
   img2,
   img3,
   img4
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };



  let setBorder = () => {

    switch (true) {
      case rating < 10 :
      return `entire-container col glass green`
      break
      case rating < 50 :
      return `entire-container col glass orange`
      break
      case rating < 100 :
      return `entire-container col glass red`
      break
      default:
      return `entire-container col glass`
    }
  }

  return (
    <div className={setBorder()}>
      <div className="counter-section">
        <div><i class="fas fa-arrow-up fa-lg" ></i></div>
        <div>
        <p>{rating}</p>
        </div>
        <div><i class="fas fa-arrow-down fa-lg"></i></div>
      </div>





        {!expand ? (

          <div className="main-fault-section">
        <p>Summary: {summary}</p>
        <p>Description: {description}</p>
        </div>)

        :

        (

          <div className="expanded-container ">
            <div className="expanded-text">
            <p>Summary: {summary}</p>
        <p>Description: {description}</p>
              <p>Area of fault: {area}</p>
              <p>Build year: {year}</p>
              <p>Price to fix: £{priceToFix}</p>
              <p>Reported on: {faultLogged}</p>
            </div>

            <div className="image-section">
              {images.map((src, index) => (
                <img
                  className='image-thumbnail'
                  src={src}
                  onClick={() => openImageViewer(index)}
                  width="200px"
                  key={index}
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


      <div className="right-fault-section">
      {expand ?
        <i
        class="fas fa-arrow-circle-up arrow fa-3x"
        onClick={() => setExpand(!expand)}></i>
        :
        <i
        class="fas fa-arrow-circle-down arrow fa-3x"
        onClick={() => setExpand(!expand)}></i>
      }

      </div>
    </div>
  );
};

export default FaultItem;
