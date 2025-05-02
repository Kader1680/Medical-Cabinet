


import React from 'react';

const Login: React.FC = () => {
  return (
    <div className='auth'>
      <h1>Login Page</h1>
     <div className='form'>
        <form action="" method="post">
            <div className=' d-flex '>
              <label htmlFor="email">email</label>
              <input type="email" className=' ms-5' /> <br></br>
            </div>
            <div className=' d-flex '>
              <label htmlFor="password">password</label>
              <input type="passowrd" />
            </div>
        </form>

     </div>
     
     <div className ="d-flex justify-content-center mt-3">
     <button className='login border-0'>login in</button> <br />
      
     </div>

    
     
      <a className='d-flex justify-content-center mt-2 mb-2' href="forget passowrd">mot de passe oublié ?</a>
      <div className='d-flex justify-content-center'>
      <a  href="/register">Vous n'avez pas de compte ? </a>
      <button className='register border-0'>Sign Up</button>
     </div>
      
    </div>
  );
};

export default Login;

