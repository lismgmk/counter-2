import React from 'react';
import s from './ButtonForEach.module.css';

export type ButtonIncType = {
    title: string
    onClickButton: () => void
    disableButton: boolean
    error: boolean
}

export function ButtonForEach({title, onClickButton, disableButton, error} : ButtonIncType) {



  return (
      <div
          className={`${s.buttonInc} ${disableButton && error ? s.buttonIncdisabled : null}`}
          onClick={onClickButton}
      >
          {title}
      </div>
  );
}


