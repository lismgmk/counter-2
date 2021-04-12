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

    setValueInputNext1: (value:any) => void
    setValueInputNext2: (value:any) => void
    error: boolean




}



export function SettingCounter (props : SettingCounterType ) {



  return (
      <div className={s.container}>
          <div>
              <Select
                  valueInput={props.valueInput1}

                  setValueInputNext={props.setValueInputNext1}


              />
              <Select
                  valueInput={props.valueInput2}

                  setValueInputNext={props.setValueInputNext2}

              />
          </div>

          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Set'}
                  onClickButton = {props.onClickButton}
                  disableButton = {props.disableButtonSet}
                  error = {props.error}
              />

          </div>
      </div>

  )
}


