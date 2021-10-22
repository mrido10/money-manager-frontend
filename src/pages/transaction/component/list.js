import React, { useEffect, useState } from 'react'
import { Button } from '../../../components/button'

import './list.css'

export let ListGroup = props => {
    const [listLength, setListLength] = useState(null)

    useEffect(() => {
        let id = document.getElementById(props.id)
        let l = id.lastElementChild.childNodes
        setListLength(l.length)
        console.log('>>', listLength)
    })

    const childToParrent = data => {
        setListLength(listLength - data)
    }

    return (
        <div id={props.id} className='container-fluid'>
            <div className='date fw-bold mb-2'>Monday, 2021-10-21</div>
            <div className='list rounded bg-light shadow-sm p-2'>
                <List id={'a'} type='Expence' childToParrent={childToParrent} />
                <List id={'b'} type='Income'/>
                <List id={'d'} type='Transfer'/>
                <List id={'e'} type='Transfer'/>
                <List id={'f'} type='Transfer'/>
                <List id={'g'} type='Transfer'/>
                <List id={'h'} type='Transfer'/>
            </div>
        </div>
    )
}

export let List = (props, {childToParrent}) => {
    let typeName = (props.type).toLowerCase()
    return (
        <div id={props.id} className='row p-2'>
            <div className='col d-flex align-items-center pt-2 pb-2 ps-3 pe-3'>
                <div className='trans-category'>Category</div>
            </div>
            <div className='col d-flex align-items-center pt-2 pb-2 ps-3 pe-3'>
                <div className='trans-name'>Name</div>
            </div>
            <div className='col d-flex align-items-center pt-2 pb-2 ps-3 pe-3'>
                <div className='trans-account'>BRI</div>
            </div>
            <div className='col d-flex align-items-center pt-2 pb-2 ps-3 pe-3'>
                <div className='trans-ammount'>Rp 100.000</div>
            </div>
            <div className='col d-flex align-items-center p-2'>
                <div className={`trans-type ${typeName} rounded-pill text-center`}>{props.type}</div>
            </div>
            <div className='col d-flex align-items-center justify-content-end pt-2 pb-2 ps-3 pe-3'>
                <Button icon='bi-pencil' />
                <Button icon='bi-x-lg' deleteElement={() => {deleteElement(props.id)}}/>
            </div>
        </div>
    )
}

function deleteElement(id) {
    return document.getElementById(id).remove()
}