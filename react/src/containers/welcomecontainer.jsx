import '../css/welcomepage.css';
import WelcomeChoiceButton from '../components/welcomechoicebutton'

const WelcomeContainer = ({setIntroPage}) => {

  return (
    <div className='welcome-container'>
      <h1>Welcome</h1>
      <h3>Please choose an option:</h3>
      <div className='button-container'>
        <WelcomeChoiceButton searchType='Search Faults' setIntroPage={setIntroPage}/>
        <WelcomeChoiceButton searchType='Register Fault' setIntroPage={setIntroPage}/>
      </div>
    </div>
  )
}

export default WelcomeContainer