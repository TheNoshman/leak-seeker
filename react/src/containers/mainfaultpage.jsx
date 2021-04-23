import '../css/faultpage.css';
import { useState, useEffect } from 'react';
import FaultListContainer from './faultlistcontainer';
import LeftSidebar from '../components/faultpage/leftsidebar';
import RightDataDisplay from '../components/faultpage/rightdatadisplay';
import { getAllFaults } from '../service/service-api';

const MainFaultPageContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allFaults, setAllFaults] = useState([]);

  // GRABS FAULTS FROM DATABASE
  useEffect(() => {
  getAllFaults().then((faults) => setAllFaults(faults))
  .then(() => setIsLoading(false))
  }, []);

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
