import SearchBar from '../components/faultpage/searchbar';
import FaultItem from '../components/faultpage/faultitem';

// MAPS EACH FAULT TO A FAULT ITEM COMPONENT
const FaultListContainer = ({ isLoading, allFaultsObject, setSearchedReg }) => {

  const faultsArray = allFaultsObject.map((faultArray) =>
    faultArray.faults.map((fault, index) => (
      <FaultItem
        key={faultArray._id + index}
        summary={fault.summary}
        description={fault.description}
        year={fault.year}
        area={fault.area}
        priceToFix={fault.priceToFix}
        faultLogged={fault.faultLogged}
        rating={fault.rating}
        imageIndex={index}
      />
    ))
  );

  // RENDERS ALL FAULTS IN FAULT LIST
  return (
    <div className="middle-col col">
      <div className="search-and-make-model ">
        <SearchBar setSearchedReg={setSearchedReg}/>
        {!isLoading && allFaultsObject[0] && (
          <div className="make-model-div ">
            <p>Current search:</p>
            <div className='m-m'>
            <span>Make: <h3>{allFaultsObject[0].make}</h3></span>
            <span>Model: <h3>{allFaultsObject[0].model}</h3></span>
            </div>
          </div>
        )}
      </div>
      <div className="all-faults-container-div">{faultsArray}</div>
    </div>
  );
};

export default FaultListContainer;
