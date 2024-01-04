// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import '../style/contact.css'
// eslint-disable-next-line no-unused-vars
import { useNavigate, Link } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbar from '../navbar/Navbar';
import axios from "axios"
import Footer from "../footer/footer";


 function Contact () {

    const initialFormData = {
        name: '',
        email: '',
        subject: '',
        websiteurl: '',
        message: ''
      };
    
    const [formData, setFormData] = useState(initialFormData);
    const [errors,setErrors] = useState()
    const [valid,setValid]   = useState(true)
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        let isvalid = true;
        let validationErrors ={}

        if(formData.name === "" || formData.name === null){
            isvalid = false;
            validationErrors.name="Input your name"
        }
        if(formData.email === "" || formData.email === null){
            isvalid = false;
            validationErrors.email="Input your Email"
        }
        if(formData.message === "" || formData.message === null){
            isvalid = false;
            validationErrors.message="Input your message"
        }

        setErrors(validationErrors)
        setValid(isvalid)
        if(Object.keys(validationErrors).length===0){
            axios.post('http://localhost:8000/customer',formData)
            // eslint-disable-next-line no-unused-vars
            .then(_result =>{
                alert("Your Form is submit")
                setFormData(initialFormData);
             
            }) 
            .catch(err => {
                console.log(err)
            })
           
        }

        
    }


  return (
    <>
    <Navbar/>
    <section>
    <div className="contact_image">
        <div className="contact-text">
           <i></i>
        </div>
    </div>
    <div className="line-contact">
       <div className="line-contact-taxt">
      <a></a>
       </div>
    </div>
    </section>
    <section>
    <div className="contact_Info">
        <div className="sub_Info">
            <h1>CONTACT INFORMATION</h1>
            <ul>
                <b><li>Sales & Other</li></b>
                <li>Business Phone</li>
                <li>+885 112 7368</li>
                <li>Sales Hours</li>
                <li>Monday - Friday</li>
                <li>9:00am - 9:00pm EST</li>
                <li>Saturday - Sunday, Holidays</li>
                <li>9:00am - 6:00pm EST</li>
                <b><li>Marketing</li></b>
                <li>For marketing inquiries, send proposals to:</li>
                <li>Marketing@iBUYPOWER.com</li>
            </ul>
               
            
            <ul>
                <b><li>Corporate Offices</li></b>
                <li><FaLocationDot /> 10001, 5th Avenue, 12202 street, Phnom Penh.</li>
                <li><FaPhoneAlt/> +885 112 7368</li>
                <li><TfiEmail/> iBUYPOWER@mail.com</li>
            </ul>
            <h2>Follow Us</h2>
            <div className="list">
                <ul>
                    <li><FaTwitter/></li>
                    <li><FaFacebook/></li>
                    <li><FaTiktok/></li>
                    <li>< FaInstagram/></li>
                </ul>
            </div>
        </div>
        <div className="sub-form">
            <form action="#" onSubmit={handleSubmit} >
                         {
                            valid ?<></> :
                            <span className="span-text">
                                {errors.name};
                                {errors.email};
                                {errors.message}
                            </span>
                          }
                <div className="form">
                   <input type="text" name='name'  value={formData.name} onChange={(event)=>setFormData({...formData,name:event.target.value})} placeholder="Your Name*"/>
                </div>
                <div className="form">
                   <input type="email" name="email"  value={formData.email} onChange={(event)=>setFormData({...formData,email:event.target.value})} placeholder="Your Email*"/>
                </div>
                <div className="form">
                    <input type="text" name="subject"  value={formData.subject} onChange={(event)=>setFormData({...formData,subject:event.target.value})} placeholder="Subject*"/>
                 </div>
                 <div className="form">
                    <input type="text" name="websiteurl"  value={formData.websiteurl} onChange={(event)=>setFormData({...formData,websiteurl:event.target.value})} placeholder="Website URL*"/>
                 </div>
                <textarea id="subject" name="message"  value={formData.message} onChange={(event)=>setFormData({...formData,message:event.target.value})} className="textarea" placeholder="Write your message here...." ></textarea>
              
                <div className="button">
                   <button type="submit">Submit</button>
                </div>
             
             </form>
        </div>
    </div>
    </section>

    <section>
    <div className="map">
        <div className="sub-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.03721450119!2d104.87698319523557!3d11.569438216408335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517485ad1295%3A0xb2bbda109bd51b1a!2sKhan%20Tuol%20Kork%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1702389767187!5m2!1sen!2skh"
             width="600" height="450" 
              >
             </iframe>
        </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}
export default Contact;