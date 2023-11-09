import {useState } from "react";


function App() {

  const data = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];



const [step, setStep] = useState(1);
const [messages, setMessages] = useState(data);
const [isOpen, setisOpen] = useState(true);

  // messages array
 
  const onHandlePrevious = () => {
    if(step > 1){
      //updaing state based on the current value of the state
      setStep((prevState) => prevState - 1)
    }
  }


  const onHandleNext = () => {
   if(step < 3){
    setStep((prevState) => prevState + 1)
   }
  }



  return (

    <>
    <button className="close" onClick={() => setisOpen(!isOpen)}>&times;</button>
      {
        isOpen && ( <div className="steps">

    <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
    </div>

    <p className="message">{
      messages[step - 1]
      // zero based index so - 1
    }</p>

    <div className="buttons">
      <Button
      bgColor='#7950f2'
      textColor='#fff'
      onClick={onHandlePrevious}><span>👈</span>Previous</Button>


      <Button
      bgColor='#7950f2'
      textColor='#fff'
      onClick={onHandleNext}
      text="Next">Next<span>👉</span></Button>

    </div>
    </div>
    )
    } 

  </>
  );
}



const Button = ({bgColor, textColor, onClick, children}) => {

  const btnStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <button
    style={btnStyles}
    onClick={onClick}>{children}</button>
  )
}



export default App;
