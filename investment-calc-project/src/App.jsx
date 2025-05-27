import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import OutputData from './components/OutputData.jsx'
import './App.css'

function App() {
  /*const [userInput, setUserInput] = useState({
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
    };*/
  
  return (
    <>
      <Header />
      <UserInput  />
    </>
  )
}

export default App
