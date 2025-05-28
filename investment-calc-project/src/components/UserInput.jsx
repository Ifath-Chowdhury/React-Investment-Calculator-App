import React, {useState} from 'react'
import '../App.css'
import OutputData from './OutputData.jsx'

const UserInput = ( {onInputChange} ) => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  let error = false;

  const handleChange = (inputIdentifier, newValue) => {
    let newInput = userInput;
    if (newValue > 0) {
      if (inputIdentifier == "initialInvestment") {
        newInput = {...userInput, initialInvestment: newValue};
      } else if (inputIdentifier == "annualInvestment") {
        newInput = {...userInput, annualInvestment: newValue};
      } else if (inputIdentifier == "expectedReturn") {
        newInput = {...userInput, expectedReturn: newValue};
      } else if (inputIdentifier == "duration") {
        newInput = {...userInput, duration: newValue};
      }

      setUserInput(newInput);
      error = false;
    } else {
      error = true;
    }
  };

  return(
    <section className='report-content'>
        <form id='user-input'>
          <div className="input-group">
            <label htmlFor="initialInvestment">Initial Investment ($)</label>
            <input 
              type="number" 
              id="initialInvestment"
              min='0'
              value={userInput.initialInvestment}
              onChange={(e) => handleChange('initialInvestment', e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="annualInvestment">Annual Investment ($)</label>
            <input 
              type="number" 
              id="annualInvestment"
              min='0'
              value={userInput.annualInvestment}
              onChange={(e) => handleChange('annualInvestment', e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="expectedReturn">Expected Return (%)</label>
            <input 
              type="number" 
              id="expectedReturn"
              min='0'
              value={userInput.expectedReturn}
              onChange={(e) => handleChange('expectedReturn', e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="duration">Duration (years)</label>
            <input 
              type="number" 
              id="duration"
              min='0'
              value={userInput.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
            />
          </div>
        </form>

        {error ? <h1>All values must be above 0</h1> : <OutputData inputValue={userInput} />}
    </section>
  ) 
}

export default UserInput