import React from 'react';
import { Redirect } from 'react-router-dom';


const logout = () => {
    sessionStorage.clear();
    
    return <Redirect to='/' />
}

export default logout;