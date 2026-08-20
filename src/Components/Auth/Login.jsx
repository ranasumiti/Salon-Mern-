import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const nav=useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault();
  
  const data={
    name:name,
    email:email,
    password:password,
  }

    axios
      .post("https://kizaapi.ksesystem.com/api/user/login", data)
      .then((res) => {

        if (res.data.success){
        console.log(res.data)
        localStorage.setItem("Name",res.data.data.name)
        localStorage.setItem("email",res.data.data.email)
        localStorage.setItem("password".res.data.data.password)
        localStorage.setItem("token",res.data.token)
        const userType=res.data.data.userType
        if (userType==1){
nav("/about")
        }
        else{
nav("/")
        }
      }
      
      
      })
      .catch((error) => {
        console.log( error);
      });

}
  
  return(
    <>
    
<section
    className="hero-wrap hero-wrap-2"
    style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
        <div className="col-md-9 text-center">
          <h1 className="mb-3 bread">LOGIN FORM</h1>
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link to="/">home</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="contact-section">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-1" />
        <div className="col-md-6 ">
          <form action="#" className="contact-form"
          onSubmit={handleSubmit}>
            <div className="row">
                
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e)=>{
                      setName(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={password}
                 onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                
              />
            </div>
           
            <div className="col-md-12 text-center" >
              <input
                type="submit"
                className="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>


    </>
  )
}