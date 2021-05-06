import React, { useEffect, useState} from 'react';
import s from './App.module.css';

import {DisplayCounter2} from "./Component/DisplayCounter2";
import {SettingCounter} from "./Component/SettingCounter";
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "./Redux/state";
import {Dispatch} from "redux";
import {
    ActionCreatersType,
    disableIncAC,
    disableResetAC,
    disableSetAC,
    errorCounterAC,
    errorNumberAC, errorSetting1AC, errorSetting2AC,
    valueAC, valueInput1AC, valueInput2AC
} from "./Redux/actions";



export type errorCounterType = 'good' | 'incorrectValue' | 'pressSet'

function App() {

    const dispatch = useDispatch();


    const classNameSelectMax = 'max'
    const classNameSelectMin = 'min'

    // const [valueInput2, setValueInput2] = useState<number>(1)
    // const [value, setValue] = useState<number>(1)
    // const [valueInput1, setValueInput1] = useState<number>(3)


    // useEffect(()=>{
    //
    //     let valueInputMin = localStorage.getItem('valueInput2')
    //     let valueInputMax = localStorage.getItem('valueInput1')
    //
    //     if(valueInputMin
    //         && valueInputMax){
    //         let correctValMin = JSON.parse(valueInputMin)
    //         let correctValMax = JSON.parse(valueInputMax)
    //         setValueInput1(correctValMax)
    //         setValueInput2(correctValMin)
    //     }
    // }, [])
    //
    // useEffect(()=>{
    //     localStorage.setItem('valueInput1', JSON.stringify(valueInput1))
    // }, [valueInput1])
    //
    //
    // useEffect(()=>{
    //     localStorage.setItem('valueInput2', JSON.stringify(valueInput2))
    // }, [valueInput2])

    const valueInput2 = useSelector<IGlobalState, number>((state => state.counter['valueInput2']))
    const valueInput1 = useSelector<IGlobalState, number>((state => state.counter['valueInput1']))
    const value = useSelector<IGlobalState, any>((state => state.counter['value']))
    const errorSetting1 = useSelector<IGlobalState, boolean>((state => state.counter['errorSetting1']))
    const errorSetting2 = useSelector<IGlobalState, boolean>((state => state.counter['errorSetting2']))
    const errorNumber = useSelector<IGlobalState, boolean>((state => state.counter['errorNumber']))
    const errorCounter = useSelector<IGlobalState, errorCounterType>((state => state.counter['errorCounter']))
    const disableSet = useSelector<IGlobalState, boolean>((state => state.counter['disableSet']))
    const disableReset = useSelector<IGlobalState, boolean>((state => state.counter['disableReset']))
    const disableInc = useSelector<IGlobalState, boolean>((state => state.counter['disableInc']))

    // const [errorSetting1, setErrorSetting1] = useState(false)
    // const [errorSetting2, setErrorSetting2] = useState(false)
    //
    // const [errorNumber, setErrorNumber] = useState(false)
    //
    // const [errorCounter, setErrorCounter] = useState<errorCounterType>('good')
    //
    // const [disableSet, setDisableSet] = useState(true)
    // const [disableReset, setDisableReset] = useState(false)
    // const [disableInc, setDisableInc] = useState(false)

    let maxVal = valueInput1

    const onClickButtonInc = () => {
        debugger
        if (value < maxVal) {
            // setValue(value + 1)
            dispatch(valueAC(value+1))
        }
    }

    const valueFunc = () => {
        if (value < maxVal) {
            // setErrorNumber(false)
            dispatch(errorNumberAC(false))
            return value
        } else if (value >= maxVal) {
            // setDisableInc(true)
            // setDisableReset(false)
            // setErrorNumber(true)
            dispatch(disableIncAC(true))
            dispatch(disableResetAC(false))
            dispatch(errorNumberAC(true))
            return value
        } else{
            return value
        }
    }

    const onClickButtonReset = () => {
        // setValue(valueInput2)
        // setDisableReset(true)
        // setDisableInc(false)
        // setErrorNumber(false)
        dispatch(valueAC(valueInput2))
        dispatch(disableResetAC(true))
        dispatch(disableIncAC(false))
        dispatch(errorNumberAC(false))
    };

    const onClickButtonSet = () => {
        maxVal = valueInput1
        // setValue(valueInput2)
        // setDisableSet(true)
        // setErrorCounter('good')
        dispatch(valueAC(valueInput2))
        dispatch(disableSetAC(true))
        dispatch(errorCounterAC('good'))
    }

    const onChangeSelect1 = (value: number)=>{
        // setValueInput1(value)
        // setDisableSet(false)
        dispatch(valueInput1AC(value))
        dispatch(disableSetAC(false))
        if (value < valueInput2 || value < 0) {
            // setErrorCounter('incorrectValue')
            // setDisableSet(true)
            // setErrorSetting1(true)
            dispatch(errorCounterAC('incorrectValue'))
            dispatch(disableSetAC(true))
            dispatch(errorSetting1AC(true))
        }
        else if(value == valueInput2){
            // setErrorCounter('incorrectValue')
            // setErrorSetting1(true)
            // setErrorSetting2(true)
            // setDisableSet(true)
            dispatch(errorCounterAC('incorrectValue'))
            dispatch(errorSetting1AC(true))
            dispatch(errorSetting2AC(true))
            dispatch(disableSetAC(true))
        }
        else if(value > valueInput2){
            // setErrorCounter('pressSet')
            // setErrorSetting1(false)
            // setErrorSetting2(false)
            // setDisableSet(false)
            dispatch(errorCounterAC('pressSet'))
            dispatch(errorSetting1AC(false))
            dispatch(errorSetting2AC(false))
            dispatch(disableSetAC(false))
        }
        else{
            // setErrorCounter('good')
            // setErrorSetting1(false)
            // setDisableSet(false)
            dispatch(errorCounterAC('good'))
            dispatch(errorSetting1AC(false))
            dispatch(disableSetAC(false))
        }
    }

    const onChangeSelect2 = (value: number)=>{
        // setValueInput2(value)
        // setDisableSet(false)
        dispatch(valueInput2AC(value))
        dispatch(disableSetAC(false))
        if (value > valueInput1 || value < 0) {
            // setErrorCounter('incorrectValue')
            // setDisableSet(true)
            // setErrorSetting2(true)
            dispatch(errorCounterAC('incorrectValue'))
            dispatch(disableSetAC(true))
            dispatch(errorSetting2AC(true))
        }
        else if(value == valueInput1){
            // setErrorCounter('incorrectValue')
            // setErrorSetting1(true)
            // setErrorSetting2(true)
            // setDisableSet(true)
            dispatch(errorCounterAC('incorrectValue'))
            dispatch(errorSetting1AC(true))
            dispatch(errorSetting2AC(true))
            dispatch(disableSetAC(true))
        }
        else if(value < valueInput1){
            // setErrorCounter('pressSet')
            // setDisableSet(false)
            // setErrorSetting2(false)
            // setErrorSetting1(false)
            dispatch(errorCounterAC('pressSet'))
            dispatch(disableSetAC(false))
            dispatch(errorSetting2AC(false))
            dispatch(errorSetting1AC(false))
        }
        else{
            // setErrorCounter('good')
            // setDisableSet(false)
            // setErrorSetting2(false)
            dispatch(errorCounterAC('good'))
            dispatch(disableSetAC(false))
            dispatch(errorSetting2AC(false))
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
