import SearchBar from '../components/faultpage/searchbar';
import FaultItem from '../components/faultpage/faultitem';

const FaultListContainer = () => {
  return (
    <div className="middle-col col">
      <SearchBar />
      <div>
        <FaultItem />
        <FaultItem />
      </div>
    </div>
  );
};

export default FaultListContainer;




//         {!status ? (
//           <EventContainer allEvents={events} />
//           ) : <>Still loading...</>
//       }
//           <CreateContainer updaterFunc={updaterFunc}/>
//         </div>
//       </div>
//     );
