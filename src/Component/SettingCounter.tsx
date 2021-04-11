import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";
import {Select, SelectType} from "./Select";
import {DisplayCounter2} from "./DisplayCounter2";

export type SettingCounterType = {
    onClickButton: () => void
    disableButton: boolean
    valueInput1: number
    setValueInput1?: any
    valueInput2: number
    setValueInput2?: any
    setValueInputNext?: any
    setValueInputPrev?: any
}



export function SettingCounter (props : SettingCounterType & SelectType) {



  return (
      <div className={s.container}>
          <div>
              <Select
                  valueInput={props.valueInput1}
                  onBlurInput={props.onBlurInput}
                  onFocusInut={props.onFocusInut}
                  setValueInputNext={props.setValueInput1}
                  setValueInputPrev={props.setValueInput1}
              />
              <Select
                  valueInput={props.valueInput2}
                  onBlurInput={props.onBlurInput}
                  onFocusInut={props.onFocusInut}
                  setValueInputNext={props.setValueInput2}
                  setValueInputPrev={props.setValueInput2}
              />
          </div>

          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Set'}
                  onClickButton = {props.onClickButton}
                  disableButton = {props.disableButton}
              />

          </div>
      </div>

  )
}


