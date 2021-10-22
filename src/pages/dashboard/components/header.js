import axios from 'axios'
import React, { Component } from 'react'
import config from '../../../config/config.json'
import { getCookie } from '../../../helper/route'
import { deleteCookie } from '../../../helper/cookie'
import {withRouter } from 'react-router-dom'
import './header.css'

class Header extends Component {
    state = {
        head: [
            {
                name: 'Income',
                amount: 0,
                color: '#605BFF',
                icon: 'bi bi-box-arrow-in-down'
            },
            {
                name: 'Expence',
                amount: 0,
                color: '#FFA104',
                icon: 'bi bi-box-arrow-up'
            },
            {
                name: 'Total',
                amount: 0,
                color: '#22C0A6',
                icon: 'bi bi-wallet2'
            }
        ]
    }

    getDataHeader = () => {
        let auth = getCookie('authorization')
        console.log(auth)
        // axios({
        //     method: 'GET',
        //     url: `${config.server.moneyManager.ip}/getTotalTransactions`,
        //     headers: {
        //         authorization: auth 
        //     }
        // })
        // .then(resp => {
        //     let data = resp.data.data
        //     const income = this.state.head[0]
        //     const expence = this.state.head[1]
        //     const total = this.state.head[2]
        //     income.amount = data.income.totalAmount
        //     expence.amount = data.expence.totalAmount
        //     total.amount = data.total.totalAmount
        //     this.setState({
        //         income,
        //         expence,
        //         total
        //     })
        // })
        // .catch(err => {
        //     console.log(err.response)
        //     deleteCookie('authorization')
        //     return this.props.history.push('/login')
        // })
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
        this.getDataHeader()
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

export default withRouter(Header)