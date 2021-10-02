import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    state = {
        head: [
            {
                name: 'Income',
                amount: 10000000,
                color: '#605BFF',
                icon: 'bi bi-box-arrow-in-down'
            },
            {
                name: 'Expence',
                amount: 10000,
                color: '#FFA104',
                icon: 'bi bi-box-arrow-up'
            },
            {
                name: 'Total',
                amount: 1000000,
                color: '#22C0A6',
                icon: 'bi bi-wallet2'
            }
        ]
    }

    compHeader = val => {
        return(
            <div className='col h-100 d-flex flex-row align-items-center p-3'>
                <div className='circle rounded-circle d-flex justify-content-center align-items-center'>
                    <i className={val.icon}></i>
                </div>
                <div className='box-amount'>
                    <div className='d-flex flex-column'>
                        <div className='whatfor fs-6'>{val.name}</div>
                        <div className='amount fw-bolder fs-5'>Rp {val.amount.toLocaleString()}</div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let circle = document.querySelectorAll('#dahboard-header .ctn-header .circle')
        circle.forEach((val, idx) => {
            val.style.backgroundColor = this.state.head[idx].color
        })
    }

    render() {
        return(
            <div id='dahboard-header'>
                <h1 className='fw-bold'>Dashboard</h1>
                <div className='ctn-header container-fluid rounded-3 bg-light p-1 shadow-sm'>
                    <div className='row h-100'>
                        {this.state.head.map(val => {
                            return this.compHeader(val)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header