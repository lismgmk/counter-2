import React from 'react';
import s from './ButtonForEach.module.css';

export type ButtonIncType = {
    title: string
    onClickButton: () => void
    disableButton?: boolean
}

export function ButtonForEach({title, onClickButton, disableButton} : ButtonIncType) {



  return (
      <div
          className={`${s.buttonInc} ${disableButton ? s.buttonIncdisabled : null}`}
          onClick={onClickButton}
      >
          {title}
      </div>
  );
}


