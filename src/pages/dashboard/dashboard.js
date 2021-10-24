import React, { Component } from 'react'
import Header from './components/header'
import Navbar from '../../components/navbar'
import Graph from './components/graph'
import './dashboard.css'
import Wallet from './components/wallet'
import Doughnut from './components/doughnut'
import { Redirect, withRouter } from 'react-router-dom'

class Dashboard extends Component {
    state = {
        authorized: false,
        dougnut1: {
            url: 'http://localhost:3030/aaa'
        }, 
        dougnut2: {
            
        }
    }

    handleToLogin = () => {
        this.props.history.push("/login");
    }

    componentDidMount() {

    }

    render() {
        

        return(
            <div id='dashboard' className='box-container h-100'>
                <div className='d-flex flex-row bd-highlight mb-3 h-100'>
                    {/* <div className='sidebar'> */}
                        <Navbar />
                    {/* </div> */}
                    <div className='content container'>
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
                                            {/* <div className='col pe-2'><Doughnut title={'Income'} seq={1} url={this.state.dougnut1.url} /></div>
                                            <div className='col ps-2'><Doughnut title={'Expence'} seq={2} backgroundColor={this.state.dougnut2.color} /></div> */}
                                        </div>
                                    </div>
                                    {/* <div className='col col-lg-3 ps-2'>
                                        <Wallet />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default withRouter(Dashboard)