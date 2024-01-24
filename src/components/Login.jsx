import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
    const [username,usernameupdate]=useState("");
    const [password,passwordupdate]=useState("");

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

     const navigate=useNavigate();
     const onProceed=(e)=>{
      e.preventDefault();
      if(validate()){
        // console.log("proceed");
        fetch("https://mernback2-qkxq.onrender.com/users/"+username).then((res)=>{
            return res.json();
        }).then((resp)=>{
            console.log(resp);
            if(Object.keys(resp).length===0){
                toast.error("please enter valid username")
            }else{
                if(resp.password===password){
                    toast.success("Loggin Successfull");
                    sessionStorage.setItem("username",username);
                    navigate("/");
                }
                else{
                    toast.error("please enter volid credentials")
                }
            }
        })
        .catch((err)=>{
            toast.error("please enter valid username"+err.mesage)
        })
      }

     }
     
     const validate=()=>{
        let result=true;
        if(username === null || username===""){
            result=false;
            toast.warning("please enter username");
        }
        if(password === null || password===""){
            result=false;
            toast.warning("please enter password");
        }
        return result;
     }

  return (
    <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
            <form onSubmit={onProceed} className='container'>
               <div className='card'>
                <div className='card-header'>
                    <h1>Login Page</h1>
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label>User Name</label>
                        <input type='text' value={username} onChange={e=>usernameupdate(e.target.value)} className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' value={password} onChange={e=>passwordupdate(e.target.value)} className='form-control'/>
                    </div>

                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-primary'>Login</button> 
                    <Link className='ps-3' to={'/register'}>New User Account</Link>
                </div>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Login