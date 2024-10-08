import ButtonCom from './components/ButtonCom';
 
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
      <ButtonCom label="Submit" onClick={handleFirstButtonClick} />
      <ButtonCom label="Reset" onClick={handleSecondButtonClick} />
    </div>
    </>
  );
}

export default App;
