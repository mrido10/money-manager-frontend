import React from 'react'
import  { Redirect } from 'react-router-dom'

export const ToLogin = () => {
    return <Redirect push to='/login'  />
}