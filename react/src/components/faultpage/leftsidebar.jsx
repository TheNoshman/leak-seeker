
import '../../css/faultpage.css';

const LeftSidebar = ({ setLinkType, linkType}) => {



  return (
    <div className='left-col col'>
      <div>
        <button onClick={(() => {
          if (linkType === 'log') {
            setLinkType('fault-display')
          } else {
            setLinkType('log')
          }
        })}>Log a fault</button>
      </div>
      <div>
      <button onClick={(() => {
          if (linkType === 'about') {
            setLinkType('fault-display')
          } else {
            setLinkType('about')
          }
        })}>About</button>
      </div>
      <div>
      <button onClick={(() => {
          if (linkType === 'contact') {
            setLinkType('fault-display')
          } else {
            setLinkType('contact')
          }
        })}>Contact Us</button>
      </div>
      <div>
      <button onClick={(() => {
          if (linkType === 'report') {
            setLinkType('fault-display')
          } else {
            setLinkType('report')
          }
        })}>Report a problem</button>
      </div>

    </div>
  )
}

export default LeftSidebar