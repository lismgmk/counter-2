import React, { useEffect, useState} from 'react';
import s from './App.module.css';

import {DisplayCounter2} from "./Component/DisplayCounter2";
import {SettingCounter} from "./Component/SettingCounter";
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "./Redux/state";
import {
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

    // const valueInput2 = useSelector<IGlobalState, number>((state => state.counter['valueInput2'])) // min
    const valueInput2 = useSelector<IGlobalState, number>((state => state.counter.valueInput2)) // min
    const valueInput1 = useSelector<IGlobalState, number>((state => state.counter['valueInput1'])) // max
    const value = useSelector<IGlobalState, any>((state => state.counter['value'])) // display counter

    const errorSetting1 = useSelector<IGlobalState, boolean>((state => state.counter['errorSetting1']))
    const errorSetting2 = useSelector<IGlobalState, boolean>((state => state.counter['errorSetting2']))
    const errorNumber = useSelector<IGlobalState, boolean>((state => state.counter['errorNumber']))
    const errorCounter = useSelector<IGlobalState, errorCounterType>((state => state.counter['errorCounter']))

    const disableSet = useSelector<IGlobalState, boolean>((state => state.counter['disableSet']))
    const disableReset = useSelector<IGlobalState, boolean>((state => state.counter['disableReset']))
    const disableInc = useSelector<IGlobalState, boolean>((state => state.counter['disableInc']))

    let maxVal = valueInput1

    // - //
    const onClickButtonInc = () => {
        if (value < maxVal) {
            dispatch(valueAC(value+1))
        }
    }

    const valueFunc = () => {
        if (value < maxVal) {
            dispatch(errorNumberAC(false))
            return value
        }

        if (value >= maxVal) {
            dispatch(disableIncAC(true))
            dispatch(disableResetAC(false))
            dispatch(errorNumberAC(true))
            return value
        }

        return value

        // if (value < maxVal) {
        //     dispatch(errorNumberAC(false))
        //     return value
        // } else if (value >= maxVal) {
        //     dispatch(disableIncAC(true))
        //     dispatch(disableResetAC(false))
        //     dispatch(errorNumberAC(true))
        //     return value
        // } else{
        //     return value
        // }
    }

    const onClickButtonReset = () => {
        dispatch(valueAC(valueInput2))
        dispatch(disableResetAC(true))
        dispatch(disableIncAC(false))
        dispatch(errorNumberAC(false))
    };

    const onClickButtonSet = () => {
        maxVal = valueInput1
        dispatch(valueAC(valueInput2))
        dispatch(disableSetAC(true))
        dispatch(errorCounterAC('good'))
    }

    const onChangeSelect1 = (value: number)=>{
        dispatch(valueInput1AC(value))
        dispatch(disableSetAC(false))

        if (value < valueInput2 || value < 0) {
            dispatch(errorCounterAC('incorrectValue'))
            dispatch(disableSetAC(true))
            dispatch(errorSetting1AC(true))
        }

        else if(value == valueInput2){
            dispatch(errorCounterAC('incorrectValue'))
            dispatch(errorSetting1AC(true))
            dispatch(errorSetting2AC(true))
            dispatch(disableSetAC(true))
        }

        else if(value > valueInput2){
            dispatch(errorCounterAC('pressSet'))
            dispatch(errorSetting1AC(false))
            dispatch(errorSetting2AC(false))
            dispatch(disableSetAC(false))
        }

        else{
            dispatch(errorCounterAC('good'))
            dispatch(errorSetting1AC(false))
            dispatch(disableSetAC(false))
        }
    }

    const onChangeSelect2 = (value: number)=>{
        dispatch(valueInput2AC(value))
        dispatch(disableSetAC(false))
        if (value > valueInput1 || value < 0) {
            dispatch(errorCounterAC('incorrectValue'))
            dispatch(disableSetAC(true))
            dispatch(errorSetting2AC(true))
        }
        else if(value == valueInput1){
            dispatch(errorCounterAC('incorrectValue'))
            dispatch(errorSetting1AC(true))
            dispatch(errorSetting2AC(true))
            dispatch(disableSetAC(true))
        }
        else if(value < valueInput1){
            dispatch(errorCounterAC('pressSet'))
            dispatch(disableSetAC(false))
            dispatch(errorSetting2AC(false))
            dispatch(errorSetting1AC(false))
        }
        else{
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
