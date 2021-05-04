import React, { useEffect, useState} from 'react';
import s from './App.module.css';

import {DisplayCounter2} from "./Component/DisplayCounter2";
import {SettingCounter} from "./Component/SettingCounter";
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "./Redux/state";
import {Dispatch} from "redux";
import {ActionCreatersType} from "./Redux/actions";



type errorCounterType = 'good' | 'incorrectValue' | 'pressSet'

function App() {

    const state = useSelector((state: IGlobalState) => state.counter)
    const dispatch = useDispatch<Dispatch<ActionCreatersType>>();


    const classNameSelectMax = 'max'
    const classNameSelectMin = 'min'

    const [valueInput2, setValueInput2] = useState<number>(1)
    const [value, setValue] = useState<number>(1)
    const [valueInput1, setValueInput1] = useState<number>(3)


    useEffect(()=>{

        let valueInputMin = localStorage.getItem('valueInput2')
        let valueInputMax = localStorage.getItem('valueInput1')

        if(valueInputMin
            && valueInputMax){
            let correctValMin = JSON.parse(valueInputMin)
            let correctValMax = JSON.parse(valueInputMax)
            setValueInput1(correctValMax)
            setValueInput2(correctValMin)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('valueInput1', JSON.stringify(valueInput1))
    }, [valueInput1])


    useEffect(()=>{
        localStorage.setItem('valueInput2', JSON.stringify(valueInput2))
    }, [valueInput2])






    const [errorSetting1, setErrorSetting1] = useState(false)
    const [errorSetting2, setErrorSetting2] = useState(false)

    const [errorNumber, setErrorNumber] = useState(false)

    const [errorCounter, setErrorCounter] = useState<errorCounterType>('good')

    const [disableSet, setDisableSet] = useState(true)
    const [disableReset, setDisableReset] = useState(false)
    const [disableInc, setDisableInc] = useState(false)

    let maxVal = valueInput1

    const onClickButtonInc = () => {
        debugger
        if (value < maxVal) {
            setValue(value + 1)
        }
    }

    const valueFunc = () => {
        if (value < maxVal) {
            setErrorNumber(false)
            return value
        } else if (value >= maxVal) {
            setDisableInc(true)
            setDisableReset(false)
            setErrorNumber(true)
            return value
        } else{
            return value
        }
    }

    const onClickButtonReset = () => {
        setValue(valueInput2)
        setDisableReset(true)
        setDisableInc(false)
        setErrorNumber(false)
    };

    const onClickButtonSet = () => {
        maxVal = valueInput1
        setValue(valueInput2)
        setDisableSet(true)
        setErrorCounter('good')
    }

    const onChangeSelect1 = (value: number)=>{
        setValueInput1(value)
        setDisableSet(false)
        if (value < valueInput2 || value < 0) {
            setErrorCounter('incorrectValue')
            setDisableSet(true)
            setErrorSetting1(true)
        }
        else if(value == valueInput2){
            setErrorCounter('incorrectValue')
            setErrorSetting1(true)
            setErrorSetting2(true)
            setDisableSet(true)
        }
        else if(value > valueInput2){
            setErrorCounter('pressSet')
            setErrorSetting1(false)
            setErrorSetting2(false)
            setDisableSet(false)
        }
        else{
            setErrorCounter('good')
            setErrorSetting1(false)
            setDisableSet(false)
        }
    }

    const onChangeSelect2 = (value: number)=>{
        setValueInput2(value)
        setDisableSet(false)
        if (value > valueInput1 || value < 0) {
            setErrorCounter('incorrectValue')
            setDisableSet(true)
            setErrorSetting2(true)
        }
        else if(value == valueInput1){
            setErrorCounter('incorrectValue')
            setErrorSetting1(true)
            setErrorSetting2(true)
            setDisableSet(true)
        }
        else if(value < valueInput1){
            setErrorCounter('pressSet')
            setDisableSet(false)
            setErrorSetting2(false)
            setErrorSetting1(false)
        }
        else{
            setErrorCounter('good')
            setDisableSet(false)
            setErrorSetting2(false)
        }
    }

    return (
        <div className={s.mainContainer}>

            <SettingCounter
                classNameSelectMax={classNameSelectMax}
                classNameSelectMin={classNameSelectMin}
                onChangeSelect1={onChangeSelect1}
                onChangeSelect2={onChangeSelect2}
                valueInput1={valueInput1}
                valueInput2={valueInput2}
                errorSetting1={errorSetting1}
                errorSetting2={errorSetting2}
                onClickButtonSet={onClickButtonSet}
                disableSet={disableSet}
            />
            <DisplayCounter2
                onClickButtonInc={onClickButtonInc}
                onClickButtonReset={onClickButtonReset}
                valueFunc={valueFunc}
                errorCounter={errorCounter}
                disableReset={disableReset}
                disableInc={disableInc}
                errorNumber={errorNumber}
            />
        </div>
    )
}

export default App;
