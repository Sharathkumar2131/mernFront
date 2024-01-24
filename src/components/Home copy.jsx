import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate();

    useEffect(()=>{
        let username=sessionStorage.getItem("username");
        if(username==='' || username === null){
            navigate('/login');
        }
    },[]);
    return (
        <div className='container-fluid'>
            <div className='header p-2' >
                <Link to={'/'} className='text-white p-3'>Home</Link>
                <Link to={'/login'} className='text-white p-3'>Logout</Link>
            </div>
            <h1>Welcome to Home page</h1>
        </div>
    )
}

export default Home