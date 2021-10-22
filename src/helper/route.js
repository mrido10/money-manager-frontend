import axios from 'axios'
import { useState, useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom'
import config from '../config/config.json'

let auth = getCookie('authorization')
export let LoginRoute = props => {
    // return(
    //     auth === undefined || auth.length === 0 
    //         ? <Route exact path={props.path} component={props.component} /> 
    //         : <Redirect to='/'></Redirect>
    // )
    return <Route exact path={props.path} component={props.component} /> 
}

export let PrivateRoute = props => {    
    const [isAuth, setIsAuth] = useState(true);
    useEffect(() =>{
        axios({
            method: 'GET',
            url: `${config.server.moneyManager.ip}/verify`,
            headers: {
                authorization: auth 
            }
        })
        .then(resp => {
            console.log(resp.data)
            setIsAuth(true)
        })
        .catch(err => {
            console.log(err.response.data)
            setIsAuth(false)
            return  
        }) 
    }, [])

    console.log(isAuth)
    return isAuth ? <Route exact path={props.path} component={props.component} />  : <Redirect to='/login'></Redirect>
}

function verify() {
    axios({
        method: 'GET',
        url: `${config.server.moneyManager.ip}/verify`,
        headers: {
            authorization: auth 
        }
    })
    .then(resp => {
        console.log(resp.data)
        return true
    })
    .catch(err => {
        console.log(err.response.data)
        return false
    }) 
}

export function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(el => {
        let [key,val] = el.split('=');
        cookie[key.trim()] = val;
    })
    return cookie[name];
}