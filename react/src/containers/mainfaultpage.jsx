import '../css/faultpage.css';
import { useState, useEffect } from 'react';
import FaultListContainer from './faultlistcontainer';
import LeftSidebar from '../components/faultpage/leftsidebar';
import RightDataDisplay from '../components/faultpage/rightdatadisplay';
import { getFaultsByReg } from '../service/service-api';

const MainFaultPageContainer = ({ searchedReg }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allFaultsObject, setAllFaults] = useState([]);

  // GRABS FAULTS FROM DATABASE
  useEffect(() => {
    getFaultsByReg(searchedReg)
      .then((fault) => setAllFaults([fault]))
      .then(() => setIsLoading(false));
  }, [searchedReg]);

  return (
    <div className="columns-container">
      <LeftSidebar />
      {!isLoading && allFaultsObject.length > 0 ? (
        <div className="placeholder">
          <FaultListContainer
            isLoading={isLoading}
            allFaultsObject={allFaultsObject}
          />
          <RightDataDisplay />
        </div>
      ) : (
        <div className="placeholder">
          <>No faults found</>
        </div>
      )}
    </div>
  );
};

export default MainFaultPageContainer;
