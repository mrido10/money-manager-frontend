import {Route, Redirect} from 'react-router-dom'

let a = getCookie('authorization')
export let LoginRoute = (props) => {
    return(
        a === undefined || a.length === 0 
            ? <Route exact path={props.path} component={props.component} /> 
            : <Redirect to='/'></Redirect>
    )
}

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(el => {
        let [key,val] = el.split('=');
        cookie[key.trim()] = val;
    })
    return cookie[name];
}