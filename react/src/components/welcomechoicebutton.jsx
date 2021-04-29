import { useState } from 'react'
import '../css/welcomepage.css'
/* global alert */

const WelcomeChoiceButton = ({ searchType, setIntroPage, setSearchedReg }) => {
  // THESE STATES TRACK WHICH DROP DOWN TO SHOW
  const [searchClicked, setSearchClicked] = useState(false)
  const [logClicked, setLogClicked] = useState(false)
  const [inputText, setInputText] = useState({
    reg: '',
    make: '',
    model: ''
  })

  // SETS STATE TO APPROPRIATE INPUTTED VALUES
  const inputHandler = (event) =>
    setInputText({ ...inputText, [event.target.name]: event.target.value.toUpperCase() })

  const onSearchSubmit = async (event) => {
    event.preventDefault()

    if (!inputText.reg) {
      alert('Please enter a valid registration number')
    } else {
      console.log('SEARCH -> NEXT STEP', inputText.reg)
      setSearchedReg(inputText.reg)
      setIntroPage(false)

      // SEND DATA THROUGH TO BACKEND
      // GET RID OF WELCOME PAGE
      // RENDER MAIN PAGE
    }
  }

  const onLogSubmit = async (event) => {
    event.preventDefault()

    if (!inputText.reg || !inputText.make || !inputText.model) {
      alert('Please enter your vehicle details')
    } else {
      console.log('LOG -> NEXT STEP')
      setIntroPage(false)
      // SEND DATA THROUGH TO FAULT REGISTER PAGE
      // REMOVE WELCOME PAGE
      // RENDER FAULT REGISTER PAGE
    }
  }

  return (
    // HANDLES WHICH DROP DOWN TO RENDER
    <div className='button-div'>
      <a
        className='welcome-choice-btn'
        href='#'
        onClick={() => {
          searchType === 'Search Faults'
            ? setSearchClicked(!searchClicked)
            : setLogClicked(!logClicked)
        }}
      >
        {searchType}
      </a>

      {/* IF SEARCH FAULTS BUTTON IS CLICKED */}
      {searchClicked && (
        <div className='input-box-div glass'>
          <form className='input-box-form' onSubmit={onSearchSubmit}>
            <label>
              <input
                className='input-text-box'
                type='text'
                name='reg'
                value={inputText.reg}
                placeholder='Enter a registration number...'
                onChange={(event) => inputHandler(event)}
              />
            </label>

            <p>Your reg:</p>
            <p className='input-output'>{inputText.reg}</p>
            <input type='submit' value='Submit' className='sub-btn' />
          </form>
        </div>
      )}

      {/* IF REGISTER FAULT BUTTON IS CLICKED */}
      {logClicked && (
        <div className='input-box-div glass'>
          <form className='input-box-form' onSubmit={onLogSubmit}>
            <label className='cen'>
              Registration:
              <input
                className='input-text-box'
                type='text'
                name='reg'
                value={inputText.reg}
                placeholder='Enter your registration number...'
                onChange={(event) => inputHandler(event)}
              />
            </label>

            <label className='cen'>
              Make/ Brand:
              <input
                className='input-text-box'
                type='text'
                name='make'
                value={inputText.make}
                placeholder='Enter your vehicles manufacturer...'
                onChange={(event) => inputHandler(event)}
              />
            </label>

            <input type='submit' value='Submit' className='sub-btn' />
          </form>
        </div>
      )}
    </div>
  )
}

export default WelcomeChoiceButton
