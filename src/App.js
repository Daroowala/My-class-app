import ButtonCom from './components/ButtonCom';
import InputCom from './components/InputCom';
import Navbar from './Layout/Navbar';
import './index.css';
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
    <h1 className='text-[red] p-10'>Hello Tailwind</h1>
      <InputCom />
      <ButtonCom label="Submit" onClick={SubmitButtonClick} />
      <ButtonCom label="Reset" onClick={ResetButtonClick} />
      <ButtonCom label="Login" onClick={LoginButtonClick} />
      <Navbar />
    </div>
    
    </>
  );
}

export default App;
