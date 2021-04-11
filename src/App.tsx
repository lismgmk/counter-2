import React, {useState} from 'react';
import s from './App.module.css';
import {DisplayCounter2} from "./Component/DisplayCounter2";
import {SettingCounter} from "./Component/SettingCounter";



function App() {
//counter
    const  [valueInput1, setValueInput1] = useState(5)
    const  [valueInput2, setValueInput2] = useState(0)
    const [value, setValue] = useState<number>(0);
    const maxVal = valueInput1;
    const minVal = valueInput2;
    const countNum = () => {
        if( value  <  maxVal )
        setValue(value+1)
    };
    const reset = () => {
        setValue(minVal)
    };
    const disableButtonInc = value >= maxVal;
    const disableButtonReset = value === minVal;
    const setError = value == maxVal ? s.error : '';

//setting


    const  onBlurInput = () => {}
    const  onFocusInut = () => {}
    const  setValueInput11 =()=>{setValueInput1(valueInput1+1)}
    const  setValueInput22 =()=> {setValueInput2(valueInput2-1)}
    const  onClickButton = () => {}
    const  disableButton = true

  return (
      <div className={s.mainContainer}>
          <SettingCounter
              valueInput1={valueInput1}
              valueInput2={valueInput2}
              setValueInput1 = {setValueInput11}
              setValueInput2 = {setValueInput22}

              onBlurInput={onBlurInput}
              onFocusInut={onFocusInut}

              onClickButton = {onClickButton}
              disableButton = {disableButton}

          />


          <DisplayCounter2
              countNum = {countNum}
              reset = {reset}
              disableButtonInc = {disableButtonInc}
              disableButtonReset = {disableButtonReset}
              setError = {setError}
              value = {value}

          />


      </div>
  );
}

export default App;
