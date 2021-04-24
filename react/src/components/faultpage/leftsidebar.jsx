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
      <p>ABOUT</p>
      <p>CONTACT</p>
      <p>REPORT A PROBLEM</p>

    </div>
  )
}

export default LeftSidebar