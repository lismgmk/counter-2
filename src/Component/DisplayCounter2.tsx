import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";
import {SelectType} from "./Select";

export type DisplayCounterType = {
    countNum: () => void
    reset: () => void
    disableButtonInc: boolean
    disableButtonReset: boolean
    setError: string
    value: number
    error: boolean
}

export function DisplayCounter2 ({ countNum, reset, disableButtonInc,disableButtonReset, setError, value, error} : DisplayCounterType ) {




  return (
      <div className={s.container}>
          <div
              className = {`${s.displayCounter} ${setError}`}
          >{value}</div>

          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Inc'}
                  onClickButton = {countNum}
                  disableButton = {disableButtonInc}
                  error={error}
              />

              <ButtonForEach
                  title = {'Reset'}
                  onClickButton = {reset}
                  disableButton = {disableButtonReset}
                  error={error}
              />

          </div>
      </div>

  );
}


