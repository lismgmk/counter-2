import React, {useState} from 'react';
import s from './Select.module.css';

export type SelectType = {
    valueInput1?: number
    valueInput2?: number
    onBlurInput: ()=> void
    onFocusInut: ()=> void
    onClickButtonNext: ()=> void
    onClickButtonPrev: ()=> void
}


export function Select(props: SelectType) {

    const [error, setError] = useState(false)

    return (
        <div>
            <input
                className={`${s.inputStyle} ${error ? s.error : ''}`}
                type="text"
                value={props.valueInput1 || props.valueInput2}
                onBlur={props.onBlurInput}
                onFocus={props.onFocusInut}
            />
            <button onClick={props.onClickButtonNext}>next</button>
            <button onClick={props.onClickButtonPrev}>prev</button>
        </div>


    );
}


