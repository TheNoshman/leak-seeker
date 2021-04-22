import '../css/welcomecomponent.css'
import WelcomeChoiceButton from './welcomechoicecomponent'

import { useState } from 'react';

const WelcomeComponent = () => {


  // const [searchForFaults, setSearchForFaults] = useState(false)
  // const [logNewFault, setLogNewFault] = useState(false)


  return (
    <div className='welcome-container'>
      <h1>Welcome</h1>
      <h3>Please choose an option:</h3>
      <div className='button-container'>
        <WelcomeChoiceButton searchType='Search Faults'/>
        <WelcomeChoiceButton searchType='Register Fault'/>
      </div>
    </div>
  )
}

export default WelcomeComponent