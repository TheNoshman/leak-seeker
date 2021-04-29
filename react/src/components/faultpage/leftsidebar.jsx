import '../../css/faultpage.css'

const LeftSidebar = ({ setLinkType, linkType, setIntroPage }) => {
  return (
    <div className='left-col col glass'>
      <div className='left-btn-div'>
        <a
          className='welcome-choice-btn glass'
          href='#'
          onClick={() => setIntroPage(true)}
        >
          Home
        </a>
      </div>

      <div className='left-btn-div'>
        <a
          className='welcome-choice-btn glass'
          href='#'
          onClick={() => {
            if (linkType === 'log') {
              setLinkType('fault-display')
            } else {
              setLinkType('log')
            }
          }}
        >
          Log a fault
        </a>
      </div>
      <div className='left-btn-div'>
        <a
          className='welcome-choice-btn glass'
          href='#'
          onClick={() => {
            if (linkType === 'about') {
              setLinkType('fault-display')
            } else {
              setLinkType('about')
            }
          }}
        >
          About
        </a>
      </div>
      <div className='left-btn-div'>
        <a
          className='welcome-choice-btn glass'
          href='#'
          onClick={() => {
            if (linkType === 'contact') {
              setLinkType('fault-display')
            } else {
              setLinkType('contact')
            }
          }}
        >
          Contact Us
        </a>
      </div>
      <div className='left-btn-div'>
        <a
          className='welcome-choice-btn glass'
          href='#'
          onClick={() => {
            if (linkType === 'report') {
              setLinkType('fault-display')
            } else {
              setLinkType('report')
            }
          }}
        >
          Report a problem
        </a>
      </div>
    </div>
  )
}

export default LeftSidebar
