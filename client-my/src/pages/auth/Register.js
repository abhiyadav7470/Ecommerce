import {React, useState} from 'react';
import {auth} from '../../Firebase';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register =()=>{
    const [email, setEmail] = useState('');
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const config={
            url: "http://localhost:3000/register/complete",
            handleCodeInApp: true
        };

        await auth.sendSignInLinkToEmail(email, config);

        toast.success(`Email is sent to ${email}. Click the link to complete your registration.`);

        //save user email in localstorage 
        window.localStorage.setItem("emailForRegisteration", email);

        //clear state
        setEmail("");
        console.log("succees")
    };
    
    return(
        <><ToastContainer/>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <h1>Register</h1>
                        <input type='email' className="form-control my-3" value={email} onChange={e=> setEmail(e.target.value)} autoFocus></input>
                        <button className='btn btn-raised'>Register</button>
                    </form>
                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;