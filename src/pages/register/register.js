import React, {Component} from "react"

class Login extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        gender: '',
        'a': a
    }

    // setName = val => {this.setState({name: val})}
    // setEmail = val => {this.setState({email: val})}
    // setPassword = val => {this.setState({password: val})}
    // setRePassword = val => {this.setState({rePassword: val})}
    // setGender = val => {this.setState({gender: val})}
    hanldeSetState = (key, val) => {this.setState()}

    render() {
        return(
            <div id='register' className='box-container h-100 d-flex justify-content-center align-items-center'>
                <div className='cont-login container-fluid w-75 h-75 rounded-3 overflow-hidden bg-light shadow'>
                    <div className='row h-100'>
                    </div>
                </div>
                
            </div> 
        )
    }
}

export default Login