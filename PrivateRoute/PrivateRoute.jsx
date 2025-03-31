import React, { useEffect, useState } from 'react'
import { checkUser } from '../api/Api';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await checkUser()
                console.log(data)
            setAuthenticated(data.access)
            setLoading(false)
            }catch (err) {
                setLoading(true)
                console.error("Error checking user authentication:", err);
                setAuthenticated(false);
            }
        }
        fetchUser();
    },[])
 
    if (loading) return <p>Loading....</p>;
    if (authenticated === false) return <Navigate to='/Admin' replace />;
    return authenticated ? children : null;
}

export default PrivateRoute
