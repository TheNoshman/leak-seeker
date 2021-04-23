import '../../css/faultpage.css';
// import { useState } from 'react';

const FaultItem = ({ summary, description, year, area, priceToFix, faultLogged, rating }) => {
  // const [userRating, setUserRating] = useState(0)

  // const handleRatingChange = (upOrDown) => {
  //   console.log(upOrDown)
  // }

  return (
    <div className="entire-container">
      <div className="counter-section">
        <p>{rating}</p>
      </div>
      <div className="main-fault-section">
        <p>MAIN FAULT</p>
      </div>
      <div className="right-fault-section">
        <p>EXPAND</p>
      </div>

    </div>
  );
};

export default FaultItem;

