import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div className='loginContainer'>
            <div className='container'>
                <h1 className='loginText'>Login to your account</h1>
                <p className='loginPara'>Don't have an account? <span className='signUp'>Sign Up!</span></p>
                <div className='inputContainer'>
                    <input type="tel" placeholder='Mobile Number' className='inputField'></input>
                    <input type="password" placeholder='Password' className='inputFields'></input>
                </div>
                <div className='inputContainerLabel'>
                    <div className='inputCheckBox'>
                        <input type="checkbox" name="" id="" />
                        <label className='labeltext'>Remember Me</label>
                    </div>
                    <div>
                        <p className='forgetPass'>Forget Password?</p>
                    </div>
                </div>
                <div className='btnLoginContainer'> <button className='loginBtn'>Login</button></div>
            </div>
        </div>
    );
};

export default Login;