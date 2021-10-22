import React, { useState } from 'react';

let Input = (props) => {
    const [valInput, setValInput] = useState('');
    const [isActive, setIsActive] = useState(false);
    return(
        <div className='inp-box mt-3 position-relative d-flex'>
            <input className='rounded-1' type='email' spellCheck='false' 
                onKeyUp={(e) => {setValInput(e.target.value)}} 
                onBlur={() => {setIsActive(false)}}
                onClick={() => {setIsActive(true)}}/>
            <div className='label' >{props.label}</div>
        </div>
    )
}