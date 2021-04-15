import React, {useState, useEffect, ChangeEvent} from 'react';
import s from './Select.module.css';

export type SelectType = {
    valueInput: number
    addError: ()=>void
    errorSetting: boolean
    setValueInputNext:(value:any)=>void
}


export function Select(props: SelectType) {



    return (
        <div>
            <input
                className={`${s.inputStyle} ${props.errorSetting ? s.error : ''}`}
                type="number"
                value={props.valueInput}
                onChange={(e)=>{
                    props.setValueInputNext(+e.currentTarget.value)
                    props.addError()
                }}
            />
        </div>
    );
}


