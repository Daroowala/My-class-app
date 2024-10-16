// import ButtonCom from './components/ButtonCom';
// import InputCom from './components/InputCom';
// import Navbar from './Layout/Navbar';
import { Button } from "antd";
import './index.css';
import './App.css'; 

 
function App() {
const Button = () =>{
  console.log('Button click')
}
  // const SubmitButtonClick = () => {
  //   alert('Submit Button clicked!');
  // };

  // const ResetButtonClick = () => {
  //   alert('Reset Button clicked!');
  // };

  // const LoginButtonClick = () => {
  //   alert('Login Button clicked!');
  // };

  return (
    <>
    <div>
   
      <Button type= 'primary'>Submit</Button>
    </div>
    
    </>
  );
}

export default App;
