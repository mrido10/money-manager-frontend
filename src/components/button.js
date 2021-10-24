import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { strToPascalCase } from '../helper/string'
import './button.css'

export let Button = props => {
    return (
        <button type='button' className={`button-btn btn rounded-circle ms-2`} onClick={props.action} onDoubleClick={props.deleteElement}>
            <i className={`bi ${props.icon}`}></i>
        </button>
    )
}

export let Button2 = props => {
    return (
        <button type='button' className={`button-btn btn rounded-pill mt-4 mb-2 p-2 w-100 bg-primary`} onClick={props.action}>
            {props.name}
        </button>
    )
}

export let PlusButton = props => {
    return (
        <div className='plus-btn-container position-fixed bottom-0 end-0 p-4'>
            <button type='button' className='plus-btn btn btn-primary rounded-circle fs-4' data-bs-toggle='offcanvas' data-bs-target='#add-transaction' aria-controls='add-transaction' onClick={() => {focusTo(props)}}>
                <i className='bi bi-plus'></i>
            </button>
        </div>
    )
}

export let CheckButton = props => {
    let id = props.name.toLowerCase()
    return (
        <div className='check-btn-container ps-2 pe-2'>
            <input type='radio' className='btn-check' name='options-outlined' id={id} autocomplete='off'/>
            <label className='btn btn-outline-primary' for={id}>{props.name}</label>
        </div>
    )
}

export let DropdownBtn = props => {
    const [name, setName] = useState(props.item[0].name)
    const [val, setVal] = useState(props.item[0].val)
    let value = val !== null && val !== undefined ? val : name;
    let style = {
        width: '180px',
        paddingRight: '15px',
        paddingLeft: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    useEffect(() => {
        let btn = document.getElementById(props.id)
        btn.innerHTML = name
    })
    return(
        <div className={`btn-group mt-1 mb-1 ${props.w100}`}>
            <button className={`btn btn-light dropdown-toggle shadow-sm ${props.w100}`} type='button' id={props.id} value={value} data-bs-toggle='dropdown' aria-expanded='true' style={style}>
                {name}
            </button>
            <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-lg-start ${props.w100}`} aria-labelledby={props.id} style={{width: '180px'}}>
                {
                    props.item.map(val => {
                        return <li><Link className='dropdown-item' onClick={() => {setName(val.name); setVal(val.val)}}>{val.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export let DropdownBtn2 = props => {
    const [name, setName] = useState(props.item[0].name)
    const [val, setVal] = useState(props.item[0].val)
    let value = val !== null && val !== undefined ? val : name;
    let style = {
        width: '180px',
        paddingRight: '15px',
        paddingLeft: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    useEffect(() => {
        let btn = document.getElementById(props.id)
        btn.innerHTML = name
    })
    return(
        <div className='btn-group-cont mb-1'>
            <div className={`inp-label ${props.name}`} >{strToPascalCase(props.name)}</div>
            <div className={`btn-group ${props.w100}`}>
                <button className={`dropdown-btn2 btn btn-light rounded-1 dropdown-toggle ${props.w100}`} type='button' id={props.id} value={value} data-bs-toggle='dropdown' aria-expanded='true' style={style}>
                    {name}
                </button>
                <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-lg-start ${props.w100}`} aria-labelledby={props.id} style={{width: '180px'}}>
                    {
                        props.item.map(val => {
                            return <li><Link className='dropdown-item' onClick={() => {setName(val.name); setVal(val.val)}}>{val.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

function focusTo(props) {
    if (props.targetFocus !== null && props.targetFocus !== undefined && props.targetFocus !== '') {
        let targetFocus = document.querySelector(props.targetFocus)
        targetFocus.setAttribute("autofocus", "true")
    }
}