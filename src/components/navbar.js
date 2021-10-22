import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
    state = {
        icons: [
            {name: 'bi bi-house', to: '/', },
            {name: 'bi bi-journal-text', to: '/transaction'},
            {name: 'bi bi-wallet', to: '/wallet'},
        ],
        showNav: true
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

    handleShowNav = () => {
        let nav = document.getElementById('navbar')
        if (window.innerWidth > 768) {
            nav.style.setProperty('width', '80px', 'important')
        } else {
            nav.style.setProperty('width', '80px', 'important')
            nav.style.setProperty('min-width', '80px', 'important')
            nav.style.overflow = 'unset'
        }
    }

    handleHideNav = () => {
        let nav = document.getElementById('navbar')
        if (window.innerWidth > 768) {
            nav.style.setProperty('width', '80px', 'important')
        } else {
            nav.style.setProperty('width', '0', 'important')
            nav.style.setProperty('min-width', '0', 'important')
            nav.style.overflow = 'hidden'
        }
    }

    componentDidMount() {
        let className = window.location.pathname.replace('/', '')
        if (className === '') className = 'dashboard'
        let nav = document.querySelector('#navbar .' + className)
        nav.classList.add('active')
    }

    render() {
        return(
            <>
            <div id='nav-icon1' className='bg-primary mt-4 ps-1 pe-1 d-flex justify-content-end align-items-center rounded-pill' onClick={this.handleShowNav}>
                <i className='bi bi-chevron-right'></i>
            </div>
            <div id='navbar' className='bg-primary h-100 '>
                <div className="container-fluid"> 
                <div id='nav-icon2' className='bg-primary mt-4 ps-1 pe-1 d-flex justify-content-center align-items-center rounded-pill' onClick={this.handleHideNav}>
                    <i className='bi bi-chevron-left'></i>
                </div>
                {this.state.icons.map(val => {
                    return this.navbarItem(val)
                })}
                </div>
            </div>
            </>
        )
    }
}

export default Navbar