import ButtonCom from './components/ButtonCom';
import InputCom from './components/InputCom';
import './App.css'; 

 
function App() {

  const SubmitButtonClick = () => {
    alert('Submit Button clicked!');
  };

  const ResetButtonClick = () => {
    alert('Reset Button clicked!');
  };

  const LoginButtonClick = () => {
    alert('Login Button clicked!');
  };

  return (
    <>
    <div>
      <InputCom />
      <ButtonCom label="Submit" onClick={SubmitButtonClick} />
      <ButtonCom label="Reset" onClick={ResetButtonClick} />
      <ButtonCom label="Login" onClick={LoginButtonClick} />
    </div>
    </>
  );
}

export default App;
