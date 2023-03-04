import {React, useState} from 'react';
import {auth} from '../../Firebase';
import {toast} from 'react-toastify';
const Register =()=>{
    const [email, setEmail] = useState('');
    const handleSubmit= async (e)=>{
        console.log(process.env.REACT_APP_REGISTER_REDIRECT_URL)
        e.preventDefault();
        const config={
            url:    process.env.REACT_APP_REGISTER_REDIRECT_URL,
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
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <h1>Register</h1>
                        <input type='email' className="form-control my-3" value={email} onChange={e=> setEmail(e.target.value)} autoFocus></input>
                        <button type='submit' className='btn btn-raised'>Register</button>
                    </form>
                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;