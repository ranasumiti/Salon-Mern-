

import axios from "axios";
import {UseForm} from "react-router-dom"
import { useRef } from "react";

export default function login()
{
 const { register,
   handleSubmit,
    watch ,setFocus} = useForm();
const inputRef=useRef(null);


const handlesubmit = (data) => {
  console.log(data);

  axios
    .post("https://kizaapi.ksesystem.com/api/user/add", data)
    .then((res) => {
      console.log("res:", res.data);
    })
    .catch((error) => {
      console.log("error:", error);
    });
};
    
  
  return(





    <>
<Form>
<input ref={inputRef} type="text"
 placeholder="enter name"/>

<input type="email" ref={emailRef} placeholder="enter email"
{...Register("name")}/>


<input type="tel" placeholder="enter phn no"/>
<Button  type="submit"> Register</Button>
    </Form>
    </>
  )
}