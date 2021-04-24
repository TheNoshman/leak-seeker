import '../css/overallcontainerpage.css';
import WelcomeContainer from '../containers/welcomecontainer';
import MainFaultPageContainer from '../containers/mainfaultpage';
import { useState } from 'react';

const OverallMainContainer = () => {
  const [introPage, setIntroPage] = useState(true);
  const [searchedReg, setSearchedReg] = useState('');

  return (
    <div className="mainpage">
      {introPage && !searchedReg ? (
        <WelcomeContainer
          setIntroPage={setIntroPage}
          setSearchedReg={setSearchedReg}
        />
      ) : (
        <MainFaultPageContainer searchedReg={searchedReg} />
      )}
    </div>
  );
};

export default OverallMainContainer;
