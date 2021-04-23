import SearchBar from '../components/faultpage/searchbar';
import FaultItem from '../components/faultpage/faultitem';

// MAPS EACH FAULT TO A FAULT ITEM COMPONENT
const FaultListContainer = ({ allFaults }) => {
  const faultsArray = allFaults.map((faultArray) =>
    faultArray.faults.map((fault, index) =>
      <FaultItem
        key={faultArray._id + index }
        summary={fault.summary}
        description={fault.description}
        year={fault.year}
        area={fault.area}
        priceToFix={fault.priceToFix}
        faultLogged={fault.faultLogged}
        rating={fault.rating}
      />)
  );

  // RENDERS ALL FAULTS IN FAULT LIST
  return (
    <div className="middle-col col">
      <SearchBar />
      <div className="all-faults-container-div">{faultsArray}</div>
    </div>
  );
};

export default FaultListContainer;


