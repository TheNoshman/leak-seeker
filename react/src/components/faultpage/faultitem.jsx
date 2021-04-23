import '../../css/faultpage.css';
import { useState } from 'react';

const FaultItem = ({ summary, description, year, area, priceToFix, faultLogged, rating }) => {

  const [expand, setExpand] = useState(false)

  // const handleRatingChange = (upOrDown) => {
  //   console.log(upOrDown)
  // }

  return (
    <div className="entire-container">
      <div className="counter-section">
        <p>{rating}</p>
      </div>

      <div className="main-fault-section">
        <p>Summary: {summary}</p>
        <p>Description: {description}</p>
        {expand &&
          <div className='expanded-text'>
            <p>Area of fault: {area}</p>
            <p>Build year: {year}</p>
            <p>Price to fix: £{priceToFix}</p>
            <p>Reported on: {faultLogged}</p>
          </div>
        }
      </div>
      <div className="right-fault-section">
        <button type="button" onClick={(() => setExpand(!expand))}>Expand</button>
      </div>

    </div>
  );
};

export default FaultItem;

