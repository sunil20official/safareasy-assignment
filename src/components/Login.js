import React  from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

export const Login = ({user:{email , password} , onChange , onSubmit , auth}) => {

    const history = useHistory();

    function redirect() {
        history.push('/');
    }

    useEffect(() => {
       if(auth) {
          redirect();
       }
    })

    return (
        <div className = "form-container" >
            {console.log(sessionStorage.getItem("auth"))}
            <h1>
                Account <span className="text-primary" > Login </span>
            </h1>
            <form onSubmit= {onSubmit} >
               
                <div className="form-group" > 
                   <label htmlFor="email" >User Name (Email Address) </label>
                   <input 
                   type="email" 
                   name="email" 
                   value={email} 
                   onChange={onChange}
                   required />
                </div>
                <div className="form-group" > 
                   <label htmlFor="password" > Password </label>
                   <input 
                   type="password" 
                   name="password" 
                   value={password} 
                   onChange={onChange} 
                   required />
                </div>
              
                <input type="submit" value="Login" className="btn btn-primary btn-block" style={{borderRadius:"20px"}} />
            </form>
            
        </div>
    )
}

export default Login;