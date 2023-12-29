import React, { useEffect, useState } from "react"
import axios from "axios"
import Navbar from '../navbar/Navbar'
import '../style/Signup.css'
import { useNavigate, Link } from "react-router-dom"


function Signup() {
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        password:'',
        comfirmpassword:''
    })
    const [errors,setErrors] = useState({})
    const [valid,setValid]   = useState(true)
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
        let isvalid = true;
        let validationErrors ={}
        if(formData.username === "" || formData.username === null){
            isvalid = false;
            validationErrors.username="Username required"
        }
        if(formData.email === "" || formData.email === null){
            isvalid = false;
            validationErrors.email="Email required"
        }
        if(formData.password ===""||formData.password ===null){
            isvalid = false;
            validationErrors.password="Password required"
        }else if(formData.password.length <6){
            isvalid = false;
            validationErrors.password = "password at least 6"
        }
        if(formData.comfirmpassword !==formData.password){
            isvalid = false;
            validationErrors.comfirmpassword="confirm password not match"
        }
        setErrors(validationErrors)
        setValid(isvalid)
        if(Object.keys(validationErrors).length===0){
            axios.post('http://localhost:8000/users',formData)
            .then(result =>{
                alert("Registered Successfully")
                navigate('/')
            }) 
            .catch(err => {
                console.log(err)
            })
           
        }
    }
  return (
   <>
   <Navbar/>

   <div className="container_form">
  
        <div className="signup-form">
            <form className="Form" onSubmit={handleSubmit}>
                <h3>Signup your Account</h3>

                <div className="row">
                {
                            valid ?<></> :
                            <span className="span-text">
                                {errors.username};{errors.email};{errors.password}{errors.comfirmpassword}
                            </span>
                          }
                        <div className="data-form">
                        <label>username <span className='text-danger'>*</span></label><br/>
                        <input type="text" 
                            onChange={(event)=>setFormData({...formData,username:event.target.value})}
                            name="username" className="form-control" placeholder="Enter your UserName"/>
                        </div>
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
                                <label>Comfirm Password <span className='text-danger'>*</span></label><br/>
                                <input type="password"
                                    onChange={(event)=>setFormData({...formData,comfirmpassword:event.target.value})}
                                    name="comfirmpassword" className="form-control" placeholder="Enter your comfirm password"/>
                            </div>
                            <div className="data-form">
                                <button className="btn ">sign up</button>
                            </div>
                            </div>
                           
                            <div className="text-center-signup ">
                            <hr/>
                                if you have account, Please <Link to ="/login">Login now</Link>
                            </div>
                        </form>
                       
                    </div>
                </div>

           
       




















   {/* <div>Signup</div> */}
    {/* <div className="SigupForm">
        <h1>SignUp</h1>
        <div className="sub-signup-form">
            <form className="Form-signup" onSubmit={handleSubmit}>
                <div className="Form-data">
                    <label>UserName <span>*</span></label><br/>
                    <input type="text" onChange={(event)=>setFormData({...formData,username:event.target.value})} className="form-control" name="username" placeholder="Enter your Username" />
                </div>
                <div className="Form-data">
                    <label>Email<span>*</span></label><br/>
                    <input type="email" onChange={(event)=>setFormData({...formData,email:event.target.value})} className="form-control" name="email" placeholder="Enter your Email" />
                </div>
                <div className="Form-data">
                    <label>Password <span>*</span></label><br/>
                    <input type="text" onChange={(event)=>setFormData({...formData,password:event.target.value})} className="form-control" name="password" placeholder="Enter your Passowrd" />
                </div>
                <div className="Form-data">
                    <label>Comfirm Password <span>*</span></label><br/>
                    <input type="text" className="form-control" onChange={(event)=>setFormData({...formData,cpassword:event.target.value})} name="cpassword" placeholder="Enter your comfirm password" />
                </div>
                <div className="btnb">
                    <button >signup</button>
                </div>
                
            </form>
        </div>
    </div> */}


   
   </>
  )
}

export default Signup