import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './button.css'

export let Button = props => {
    return (
        <button type='button' className={`button-btn btn rounded-circle ms-2`} onClick={props.action} onDoubleClick={props.deleteElement}>
            <i className={`bi ${props.icon}`}></i>
        </button>
    )
}

export let PlusButton = props => {
    return (
        <div className='plus-btn-container position-fixed bottom-0 end-0 p-4'>
            <Link to={props.linkTo}>
                <button type='button' className='plus-btn btn btn-primary rounded-circle fs-4'>
                    <i className='bi bi-plus'></i>
                </button>
            </Link>
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