// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/login.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import { Alert } from 'bootstrap'

 function Login (){
   const [formData,setFormData]=useState({
    
      email:'',
      password:''
    
  })
  const [errors,setErrors] = useState({})
  const [valid,setValid]   = useState(true)
  const navigate = useNavigate()
  
  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(formData)
      let isvalid = true;
      let validationErrors ={}
     
      if(formData.email === "" || formData.email === null){
          isvalid = false;
          validationErrors.email="Email required"
      }
      if(formData.password ===""||formData.password ===null){
          isvalid = false;
          validationErrors.password="Password required"
      }else if(formData.password.length <6){
          isvalid = false;
          validationErrors.password = "password at least 6 character"
      }
     
      setErrors(validationErrors)
      setValid(isvalid)
      if(Object.keys(validationErrors).length===0){
          axios.get('http://localhost:8000/users',formData)
          .then(result =>{
            result.data.map(users =>{
               if(users.email ===formData.email && users.password ===formData.password){
                 alert("Login Successfully ")
                 navigate('/')
               }else if(users.email ===formData.email && users.password !==formData.password){
                alert("Wrong password")
               }
             })
          }) 
          .catch(err => {
              console.log(err)
          })
         
      }
  }

  return (
    <>
   
   <Navbar/>

   <div className="container_form_login">
  
        <div className="login-form">
            <form className="loginForm" onSubmit={handleSubmit}>
                <h3>Signup your Account</h3>

                <div className="row">
                        {
                            valid ?<></> :
                            <span className="span-text">
                                {errors.email};{errors.password}
                            </span>
                          }
                       
                        <div className="data-form">
                            <label>Email <span className='text-danger'>*</span></label><br/>
                            <input type="email" 
                                onChange={(event)=>setFormData({...formData,email:event.target.value})}
                                name="email" className="form-control" placeholder="Enter your Email"/>
                            </div>
                            <div className="data-form">
                                <label>Password <span className='text-danger'>*</span></label><br/>
                                <input type="password" 
                                onChange={(event)=>setFormData({...formData,password:event.target.value})}
                                name="email" className="form-control" placeholder="Enter your password"/>
                            </div>
                           
                            <div className="data-form">
                                <button className="btn-login ">Login</button>
                            </div>
                            </div>
                           
                            <div className="text-center-login ">
                            <hr/>
                                if you don't have account, Please <Link to ="/signup">Sign up</Link>
                            </div>
                        </form>
                       
                    </div>
                </div>

    </>
  )
}
export default Login;
