import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("male");
    const navigate=useNavigate();

    const IsValidate=()=>{
        let isproceed=true;
        let errormessage="please enter value in ";
        if(id===null || id===''){
            isproceed=false;
            errormessage +=" Username ";
        }
        if(name===null || name===''){
            isproceed=false;
            errormessage +=" Fullname ";
        }
        if(password===null || password===''){
            isproceed=false;
            errormessage +=" Password ";
        }
        if(email===null || email===''){
            isproceed=false;
            errormessage +=" Email ";
        }
        if(!isproceed){
            toast.warning(errormessage);
        }
        return isproceed;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formobj = { id, name, password, email, phone, country, address, gender }
        if(IsValidate()){ 
        console.log(formobj);

        fetch(" http://localhost:5500/create",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formobj)
        }).then((res)=>{
            toast.success("Reistered successfully");
            navigate('/login')
        }).catch((err)=>{
            toast.error("Something went wrong");
        })
    }
    }
    return (
        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Registration page</h1>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>User Name</label>
                                        <input type='text' value={id} onChange={e => idchange(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password</label>
                                        <input type='password' value={password} onChange={e => passwordchange(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Full Name</label>
                                        <input type='text' value={name} onChange={e => namechange(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type='email' value={email} onChange={e => emailchange(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Phone</label>
                                        <input type='text' value={phone} onChange={e => phonechange(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Country</label>
                                        <select className='form-control' value={country} onChange={e => countrychange(e.target.value)}>
                                            <option value='india'>India</option>
                                            <option value='usa'>Usa</option>
                                            <option value='africa'>Africa</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Address</label>
                                        <textarea className='form-control' value={address} onChange={e => addresschange(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Gender</label><br></br>
                                        <input type='radio' name='gender' value='male' checked={gender == "male"} onChange={e => genderchange(e.target.value)} ></input>
                                        <label>Male</label>
                                        <input type='radio' name='gender' value='female' checked={gender == "female"} onChange={e => genderchange(e.target.value)}></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type='submit' className='btn btn-primary'>Register</button> |
                            <a className='btn btn-danger'> Back</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register