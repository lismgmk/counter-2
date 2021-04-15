import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";


export type DisplayCounterType = {
    onClickButtonInc: () => void
    onClickButtonReset: (e: any) => void
    // disableButtonInc: boolean
    // disableButtonReset: boolean
    // setError: string
    value: number
    errorCounter: boolean
    errorSetting: boolean
    disable: boolean
}

export function DisplayCounter2 ({disable, errorSetting, onClickButtonInc, onClickButtonReset, value, errorCounter} : DisplayCounterType ) {




  return (
      <div className={s.container}>
          { !errorSetting && <div className = {`${s.displayCounter}`}>{value}</div>}
          { errorSetting && <div className = {`${s.displayCounter}`}>ошибка</div>}

          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Inc'}
                  onClickButton = {onClickButtonInc}
                  errorSetting={errorCounter}
                  disable={disable}
              />

              <ButtonForEach
                  title = {'Reset'}
                  onClickButton = {onClickButtonReset}
                  errorSetting={errorCounter}
                  disable={disable}
              />

          </div>
      </div>

  );
}


