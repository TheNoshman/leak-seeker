import '../css/overallcontainerpage.css'
import WelcomeContainer from '../containers/welcomecontainer'
import MainFaultPageContainer from '../containers/mainfaultpage'
import { useState } from 'react'

const OverallMainContainer = () => {

  const [introPage, setIntroPage] = useState(true);

  return (
      <div className='mainpage'>
      {introPage ?
        <WelcomeContainer setIntroPage={setIntroPage}/>
        :
        <MainFaultPageContainer />
      }
      </div>
  )
}

export default OverallMainContainer