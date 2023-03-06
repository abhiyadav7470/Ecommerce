
import {React, useState} from 'react';
import {auth} from '../../Firebase';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
const Login =()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit= async (e)=>{
        console.log('onsubmit')
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCreadential)=>{
            toast.success("Login Succesfully");
        }).catch((err)=>{
            toast.error(err.message.slice(10, 55) + ' Data');
            toast.info('Please Register First');
            
        })

        //get user id token
        let user = auth.currentUser;
        const idtokenResult = await user.getIdTokenResult();
        console.log('user', user, 'tokenid', idtokenResult.token);
        navigate('/');

    };
    
    return(
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <input type='email' className="form-control my-3" value={email} onChange={e=> setEmail(e.target.value)} placeholder='Enter Register email' autoFocus required></input>
                        <input type='password' className="form-control my-3" value={password} placeholder='enter your password' onChange={e=> setpassword(e.target.value)} required></input>
                        <button type='submit' className='btn btn-raised'>Login</button>
                    </form>
                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;