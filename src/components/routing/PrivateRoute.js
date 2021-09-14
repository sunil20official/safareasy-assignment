import React from 'react';
import { Route , Redirect } from 'react-router-dom';

 const PrivateRoute = ({component: Component , auth , user , ...rest }) => {

    return (
        <Route
        {...rest}
        render={props =>
        !auth ? (
            <Redirect to = '/login' />
        ) : (
            <Component {...props} user={user}/>
        )
        }
       />
    )
}

export default PrivateRoute;