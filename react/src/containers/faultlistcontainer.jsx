import SearchBar from '../components/faultpage/searchbar';
import FaultItem from '../components/faultpage/faultitem';

const FaultListContainer = ({allFaults}) => {

  const faultsArray = allFaults.map((faultArray) => (
    faultArray.faults.map((fault) => (
      <FaultItem
        rating={fault.area}
      />

      ))
  ));

  return (
    <div className="middle-col col">
      <SearchBar />
      <div className='all-faults-container-div'>
        {faultsArray}
      </div>
    </div>
  );
};

export default FaultListContainer;




