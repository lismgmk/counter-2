import React, {useState, useEffect} from 'react';
import s from './Select.module.css';

export type SelectType = {
    valueInput: number




    setValueInputNext:(value:any)=>void


}


export function Select(props: SelectType) {

    const [error, setError] = useState(false)

debugger
    return (

        <div>

            <input
                className={`${s.inputStyle} ${error ? s.error : ''}`}
                type="number"
                onChange={(e)=>props.setValueInputNext(+e.currentTarget.value)}
            />



        </div>


    );
}


