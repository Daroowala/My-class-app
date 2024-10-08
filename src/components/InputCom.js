import React, {useState} from 'react'


const InputCom = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
    );
  };

export default InputCom;
