import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";
import {Select, SelectType} from "./Select";

export type SettingCounterType = {
    onClickButton: () => void
    disableButton: boolean
}

export function SettingCounter (props : SettingCounterType & SelectType) {



  return (
      <div className={s.container}>
          <div>
              <Select
                  valueInput1={props.valueInput1}
                  onBlurInput={props.onBlurInput}
                  onFocusInut={props.onFocusInut}
                  onClickButtonNext={props.onClickButtonNext}
                  onClickButtonPrev={props.onClickButtonPrev}
              />
              <Select
                  valueInput2={props.valueInput2}
                  onBlurInput={props.onBlurInput}
                  onFocusInut={props.onFocusInut}
                  onClickButtonNext={props.onClickButtonNext}
                  onClickButtonPrev={props.onClickButtonPrev}
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

  );
}


