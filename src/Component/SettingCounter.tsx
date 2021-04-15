import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";
import {Select, SelectType} from "./Select";
import {DisplayCounter2} from "./DisplayCounter2";

export type SettingCounterType = {
    onClickButtonSet: () => void
    // disableButtonSet: boolean
dis: () => void
    valueInput1: number
    valueInput2: number

    setValueInputNext1: (value:any) => void
    setValueInputNext2: (value:any) => void
    errorSetting: boolean
    addError: ()=>void
    disable: boolean


}



export function SettingCounter (props : SettingCounterType ) {



  return (
      <div className={s.container}>
          <div>
              <Select
                  valueInput={props.valueInput1}
                  addError = {props.addError}
                  setValueInputNext={props.setValueInputNext1}
                  errorSetting = {props.errorSetting}

              />
              <Select
                  valueInput={props.valueInput2}
                  addError = {props.addError}
                  setValueInputNext={props.setValueInputNext2}
                  errorSetting = {props.errorSetting}
              />
          </div>

          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Set'}
                  onClickButton = {props.onClickButtonSet}
                  disable = {props.disable}
                  errorSetting = {props.errorSetting}

              />

          </div>
      </div>

  )
}


