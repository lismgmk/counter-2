import React, {ChangeEvent, useState, MouseEvent} from 'react';
import s from './App.module.css';
import style from './Component/ButtonForEach.module.css'
import {DisplayCounter2} from "./Component/DisplayCounter2";
import {SettingCounter} from "./Component/SettingCounter";


function App() {

    const [value, setValue] = useState<number>(0)
    const [valueInput1, setValueInput1] = useState(0)
    const [valueInput2, setValueInput2] = useState(0)
    const [errorSetting, setErrorSetting] = useState(false)
    const [errorCounter, setErrorCounter] = useState(true)
    const [disableInc, setDisableInc] = useState(false)

    let maxVal = valueInput1
    let minVal = valueInput2

    let disableButtonSet = valueInput1 < valueInput2 && valueInput1 < 0 && valueInput2 < 0 && valueInput1 === valueInput2

    const addError = () => {
        if (disableButtonSet) {
            setErrorSetting(true)
        } else{
            setErrorSetting(false)
        }
    }

    const onClickButtonInc = () => {
        if (value < maxVal ) {
             setValue(value + 1)
        }

    }

    const onClickButtonReset = (e:MouseEvent<HTMLDivElement>) => {
        setValue(minVal)
        buttonResetDisable(e)
        e.currentTarget.className = `${style.buttonInc} ${ disableInc ? style.disable : null}`
        // setErrorSetting(false)
    };

    const onClickButtonSet = () => {
        minVal = valueInput2
        maxVal = valueInput1
        setValue(minVal)
        setDisableInc(true)
        // onClickButtonReset()
        // setErrorCounter(false)
        // setErrorSetting(true)
    }

    const buttonResetDisable = (e: MouseEvent<HTMLDivElement>) => {

        setDisableInc(true)
        console.log(e.currentTarget)
    }
    const buttonIncDisable = () => {

    }
    const buttonSetDisable = () => {


    }


    const checkInput = () => {
        if(value < maxVal){
            setDisableInc(true)
        }
        else{
            setDisableInc(false)
        }
    }

    return (
        <div className={s.mainContainer}>
            {/*{checkInput()}*/}
            <SettingCounter

                valueInput1={valueInput1}
                valueInput2={valueInput2}
                setValueInputNext1={setValueInput1}
                setValueInputNext2={setValueInput2}
                errorSetting={errorSetting}
                onClickButtonSet={onClickButtonSet}
                addError = {addError}
                dis={buttonSetDisable}
                disable={disableInc}
            />
            <DisplayCounter2

                onClickButtonInc={onClickButtonInc}
                onClickButtonReset={onClickButtonReset}
                value={value}
                errorCounter={errorCounter}
                errorSetting={errorSetting}
                disable={false}
            />
        </div>
    )
}

export default App;
