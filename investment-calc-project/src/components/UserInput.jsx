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

  const handleChange = (inputIdentifier, newValue) => {
    let newInput = userInput;
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
    console.log(userInput);
  };

  return(
    <section id='user-input'>
        <form>
          <div className="input-group">
            <label htmlFor="initialInvestment">Initial Investment ($)</label>
            <input 
              type="number" 
              id="initialInvestment"
              value={userInput.initialInvestment}
              onChange={(e) => handleChange('initialInvestment', e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="annualInvestment">Annual Investment ($)</label>
            <input 
              type="number" 
              id="annualInvestment"
              value={userInput.annualInvestment}
              onChange={(e) => handleChange('annualInvestment', e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="expectedReturn">Expected Return (%)</label>
            <input 
              type="number" 
              id="expectedReturn"
              value={userInput.expectedReturn}
              onChange={(e) => handleChange('expectedReturn', e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="duration">Duration (years)</label>
            <input 
              type="number" 
              id="duration"
              value={userInput.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
            />
          </div>
        </form>

        <OutputData inputValue={userInput}/>
    </section>
  ) 
}

export default UserInput