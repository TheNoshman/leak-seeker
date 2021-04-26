import '../css/welcomepage.css';
import WelcomeChoiceButton from '../components/welcomechoicebutton';

import logo from '../images/logo.png'

const WelcomeContainer = ({ setIntroPage, setSearchedReg }) => {
  return (
    <div className="welcome-container glass">
      <h1>Welcome to Leak Seeker</h1>
      <h3>Please choose an option:</h3>
      <div className="button-container">
        <WelcomeChoiceButton
          searchType="Search Faults"
          setIntroPage={setIntroPage}
          setSearchedReg={setSearchedReg}
        />
        <div>
        <img className='welcome-logo' src={logo} alt='brand logo'></img>
        </div>
        <WelcomeChoiceButton
          searchType="Register Fault"
          setIntroPage={setIntroPage}
          setSearchedReg={setSearchedReg}
        />
      </div>
    </div>
  );
};

export default WelcomeContainer;
