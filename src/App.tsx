import React, {useState} from 'react';
import s from './App.module.css';
import {DisplayCounter2} from "./Component/DisplayCounter2";
import {SettingCounter} from "./Component/SettingCounter";


function App() {

    const [value, setValue] = useState(0);
    const maxVal = 5;
    const minVal = 0;
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


    const settingButton = ()=>{}

  return (
      <div className={s.mainContainer}>

          <DisplayCounter2
              countNum = {countNum}
              reset = {reset}
              disableButtonInc = {disableButtonInc}
              disableButtonReset = {disableButtonReset}
              setError = {setError}
              value = {value}
          /><SettingCounter
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
