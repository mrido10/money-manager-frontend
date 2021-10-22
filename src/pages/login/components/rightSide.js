import axios from "axios"
import React, {Component} from "react"
import { Redirect, withRouter , Link} from 'react-router-dom'
import config from '../../../config/config.json'
import { deleteCookie, setCookie } from "../../../helper/cookie"
import './rightSide.css'

class RightSide extends Component {
    state = {
        email: {
            value: '',
            isActive: false
        },
        password: {
            value: '',
            isActive: false
        },
        style: {
            focus: {
                background: '#fff',
                color: '#333',
                fontSize: '13px',
                transform: 'translateY(-35px)'
            },
            unFocus: {
                background: 'none',
                color: '#888',
                fontSize: '16px',
                transform: 'translateY(-50%)'
            }
        }
    }

    handleLabel = (selector, stt) => {
        let label = document.querySelector(selector)
        if (stt.value.length > 0 || stt.isActive) {
            Object.assign(label.style, this.state.style.focus)
        } else if (stt.value.length === 0 && !stt.isActive) {
            Object.assign(label.style, this.state.style.unFocus)
        }
    }

    validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    checkEmptyInputValue = () => {
        let notif = document.querySelector('#login .notif-box')
        console.log(this.validateEmail(this.state.email.value))
        if (this.state.email.value.length === 0) {
            if (this.state.password.value.length === 0) {
                notif.innerHTML = 'Email and Password required!'
                return false
            }
            notif.innerHTML = 'Email required!'
            return false
        } else if (this.state.password.value.length === 0) {
            notif.innerHTML = 'Password required!'
            return false
        } else if (!this.validateEmail(this.state.email.value)) {
            notif.innerHTML = 'Email not valid!'
            return false
        }
        
        notif.innerHTML  = ''
        return true
    }

    handleLogin = () => {
        if (!this.checkEmptyInputValue()) {
            return
        }
        axios({
            method: 'POST',
            url: `${config.server.auth.ip}/login`,
            data: {
                email: this.state.email.value,
                password: this.state.password.value
            }
        })
        .then(resp => {
            axios({
                method: 'POST',
                url: `${config.server.moneyManager.ip}/registerUserAccount`,
                headers: {
                    authorization: resp.data.data.authorization
                }
            })
            .then(res => {
                setCookie('authorization', resp.data.data.authorization)
                this.setState({
                    toDashboard: true
                })
            })
            .catch(err => {
                deleteCookie('authorization')
                console.log(err.response)
            })
        })
        .catch(error => {
            let notif = document.querySelector('#login .notif-box')
            if (error.response !== null && error.response !== undefined) {
                notif.innerHTML = error.response.data.message
            } else {
                notif.innerHTML = "Something wrong!"
            }
        })
    }

    handleEmpty = (type) => {
        let notif = document.querySelector(`#login input[type=${type}]`)
        if (type === 'email') {
            if (this.state.email.value.length === 0) {
                notif.style.borderColor = '#dc3545'
            } else {
                notif.style.borderColor = '#888'
            }
        } else if (type === 'password') {
            if (this.state.password.value.length === 0) {
                notif.style.borderColor = '#dc3545'
            } else {
                notif.style.borderColor = '#888'
            }
        }
    }

    onFocus = (type) => {
        let notif = document.querySelector(`#login input[type=${type}]`)
        notif.style.borderColor = '#605BFF'
    }


    componentDidUpdate() {
        this.handleLabel('#login .label.lEmail', this.state.email)
        this.handleLabel('#login .label.lPassword', this.state.password)
    }

    render() {
        return(
            <div className='login-right-side col p-5 d-flex flex-column justify-content-center align-items-center'>
                <div className='icon-box mt-4 mb-2 rounded-circle bg-primary d-flex justify-content-center align-items-center'>
                    <i className='bi bi-person'></i>
                </div>
                <div className='notif-box text-end mt-3 mb-2'>
                    
                </div>
                <div className='inp-box position-relative d-flex'>
                    <input className='rounded-1' type='email' spellCheck='false' 
                        onKeyUp={(e) => {this.setState({email: { ...this.state.email, value: e.target.value}})}} 
                        onBlur={() => {
                            this.handleEmpty('email')
                            this.setState({email: {...this.state.email, isActive: false}})
                        }} 
                        onFocus={() => {this.onFocus('email')}}
                        onClick={() => {this.setState({email: {...this.state.email, isActive: true}})}}/>
                    <div className='label lEmail' >
                        Email
                    </div>
                </div>
                <div className='inp-box mt-3 position-relative d-flex'>
                    <input className='rounded-1' type='password' spellCheck='false' 
                        onKeyUp={(e) => {this.setState({password: { ...this.state.password, value: e.target.value}})}} 
                        onBlur={() => {
                            this.handleEmpty('password')
                            this.setState({password: {...this.state.password, isActive: false}})
                        }} 
                        onFocus={() => {this.onFocus('password')}}
                        onClick={() => {this.setState({password: {...this.state.password, isActive: true}})}} />
                    <div className='label lPassword' >
                        Password
                    </div>
                </div>
                <div className='forget-password-box mt-2 text-end'>
                    <Link className='text-decoration-none' to='#'>Forget Password?</Link>
                </div>
                <div className='btn-box d-flex justify-content-center'>
                    <button type="button" className="btn w-50 btn-primary rounded-pill" onClick={this.handleLogin}>
                        Login <i className="bi bi-box-arrow-in-right"></i>
                    </button>
                    {this.state.toDashboard ? <Redirect to='/' /> : ''}
                </div>
            </div>
        )
    }
}

export default RightSide