


import React, { useContext} from 'react'
import { Ropute, Redirect } from 'react-router-dom'

import {AuthContext} from '../util/context/auth'
function AuthRoute({ component: Component, ... rest}) {
    const { user } = useContext(AuthContext);

    return (
        <Route
        {...rest}
        render= {props => 
            user ? <Redirect to='/' /> : <Component {...props}/>
            }
            />
    )
}

export default AuthRoute;