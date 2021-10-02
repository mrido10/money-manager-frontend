import React, {Component} from "react"
import RightSide from "./components/rightSide"
import { LeftSide } from "./components/leftSide"

import './login.css'

class Login extends Component {
    
    render() {
        return(
            <div id='login' className='box-container h-100 d-flex justify-content-center align-items-center'>
                <div className='cont-login container-fluid w-75 h-75 rounded-3 overflow-hidden bg-light shadow'>
                    <div className='row h-100'>
                        <LeftSide />
                        <RightSide />
                    </div>
                </div>
                
            </div> 
        )
    }
}

export default Login