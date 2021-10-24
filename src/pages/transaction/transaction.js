import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { DropdownBtn, PlusButton } from '../../components/button'
import { ListGroup } from './component/list'

import './transaction.css'
import { AddTransaction } from './component/addTransaction'

class Transaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterTransactions: [
                {name: 'All'},
                {name: 'Income'},
                {name: 'Expence'},
                {name: 'Transfer'}
            ],
            filterYear: [
                {name: 2021},
                {name: 2020},
            ],
            filterMonth: [
                {name: 'January', val: 1},
                {name: 'February', val: 2},
                {name: 'March', val: 3},
            ],
            windowWidth: window.innerWidth
        }
    }

    componentDidMount() {
        window.onresize = () => {
            this.setState({
                windowWidth: window.innerWidth
            })
        }
    }

    render() {
        return(
            <div id='transaction' className='box-container h-100 position-relative'>
                <div className='d-flex flex-row bd-highlight mb-3 h-100'>
                    <Navbar />
                    <div className='content container'>
                        <div className='row pb-2'>
                            <h1 className='fw-bold'>Transaction</h1>
                        </div>
                        <div className='row pt-4'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-1'>
                                        <button className='filter-btn btn btn-light mt-1' type='button' data-bs-toggle='collapse' data-bs-target='#filter' aria-expanded='true' aria-controls='filter'>
                                            <i className='bi bi-three-dots-vertical'></i>
                                        </button>
                                    </div>
                                    {window.innerWidth > 768 ? <FilterLeft state={this.state} /> : ''} 
                                </div>
                                {window.innerWidth <= 768 ? <FilterBottom state={this.state} /> : ''} 
                                <div className='row'>
                                    <div className='col'>
                                        <ListGroup id={'a1'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PlusButton targetFocus='.inp-box input' />
                    <AddTransaction />
                </div>
            </div>
        )
    }
}

export default withRouter(Transaction)

function FilterLeft(props) {
    return (
        <div className='col'>
            <div className='collapse row justify-content-md-end' id='filter'> 
                <div className='col col-lg-3 d-flex justify-content-end'>
                    <DropdownBtn id='filter-transaction' item={props.state.filterTransactions} />
                </div> 
                <div className='col col-lg-3 d-flex justify-content-end'>
                    <DropdownBtn id='filter-year' item={props.state.filterYear} />
                </div> 
                <div className='col col-lg-3 d-flex justify-content-end'>
                    <DropdownBtn id='filter-month' item={props.state.filterMonth} />
                </div> 
            </div>
        </div>
    )
}
function FilterBottom(props) {
    return (
        <div className='container-fluid'>
            <div className='collapse mt-2 mb-2' id='filter'> 
                <div className='row'>
                    <DropdownBtn id='filter-transaction' item={props.state.filterTransactions} w100='w-100' />
                </div> 
                <div className='row'>
                    <DropdownBtn id='filter-year' item={props.state.filterYear} w100='w-100'/>
                </div> 
                <div className='row'>
                    <DropdownBtn id='filter-month' item={props.state.filterMonth}  w100='w-100' />
                </div> 
            </div>
        </div>
    )
}