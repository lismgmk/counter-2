import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";


export type DisplayCounterType = {
    countNum: () => void
    reset: () => void
    // disableButtonInc: boolean
    // disableButtonReset: boolean
    // setError: string
    value: number
    errorCounter: boolean
    errorSetting: boolean
    disable: boolean
}

export function DisplayCounter2 ({disable, errorSetting, countNum, reset, value, errorCounter} : DisplayCounterType ) {




  return (
      <div className={s.container}>
          { !errorSetting && <div className = {`${s.displayCounter}`}>{value}</div>}
          { errorSetting && <div className = {`${s.displayCounter}`}>ошибка</div>}

          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Inc'}
                  onClickButton = {countNum}
                  errorSetting={errorCounter}
                  disable={disable}
              />

              <ButtonForEach
                  title = {'Reset'}
                  onClickButton = {reset}
                  errorSetting={errorCounter}
                  disable={disable}
              />

          </div>
      </div>

  );
}


