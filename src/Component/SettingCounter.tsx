import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";
import {Select, SelectType} from "./Select";
import {DisplayCounter2} from "./DisplayCounter2";

export type SettingCounterType = {
    onClickButton: () => void
    disableButtonSet: boolean

    valueInput1: number
    valueInput2: number

    setValueInputNext1: () => void
    setValueInputPrev1: () => void
    setValueInputNext2: () => void
    setValueInputPrev2: () => void



    onBlurInput: ()=> void
    onFocusInut: ()=> void
}



export function SettingCounter (props : SettingCounterType ) {



  return (
      <div className={s.container}>
          <div>
              <Select
                  valueInput={props.valueInput1}
                  onBlurInput={props.onBlurInput}
                  onFocusInut={props.onFocusInut}
                  setValueInputNext={props.setValueInputNext1}
                  setValueInputPrev={props.setValueInputPrev1}

              />
              <Select
                  valueInput={props.valueInput2}
                  onBlurInput={props.onBlurInput}
                  onFocusInut={props.onFocusInut}
                  setValueInputNext={props.setValueInputNext2}
                  setValueInputPrev={props.setValueInputPrev2}
              />
          </div>

          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Set'}
                  onClickButton = {props.onClickButton}
                  disableButton = {props.disableButtonSet}
              />

          </div>
      </div>

  )
}


