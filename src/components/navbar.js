import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
    state = {
        icons: [
            {name: 'bi bi-house', to: '/', },
            {name: 'bi bi-journal-text', to: '/transaction'},
            {name: 'bi bi-wallet', to: '/wallet'},
        ]
    }

    navbarItem = (value) => {
        let className = value.to.replace('/', '')
        if (className === '') className = 'dashboard'
        return (
            <div className='row text-center'>
                <div className={className + ' box-nvitem'}>
                    <div className='box-rounded-top bg-primary'></div>
                    <div className='box-rounded-center'>
                        <div><div></div></div>
                        <Link to={value.to} className='itm-active'>
                            <i className={value.name}></i>
                        </Link>
                    </div>
                    <div className='box-rounded-btm bg-primary'></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let className = window.location.pathname.replace('/', '')
        if (className === '') className = 'dashboard'
        let nav = document.querySelector('#navbar .' + className)
        nav.classList.add('active')
    }

    render() {
        return(
            <div id='navbar' className='bg-primary h-100 '>
                <div className="container-fluid"> 
                {this.state.icons.map(val => {
                    return this.navbarItem(val)
                })}
                </div>
            </div>
        )
    }
}

export default Navbar