import './css/app.css'
import Navbar from './components/navbar'
import OverallMainContainer from './containers/overallmaincontainer'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <OverallMainContainer className='glass' />
      <div className='circle1' />
      <div className='circle2' />
      <div className='circle3' />
      <div className='circle4' />
    </div>
  )
}

export default App
