
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";






export default function Register() {
  const nav=useNavigate()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);

const [passwordError, setPasswordError] = useState("");


  const handlesubmit = (e) => {
    e.preventDefault()

    const data = {
      name: name,
      email: email,
      password: password,
    }

    axios.post("https://kizaapi.ksesystem.com/api/user/add", data)
      .then((res) => {
        console.log("res:", res.data);
        alert("Register successfully");
       nav("/login")
        

      })
      .catch((error) => {
        console.log("error:", error);
      });
  };


  return (





    <>

    <div className="container-fluid">   
  
  <div className="row">            

    <div className="col-md-12 ">   
      <img
        src="/images/Login.jpg"
        className="img-fluid w-100"
        alt="Salon"
      />
    </div>

  </div>
</div>
<br></br>
  
     <div
  className="container-fluid"
  style={{
    backgroundColor: "#FFFDFB",
    padding: "80px 20px"
  }}
>
  <div className="row justify-content-center">

    <div className="col-md-6 col-lg-5">

      <form
        action="#"
        className="contact-form"
        onSubmit={handlesubmit}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "45px",
          borderRadius: "15px",
          boxShadow: "0 8px 30px rgba(80, 50, 40, 0.10)"
        }}
      >

        {/* Heading */}
        <div className="text-center mb-4">

          <h2
            style={{
              color: "#3B302D",
              fontSize: "36px",
              fontWeight: "600",
              marginBottom: "8px"
            }}
          >
            Create Account
          </h2>

          <p
            style={{
              color: "#9B8580",
              fontSize: "15px"
            }}
          >
            Join us and experience beauty & elegance
          </p>

        </div>


        {/* Name */}
        <div className="form-group mb-3">

          <label
            style={{
              color: "#4A3A36",
              fontWeight: "500",
              marginBottom: "7px"
            }}
          >
            Name
          </label>

          <input
            type="text"
            
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            style={{
              height: "50px",
              border: "1px solid #E5D2CC",
              borderRadius: "8px",
              padding: "10px 15px"
            }}
          />

        </div>


        {/* Email */}
        <div className="form-group mb-3">

          <label
            style={{
              color: "#4A3A36",
              fontWeight: "500",
              marginBottom: "7px"
            }}
          >
            Email
          </label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            style={{
              height: "50px",
              border: "1px solid #E5D2CC",
              borderRadius: "8px",
              padding: "10px 15px"
            }}
          />

        </div>


        {/* Password */}
        <div className="form-group mb-3">

          <label
            style={{
              color: "#4A3A36",
              fontWeight: "500",
              marginBottom: "7px"
            }}
          >
            Password
          </label>

          <div className="position-relative">

            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Create a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              required
              style={{
                height: "50px",
                border: "1px solid #E5D2CC",
                borderRadius: "8px",
                padding: "10px 65px 10px 15px"
              }}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "8px",
                border: "none",
                background: "none",
                color: "#B77D6D",
                fontSize: "14px"
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

        </div>




        {/* Register Button */}
        <button
          type="submit"
          className="w-100"
          style={{
            height: "52px",
            backgroundColor: "#C58F7E",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500"
          }}
        >
          Create Account
        </button>


        {/* Login Link */}
        <p
          className="text-center mt-4 mb-0"
          style={{
            color: "#8B7770",
            fontSize: "14px"
          }}
        >
          Already have an account?{" "}

          <a
            href="/login"
            style={{
              color: "#B77D6D",
              fontWeight: "600",
              textDecoration: "none"
            }}
          >
            Login
          </a>

        </p>

      </form>

    </div>

  </div>
</div>



    </>
  )
}