import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";
import {log} from "util";
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "../Redux/state";
import {Dispatch} from "redux";
import {ActionCreatersType} from "../Redux/actions";


export type DisplayCounterType = {
    onClickButtonInc: () => void
    onClickButtonReset: () => void
    // disableButtonInc: boolean
    // disableButtonReset: boolean
    // setError: string
    valueFunc: ()=> number
    errorCounter: string
    errorNumber: boolean
    disableReset: boolean
    disableInc: boolean
}

const ewq = () => {
    if (min <  max) {
        return str!
    }

    ret str2
}

<div>{false ? qwe(Num) : ewq()}</div>

export function DisplayCounter2 (props : DisplayCounterType) {
    const checkErrorCounter = () => {
        switch (props.errorCounter) {
            case 'good':
                return <div
                    className={`${s.displayCounter} ${props.errorNumber ? s.error : ''}`}
                >
                    {props.valueFunc()}
                </div>
            case 'incorrectValue':
                return <div className={`${s.displayCounterText}`}>Incorrect Value</div>
            case 'pressSet':
                return <div className={`${s.displayCounterText}`}>pres button Set</div>
            default:
                return console.log('error')
        }
    }

  return (
      <div className={s.container}>

          {checkErrorCounter()}
          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Inc'}
                  onClickButton = {props.onClickButtonInc}
                  disable={props.disableInc}
              />

              <ButtonForEach
                  title = {'Reset'}
                  onClickButton = {props.onClickButtonReset}
                  disable={props.disableReset}
              />

          </div>
      </div>

  )
}