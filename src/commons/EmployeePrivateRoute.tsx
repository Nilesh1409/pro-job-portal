/* eslint-disable */
import React, { FC, useContext, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const EmployeePrivateRoute: FC<any> = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await authContext.user;
            
    //         console.log(result);
    //     };
    //     fetchData();
    // }, []);
    interface Props {
        component: React.ComponentType<any>;
        [key: string]: any;
    }

    return (
        <Route
            {...rest}
            render={
                (props: any) => {
                    if (authContext.state.isLoading) {
                        return <h2>Loading...</h2>
                    } else if (!authContext.state.isAuthenticated) {
                        return <Navigate to="/login" />
                    }
                    else if (!authContext.state.user || authContext.state.user.role !== 'employee') {
                        return <Navigate to="/" />
                    }
                    else {
                        return <Component {...props} />;
                    }
                }
            }
        />
    )
}

export default EmployeePrivateRoute;