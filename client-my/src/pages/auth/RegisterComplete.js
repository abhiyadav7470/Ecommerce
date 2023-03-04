import {React, useEffect, useState} from 'react';
import {auth} from '../../Firebase';
import {toast} from 'react-toastify';

const RegisterComplete =({history})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        setEmail(localStorage.getItem('emailForRegisteration'));
        
    },[]);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const result = await auth.signInWithEmailLink(email, window.location.href);
        }catch (error){
            console.log(error);
        }
    };
    
    return(
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <h1>Register Complete</h1>
                        <input type='email' className="form-control my-3" value={email} disabled></input>
                        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='form-control my-3' autoFocus/>
                        <button type='submit' className='btn btn-raised'>COMPLETE REGISTRATION</button>
                    </form>
                
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterComplete;