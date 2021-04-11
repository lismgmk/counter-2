import React, {useReducer, useState} from 'react';
import s from './App.module.css';
import {DisplayCounter2} from "./Component/DisplayCounter2";
import {SettingCounter} from "./Component/SettingCounter";




function App() {
//counter
    const  [valueInput1, setValueInput1] = useState(5)
    const  [valueInput2, setValueInput2] = useState(0)

    //

    const [value, setValue] = useState<number>(0);
    let maxVal = valueInput1;
    let minVal = valueInput2;
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
    const  onClickButton = () => {
        debugger
        minVal = valueInput2
        maxVal = valueInput1
        disableButtonSet = true
        reset()

    }
    let  disableButtonSet = valueInput1 < valueInput2 || valueInput1 < 0 || valueInput2 < 0 || valueInput1 === valueInput2



    return (
      <div className={s.mainContainer}>
          <SettingCounter
              valueInput1={valueInput1}
              valueInput2={valueInput2}
              setValueInputNext1={() => setValueInput1(valueInput1 + 1)}
              setValueInputPrev1={() => setValueInput1(valueInput1 - 1)}
              setValueInputNext2={() => setValueInput2(valueInput2 + 1)}
              setValueInputPrev2={() => setValueInput2(valueInput2 - 1)}


              onBlurInput={onBlurInput}
              onFocusInut={onFocusInut}

              onClickButton = {onClickButton}
              disableButtonSet = {disableButtonSet}

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
