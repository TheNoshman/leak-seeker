import '../css/faultpage.css';
import { useState, useEffect } from 'react';
import FaultListContainer from './faultlistcontainer';
import LeftSidebar from '../components/faultpage/leftsidebar';
import RightDataDisplay from '../components/faultpage/rightdatadisplay';
import { getFaultsByReg } from '../service/service-api';
import FaultLogEntry from '../components/faultpage/faultlogentry';

const MainFaultPageContainer = ({ searchedReg, setSearchedReg }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allFaultsObject, setAllFaults] = useState([]);

  const [linkType, setLinkType] = useState('fault-display');

  // GRABS FAULTS FROM DATABASE
  useEffect(() => {
    getFaultsByReg(searchedReg)
      .then((fault) => setAllFaults([fault]))
      .then(() => setIsLoading(false));
  }, [searchedReg]);

  switch (linkType) {
    case 'log':
      return (
      <div className="columns-container">
        <LeftSidebar setLinkType={setLinkType} linkType={linkType}/>
        <FaultLogEntry />;
      </div>
      )
    case 'fault-display':
      return (
        <div className="columns-container">
          <LeftSidebar setLinkType={setLinkType} />
          <div className="placeholder">
            <FaultListContainer
              isLoading={isLoading}
              allFaultsObject={allFaultsObject}
              setSearchedReg={setSearchedReg}
            />
            <RightDataDisplay />
          </div>
        </div>
      );
    default: return <p>DEFAULT</p>
  }
};

//   return (
//     <div className="columns-container">

//       {!isLoading && allFaultsObject.length > 0 && !logFault ? (
//         <div className="placeholder">
//           <FaultListContainer
//             isLoading={isLoading}
//             allFaultsObject={allFaultsObject}
//             setSearchedReg={setSearchedReg}
//           />
//           <RightDataDisplay />
//         </div>
//       ) : (
//         <FaultLogEntry />
//       )}
//     </div>
//   );
// };

export default MainFaultPageContainer;
