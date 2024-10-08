import ButtonCom from './components/ButtonCom';
import InputCom from './components/InputCom'
 
function App() {
  const handleFirstButtonClick = () => {
    alert('Submit Button clicked!');
  };

  const handleSecondButtonClick = () => {
    alert('Reset Button clicked!');
  };

  return (
    <>
    <div>
      <InputCom />
      <ButtonCom label="Submit" onClick={handleFirstButtonClick} />
      <ButtonCom label="Reset" onClick={handleSecondButtonClick} />
    </div>
    </>
  );
}

export default App;
