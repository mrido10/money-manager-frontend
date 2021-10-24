import { useState, useEffect } from 'react'
import { strLocaleTimeNow } from '../helper/date'
import { strToPascalCase } from '../helper/string'
import './form.css'

export let Input = (props) => {
    const [val, setVal] = useState('')

    return(
        <div className='inp-box position-relative d-flex mb-1'>
            <input className={`rounded-1 ${props.name}`} type={props.type} spellCheck='false' 
                onKeyUp={(e) => {setVal(e.target.value)}}
                onFocus={setStyleTopLabelOnFocus(val, props.name)}
                onBlur={() => {setStyleTopLabelOnBlur(val, props.name)}}
            />
            <div className={`inp-label ${props.name} position-absolute`} >{strToPascalCase(props.name)}</div>
        </div>
    )
}

export let Input2 = (props) => {
    return(
        <div className='inp-box position-relative mb-1'>
            <div className={`inp-label ${props.name}`} >{strToPascalCase(props.name)}</div>
            <input className={`rounded-1 ${props.name}`} type={props.type} spellCheck='false'/>
        </div>
    )
}

export let InputCalendar = (props) => {
    useEffect(() => {
        let cal = document.querySelector(`.inp-box input.${props.name}`)
        cal.value  = strLocaleTimeNow()
    })
    return(
        <div className='inp-box position-relative mb-1'>
            <div className={`inp-label ${props.name}`} >{strToPascalCase(props.name)}</div>
            <input className={`rounded-1 ${props.name}`} type={props.type} spellCheck='false' />
        </div>
    )
}

function setStyleTopLabelOnFocus(val, name) {
    let label = document.querySelector(`.inp-label.${name}`)
    if (val.length > 0) {
        label.style.setProperty('transform', 'translateY(-35px)')
        label.style.setProperty('background-color', '#FFF')
    }
}

function setStyleTopLabelOnBlur(val, name) {
    let label = document.querySelector(`.inp-label.${name}`)
    if (val.length === 0) {
        label.style.setProperty('transform', 'translateY(-50%)')
        label.style.setProperty('background-color', 'unset')
    } 
}