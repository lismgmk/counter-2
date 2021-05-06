import React, { useEffect, useState} from 'react';
import s from './App.module.css';

import {DisplayCounter2} from "./Component/DisplayCounter2";
import {SettingCounter} from "./Component/SettingCounter";
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "./Redux/state";
import {Dispatch} from "redux";
import {ChangeDisplayValueAC} from "./Redux/displayValueReduser";
import {ChangeInputMaxValueAC} from "./Redux/inputMaxReduser";
import {ChangeInputStartValueAC} from "./Redux/inputStartReduser";




type errorCounterType = 'good' | 'incorrectValue' | 'pressSet'

function AppRedux() {

    const value = useSelector((state: IGlobalState) => state.displayValue.displayValue);

    const valueInput1 = useSelector((state: IGlobalState) => state.inputMax.inputValue);
    const valueInput2 = useSelector((state: IGlobalState) => state.inputStart.inputValue);



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






    const [errorSetting1, setErrorSetting1] = useState(false)
    const [errorSetting2, setErrorSetting2] = useState(false)

    const [errorNumber, setErrorNumber] = useState(false)

    // const [errorCounter, setErrorCounter] = useState<errorCounterType>('good')

    const [disableSet, setDisableSet] = useState(true)
    const [disableReset, setDisableReset] = useState(false)
    const [disableInc, setDisableInc] = useState(false)

    let maxVal = valueInput1

    const onClickButtonInc = () => {
        if (typeof(value) == 'number' && value < maxVal) {
            dispatch(ChangeDisplayValueAC(value+1))
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
        dispatch(ChangeDisplayValueAC(valueInput2))
        // setValue(valueInput2)
        setDisableReset(true)
        setDisableInc(false)
        setErrorNumber(false)
    };

    const onClickButtonSet = () => {
        maxVal = valueInput1
        dispatch(ChangeDisplayValueAC(valueInput2))
        setDisableSet(true)
        dispatch(ChangeDisplayValueAC('good'))
        // setErrorCounter('good')
    }

    const onChangeSelect1 = (value: number)=>{
        // setValueInput1(value)
        dispatch(ChangeInputMaxValueAC(value))
        setDisableSet(false)
        if (value < valueInput2 || value < 0) {
            // setErrorCounter('incorrectValue')
            dispatch(ChangeDisplayValueAC('incorrectValue'))
            setDisableSet(true)
            setErrorSetting1(true)
        }
        else if(value == valueInput2){
            // setErrorCounter('incorrectValue')
            dispatch(ChangeDisplayValueAC('incorrectValue'))
            setErrorSetting1(true)
            setErrorSetting2(true)
            setDisableSet(true)
        }
        else if(value > valueInput2){
            // setErrorCounter('pressSet')
            dispatch(ChangeDisplayValueAC('pressSet'))
            setErrorSetting1(false)
            setErrorSetting2(false)
            setDisableSet(false)
        }
        else{
            // setErrorCounter('good')
            dispatch(ChangeDisplayValueAC('good'))
            setErrorSetting1(false)
            setDisableSet(false)
        }
    }

    const onChangeSelect2 = (value: number)=>{
        // setValueInput2(value)
        dispatch(ChangeInputStartValueAC(value))
        setDisableSet(false)
        if (value > valueInput1 || value < 0) {
            dispatch(ChangeDisplayValueAC('incorrectValue'))
            setDisableSet(true)
            setErrorSetting2(true)
        }
        else if(value == valueInput1){
            dispatch(ChangeDisplayValueAC('incorrectValue'))
            setErrorSetting1(true)
            setErrorSetting2(true)
            setDisableSet(true)
        }
        else if(value < valueInput1){
            dispatch(ChangeDisplayValueAC('pressSet'))
            setDisableSet(false)
            setErrorSetting2(false)
            setErrorSetting1(false)
        }
        else{
            dispatch(ChangeDisplayValueAC('good'))
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
                errorCounter={ChangeDisplayValueAC('good')}
                disableReset={disableReset}
                disableInc={disableInc}
                errorNumber={errorNumber}
            />
        </div>
    )
}

export default AppRedux;
