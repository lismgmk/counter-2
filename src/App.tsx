import React, {useState} from 'react';
import s from './App.module.css';
import {DisplayCounter2} from "./Component/DisplayCounter2";
import {SettingCounter} from "./Component/SettingCounter";


function App() {

    const [valueInput1, setValueInput1] = useState(5)
    const [valueInput2, setValueInput2] = useState(0)
    const [errorSetting, setErrorSetting] = useState(false)
    const [errorCounter, setErrorCounter] = useState(true)
    const [disable, setDisable] = useState(false)


    let disableButtonSet = valueInput1 < valueInput2 || valueInput1 < 0 || valueInput2 < 0 || valueInput1 === valueInput2

    const [value, setValue] = useState<number>(0)


    const addError = () => {
        if (disableButtonSet) {
            setErrorSetting(true)
        } else{
            setErrorSetting(false)
        }
    }


    let maxVal = valueInput1
    let minVal = valueInput2
    const countNum = () => {
        if (value < maxVal ) {
             setValue(value + 1)
        }
    }

    const reset = () => {
        setValue(minVal)
        setErrorSetting(false)
    };

    // const disableButtonInc = value >= maxVal;
    // const disableButtonReset = value === minVal;
    // const setError = value == maxVal ? s.error : '';



    const onClickButton = () => {
        minVal = valueInput2
        maxVal = valueInput1
        reset()
        setErrorCounter(false)
        setErrorSetting(true)
    }

    // const buttonSetDisable = () => {
    //
    // }
    // const buttonIncDisable = () => {
    //
    // }
    // const buttonResetDisable = () => {
    //
    // }

    return (
        <div className={s.mainContainer}>
            <SettingCounter
                valueInput1={valueInput1}
                valueInput2={valueInput2}
                setValueInputNext1={setValueInput1}
                setValueInputNext2={setValueInput2}
                errorSetting={errorSetting}
                onClickButton={onClickButton}
                addError = {addError}
                disable={disable}
            />
            <DisplayCounter2
                countNum={countNum}
                reset={reset}
                value={value}
                errorCounter={errorCounter}
                errorSetting={errorSetting}
                disable={disable}
            />
        </div>
    )
}

export default App;
