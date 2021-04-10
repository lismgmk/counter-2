import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";
import {Select} from "./Select";

export type DisplayCounterType = {
    countNum: () => void
    reset: () => void
    disableButtonInc: boolean
    disableButtonReset: boolean
    setError: string
    value: number
}

export function SettingCounter ({countNum, reset, disableButtonInc,disableButtonReset, setError, value} : DisplayCounterType) {




  return (
      <div className={s.container}>
          <div>
              <Select/>
          </div>

          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Set'}
                  onClickButton = {countNum}
                  disableButton = {disableButtonInc}
              />

          </div>
      </div>

  );
}


