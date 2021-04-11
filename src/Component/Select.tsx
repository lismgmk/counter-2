import React, {useState} from 'react';
import s from './Select.module.css';

export type SelectType = {
    valueInput?: number

    onBlurInput: ()=> void
    onFocusInut: ()=> void
    setValueInputNext: any
    setValueInputPrev: any
}


export function Select(props: SelectType) {

    const [error, setError] = useState(false)

    return (
        <div>
            <input
                className={`${s.inputStyle} ${error ? s.error : ''}`}
                type="text"
                value={props.valueInput}
                onBlur={props.onBlurInput}
                onFocus={props.onFocusInut}
            />
            <button onClick={props.setValueInputNext}>next</button>
            <button onClick={props.setValueInputPrev}>prev</button>
        </div>


    );
}


