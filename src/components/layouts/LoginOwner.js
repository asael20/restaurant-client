import React, { useEffect } from 'react';
import { verifyOwner } from '../../apis/owner.api';
import { Router, Link, Redirect, BrowserRouter, useHistory } from "react-router-dom";


const LoginOwner = (props) => {

    let history = useHistory()
    let token = localStorage.getItem('token')
    if(token) history.push(`/owner/${JSON.parse(localStorage.getItem('user')).email}`)

    const logear = (e)=>{
        e.preventDefault();
        let form = e.target;
        let credentials = {email:form.email.value, password: form.password.value}
        verifyOwner(credentials).then(value => {
            let data = value.data;
            if( data == null ){
                alert(value.message)
                return 
            }
            
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('token', value.token)
            
            history.push(`/owner/${data.email}`)
            
        })
    }

    
    return (
        <div className="container w-50 mt-5"  >
            <form onSubmit={logear}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" required={true} autoComplete="off" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password"  required={true} class="form-control" id="exampleInputPassword1" name="password" />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginOwner;