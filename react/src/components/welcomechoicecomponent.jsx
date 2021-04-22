import { useState } from 'react';

const WelcomeChoiceButton = ({searchType}) => {


  const [searchClicked, setSearchClicked] = useState(false)
  const [logClicked, setLogClicked] = useState(false)


  return (
    <div>
       <button
         type="button"
         onClick={() => {
          searchType === 'Search Faults' ? setSearchClicked(!searchClicked) : setLogClicked(!logClicked);
          }}
         >{searchType}</button>
    </div>
  )
}

export default WelcomeChoiceButton



