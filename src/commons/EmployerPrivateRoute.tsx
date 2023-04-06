/* eslint-disable */
import React, { FC, useContext, useEffect } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import ApplicantsPage from '../pages/employer/ApplicantsPage';
import DashboardPage from '../pages/employer/DashboardPage';
import PostJobPage from '../pages/employer/PostJobPage';

interface Props {
    component: React.ElementType
}

const EmployerPrivateRoute: FC<any> = ({component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);

    const checkUser = ()=>{
        console.log('in check user')
        if (authContext.state.isLoading) {
            return <h2>Loading...</h2>
        } else if (!authContext.state.isAuthenticated) {
            return <Navigate to="/login"/>
        } else if (!authContext.state.user || authContext.state.user.role != 'employer') {
            return <Navigate to="/"/>
        } else {
            return <Navigate to="/" />;
        }
    }

    useEffect(()=>{
        // checkUser()
    },[])
    console.log('in employer route')

    return (
        <Routes>
        <Route  path="post-job/" element={<PostJobPage/>} />
                <Route  path="dashboard/" element={<DashboardPage/>} />
                <Route  path="applicants/" element={<ApplicantsPage/>} />
        </Routes>
        
    )
}

export default EmployerPrivateRoute;