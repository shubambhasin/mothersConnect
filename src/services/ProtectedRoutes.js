import React from 'react'
import { Navigate, Route } from 'react-router';
import { useSelector } from 'react-redux';

export const ProtectedRoutes = ({ path , ...props }) => {

    const { token } = useSelector((state) => {
        return state.user
    })
    return (
       token ?  (
        <Route {...props} path={path} />
          ): (
            <Navigate state={{ from: path }} replace to="/signin" />
          ) 
    )
}
