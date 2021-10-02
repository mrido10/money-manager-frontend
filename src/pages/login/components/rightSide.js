import axios from "axios"
import React, {Component} from "react"
import { Redirect, withRouter , Link} from 'react-router-dom'
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

    toDashboard = () => {
        this.props.history.push("/");
    }

    handleLogin = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:3003/login',
            data: {
                email: this.state.email.value,
                password: this.state.password.value
            }
        })
        .then(resp => {
            // document.cookie = `authorization=${resp.data.data.authorization}`
            document.cookie = `authorization=true`
            this.toDashboard()
        })
        .catch(error => {
            document.cookie = 'authorization=false'
        })
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
                <div className='inp-box mt-3 position-relative d-flex'>
                    <input className='rounded-1' type='email' spellCheck='false' 
                        onKeyUp={(e) => {this.setState({email: { ...this.state.email, value: e.target.value}})}} 
                        onBlur={() => {this.setState({email: {...this.state.email, isActive: false}})}} 
                        onClick={() => {this.setState({email: {...this.state.email, isActive: true}})}}/>
                    <div className='label lEmail' >
                        Email
                    </div>
                </div>
                <div className='inp-box mt-3 position-relative d-flex'>
                    <input className='rounded-1' type='password' spellCheck='false' 
                        onKeyUp={(e) => {this.setState({password: { ...this.state.password, value: e.target.value}})}} 
                        onBlur={() => {this.setState({password: {...this.state.password, isActive: false}})}} 
                        onClick={() => {this.setState({password: {...this.state.password, isActive: true}})}} />
                    <div className='label lPassword' >
                        Password
                    </div>
                </div>
                <div className='forget-password-box mt-2 text-end'>
                    <Link className='text-decoration-none' to='#'>Forget Password?</Link>
                </div>
                <div className='btn-box d-flex justify-content-center'>
                    <Link className='w-50' to='/'>
                        <button type="button" className="btn w-100 btn-primary rounded-pill" onClick={this.handleLogin}>
                            Login <i className="bi bi-box-arrow-in-right"></i>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default RightSide