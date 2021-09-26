import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
    state = {
        icons: [
            {name: 'bi bi-house', to: ''},
            {name: 'bi bi-journal-text', to: ''},
            {name: 'bi bi-wallet', to: ''},
        ]
    }

    navbarItem = (value) => {
        return (
            <div className='row text-center'>
                <div className='box-nvitem active'>
                    <div className='box-rounded-top bg-primary'></div>
                    <Link to='' className='itm-active'>
                        <i className={value}></i>
                    </Link>
                    <div className='box-rounded-btm bg-primary'></div>
                </div>
            </div>
        )
    }
    render() {
        return(
            <div id='navbar' className='bg-primary h-100'>
                <div className="container-fluid"> 
                {this.state.icons.map( val => {
                    return this.navbarItem(val.name)
                })}
                </div>
            </div>
        )
    }
}

export default Navbar