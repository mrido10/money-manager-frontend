import React, { Component } from 'react'
import './wallet.css'

class Wallet extends Component {
    render() {
        return(
            <div id='dashboard-wallet' >
                <h2>Wallet</h2>
                <div className='box-wallet bg-light rounded-2 w-100 shadow-sm'></div>
            </div>
        )
    }
}

export default Wallet