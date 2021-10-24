import React, { useEffect, useState } from 'react'
import { Button } from '../../../components/button'

import './list.css'

export let ListGroup = props => {
    const [listLength, setListLength] = useState(null)

    useEffect(() => {
        let id = document.getElementById(props.id)
        let l = id.lastElementChild.childNodes
        setListLength(l.length)
    })

    const childToParrent = data => {
        setListLength(listLength - data)
    }

    return (
        <div id={props.id} className='container-fluid'>
            <div className='date fw-bold mb-2'>Monday, 2021-10-21</div>
            <div className='list rounded bg-light shadow-sm p-2'>
                <List id={'a'} category='makanan' name='bakso urat jumbossssssssssssssssssssssssss' account='kas' ammount={40000} type='Expence' childToParrent={childToParrent} />
                <List id={'b'} category='jajan' name='bakso bakar' account='kas' ammount={20000} type='Expence' childToParrent={childToParrent} />
                <List id={'c'} category='gaji' name='' account='BRI' ammount={1000000000} type='Income' childToParrent={childToParrent} />
                <List id={'d'} category='transfer' name='' account='BCA - BRI' ammount={1000000} type='transfer' childToParrent={childToParrent} />
            </div>
        </div>
    )
}

export let List = (props, {childToParrent}) => {
    let typeName = (props.type).toLowerCase()

    useEffect(() => {
        setWidthTransNameUnder600PX()
        window.onresize = () => {
            setWidthTransNameUnder600PX()
            setDisplayTransType()
        }
    })
    return (
        <div id={props.id} className='p-2'>
            <div className='list-item d-flex'>
                <div className='d-flex align-items-center pt-2 pb-2'>
                    <div className='trans-category'>{props.category}</div>
                </div>
                <div className='d-flex flex-column flex-grow-1 pt-2 pb-2 ps-3 pe-3'>
                    <div className='trans-name'>{props.name !== '' && props.name !== null && props.name !== undefined ? props.name  : '-' }</div>
                    <div className='trans-account'>{props.account}</div>
                </div>
                <div className='d-flex align-items-center pt-2 pb-2'>
                    <div className='trans-ammount text-end'>Rp {props.ammount.toLocaleString()}</div>
                </div>
                <div className='d-flex align-items-center pt-2 pb-2 ps-2'>
                    <div className={`trans-type ${typeName} rounded-pill text-center`}>{props.type}</div>
                </div>
            </div>
            <div className='cont-btn-list-item d-flex'>
                <div className='d-flex align-items-center pt-2 pb-2'>
                    <div className={`trans-type ${typeName} rounded-pill text-center`}>{props.type}</div>
                </div>
                <div className='d-flex align-items-center justify-content-end flex-grow-1'>
                    <Button icon='bi-pencil' />
                    <Button icon='bi-x-lg' deleteElement={() => {deleteElement(props.id)}}/>
                </div>  
            </div>
             
        </div>
    )
}

function setWidthTransNameUnder600PX() {
    let transName = document.querySelectorAll('.trans-name')

    if (window.innerWidth > 992) {
        transName.forEach(val => {
            val.style.setProperty('width', 'auto')
        })
    } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
        transName.forEach(val => {
            val.style.setProperty('width', '320px')
        })
    } else if (window.innerWidth <= 768 && window.innerWidth > 600) {
        transName.forEach(val => {
            val.style.setProperty('width', '220px')
        })
    } else if (window.innerWidth <= 600 && window.innerWidth > 510) {
        transName.forEach(val => {
            val.style.setProperty('width', (window.innerWidth * (2/5)) + 'px')
        })
    } else if (window.innerWidth <= 510 && window.innerWidth > 400){
        transName.forEach(val => {
            val.style.setProperty('width', (window.innerWidth * (1/3)) + 'px')
        })
    } else if (window.innerWidth <= 400){
        transName.forEach(val => {
            val.style.setProperty('width', (window.innerWidth * (3/12)) + 'px')
        })
    }
}

function setDisplayTransType() {
    let listItem1 = document.querySelectorAll('.list-item')
        let listItem2 = document.querySelectorAll('.cont-btn-list-item')
    if (window.innerWidth <= 600) {
        listItem1.forEach((val, idx) => {
            val.childNodes[val.childNodes.length - 1].style.setProperty('display', 'none', 'important')
            listItem2[idx].firstChild.style.setProperty('display', 'flex', 'important')
        })
    } else {
        listItem1.forEach((val, idx) => {
            val.childNodes[val.childNodes.length - 1].style.setProperty('display', 'flex', 'important')
            listItem2[idx].firstChild.style.setProperty('display', 'none', 'important')
        })
    }
}

function deleteElement(id) {
    return document.getElementById(id).remove()
}