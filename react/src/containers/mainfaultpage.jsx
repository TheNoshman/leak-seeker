import '../css/faultpage.css'
import { useState, useEffect } from 'react'
import FaultListContainer from './faultlistcontainer'
import LeftSidebar from '../components/faultpage/leftsidebar'
import RightDataDisplay from '../components/faultpage/rightdatadisplay'
import { getFaultsByReg } from '../service/service-api'
import FaultLogEntry from '../components/faultpage/faultlogentry.jsx'

const MainFaultPageContainer = ({ searchedReg, setSearchedReg, setIntroPage }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [allFaultsObject, setAllFaults] = useState([])

  const [linkType, setLinkType] = useState('fault-display')

  // GRABS FAULTS FROM DATABASE
  useEffect(() => {
    getFaultsByReg(searchedReg)
      .then((fault) => setAllFaults([fault]))
      .then(() => setIsLoading(false))
  }, [searchedReg])

  switch (linkType) {
    case 'log':
      return (
        <div className='columns-container glass'>
          <LeftSidebar setLinkType={setLinkType} linkType={linkType} setIntroPage={setIntroPage} />
          <FaultLogEntry setLinkType={setLinkType} setSearchedReg={setSearchedReg} />
        </div>
      )
    case 'fault-display':
      return (
        <div className='columns-container glass'>
          <LeftSidebar setLinkType={setLinkType} setIntroPage={setIntroPage} />
          <div className='fault-list-box'>
            <FaultListContainer
              isLoading={isLoading}
              allFaultsObject={allFaultsObject}
              setSearchedReg={setSearchedReg}
            />
            {allFaultsObject.length > 0 &&
              <RightDataDisplay allFaultsObject={allFaultsObject} />}
          </div>
        </div>
      )
    case 'about':
      return (
        <div className='columns-container glass'>
          <LeftSidebar setLinkType={setLinkType} linkType={linkType} setIntroPage={setIntroPage} />
          <p>ABOUT PAGE</p>

        </div>
      )
    case 'contact':
      return (
        <div className='columns-container glass'>
          <LeftSidebar setLinkType={setLinkType} linkType={linkType} setIntroPage={setIntroPage} />
          <p>CONTACT</p>

        </div>
      )
    case 'report':
      return (
        <div className='columns-container glass'>
          <LeftSidebar setLinkType={setLinkType} linkType={linkType} setIntroPage={setIntroPage} />
          <p>REPORT</p>

        </div>
      )
    default: return <p>DEFAULT</p>
  }
}

export default MainFaultPageContainer
