import '../css/faultpage.css';
import { useState, useEffect } from 'react';
import FaultListContainer from './faultlistcontainer';
import LeftSidebar from '../components/faultpage/leftsidebar';
import RightDataDisplay from '../components/faultpage/rightdatadisplay';

const MainFaultPageContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [allFaults, setAllFaults] = useState([
    {
      rating: 17,
    },
    {
      rating: 22,
    },
  ]);

  // useEffect(() => {
  // getFaults().then((fault) => setAllFaults(fault))
  // .then(() => setIsLoading(false))
  // }, []);

  return (
    <div className="columns-container">
      <LeftSidebar />
      {!isLoading ? (
        <div className='placeholder'>
          <FaultListContainer allFaults={allFaults} />
          <RightDataDisplay />
        </div>
      ) : (
        <div className='placeholder'>
          <>Loading...</>
        </div>
      )}
    </div>
  );
};

export default MainFaultPageContainer;
