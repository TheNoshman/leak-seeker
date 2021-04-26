import './css/app.css'
import Navbar from './components/navbar'
import OverallMainContainer from './containers/overallmaincontainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <OverallMainContainer className='glass'/>
      <div className='circle1'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>
    </div>
  );
}

export default App;
