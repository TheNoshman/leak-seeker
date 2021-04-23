import '../css/faultpage.css'
import  FaultListContainer  from './faultlistcontainer';
import  LeftSidebar  from '../components/faultpage/leftsidebar';
import  RightDataDisplay  from '../components/faultpage/rightdatadisplay';


const MainFaultPageContainer = () => {
  return (
    <div className='columns-container'>
      <LeftSidebar />
      <FaultListContainer />
      <RightDataDisplay />
    </div>
  )
}

export default MainFaultPageContainer