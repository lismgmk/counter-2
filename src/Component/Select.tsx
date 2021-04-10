import React, {useState} from 'react';
import s from './Select.module.css';

export type ButtonIncType = {
    title: string
    onClickButton: () => void
    disableButton?: boolean
}

export function Select() {
    const [value, setValue] = useState<number>(0)


  return (
      <div>
          <input type="text" value = {value} />
          <button onClick={()=>{setValue(value+1)}}>next</button>
          <button onClick={()=>{setValue(value-1)}}>prev</button>

      </div>


  );
}


