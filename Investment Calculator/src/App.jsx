import {useState} from "react"
import Headers from "./Component/Header.Jsx"
import UserInput from "./Component/USerInput"
import Results from "./Component/Results";

function App() {
     const [userInput ,setUserInput] = useState({
        initialInvestment: 100000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = usrtInput.duration >=1;

    function handleChange(inputIdentifier,newValue){
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
                [inputIdentifier]: + newValue
            };
        });
    }
  return (
    <>
      <Headers />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid input data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
