import React, { Component } from 'react'
import Header from './components/header'
import Navbar from '../../components/navbar'
import Graph from './components/graph'
import './dashboard.css'
import Wallet from './components/wallet'
import Doughnut from './components/doughnut'

class Dashboard extends Component {
    render() {
        return(
            <div className='box-container h-100'>
                <div className='d-flex flex-row bd-highlight mb-3 h-100'>
                    <div className='sidebar'>
                        <Navbar />
                    </div>
                    <div className='content container-fluid p-4'>
                        <div className='row pb-2'>
                            <Header />
                        </div>
                        <div className='row pt-4'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col pe-2'>
                                        <div className='row'>
                                            <Graph />
                                        </div>
                                        <div className='row pt-3'>
                                            <div className='col pe-2'><Doughnut title={'Income'} seq={1} /></div>
                                            <div className='col ps-2'><Doughnut title={'Expence'} seq={2} /></div>
                                        </div>
                                    </div>
                                    <div className='col col-lg-3 ps-2'>
                                        <Wallet />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Dashboard