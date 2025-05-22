import React, { useContext, useEffect } from 'react'
import { Logincontext } from './loginprovider'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const { setlogged } = useContext(Logincontext);
    useEffect(() => {
        setlogged(false);
        navigate("/");
    })

    return null;

}

export default Logout;
