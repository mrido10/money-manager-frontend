import { useState } from "react"
import { Button2, DropdownBtn, DropdownBtn2 } from "../../../components/button"
import { Input, Input2, InputCalendar } from "../../../components/form"

export let AddTransaction = () => {
    const [account, setAccount] = useState([{name: '123'}])
    return (
        <div className='offcanvas offcanvas-end bg-light border-0 shadow p-4' data-bs-scroll='true' tabindex='-1' id='add-transaction' aria-labelledby='add-transaction'>
            <div className='offcanvas-header'>
                <h3 className='fw-bold'>Add transaction</h3>
                <button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
                <Input2 name='name' type='text' />
                <InputCalendar name='date' type='datetime-local' />
                <DropdownBtn2 name='type' id='trans-account' item={account}  w100='w-100'/>
                <DropdownBtn2 name='category' id='trans-account' item={account}  w100='w-100'/>
                <DropdownBtn2 name='account' id='trans-account' item={account}  w100='w-100'/>
                <Input2 name='ammount' type='number' />
                <Input2 name='description' type='text' />
                <Button2 name='save' />
            </div>
        </div>
    )
}