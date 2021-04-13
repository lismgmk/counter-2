import React from 'react';
import s from './ButtonForEach.module.css';

export type ButtonIncType = {
    title: string
    onClickButton: () => void
    errorSetting: boolean
    disable: boolean
}

export function ButtonForEach({disable, title, onClickButton} : ButtonIncType) {



  return (
      <div
          className={`${s.buttonInc} ${ disable ? s.disable : null}`}
          onClick={onClickButton}
      >
          {title}
      </div>
  );
}


