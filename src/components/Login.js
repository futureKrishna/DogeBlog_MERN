import React , {useState} from 'react'
import '../styles/login.css'
import { useHistory } from 'react-router-dom';
import {  Link
} from "react-router-dom";

const Login = () => {
    

    const [credentials  , setCred] = useState({email:"" , password:""});

    const onChange = (e)=>{
        setCred({...credentials , [e.target.name]:e.target.value})
    }


    var history = useHistory();


    const onSubmit = async(e) =>{

        e.preventDefault();
        const { email , password} = credentials;
        // console.log(credentials)
       
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email , password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Saving the auth token  and redirecting to the content
            // localStorage.setItem('token', json.authtoken); 
            localStorage.setItem('loggedin', true); 
            localStorage.setItem('name' , json.username); 
        //    navigate('/')

        history.push("/");
        window.location.reload();

            // props.showAlert("Successfully Created","info");

        }
        else{
            // alert("Invalid credentials");
            console.log("invalid credentials")
            // props.showAlert("Invalid Credentials","warning");
        }
    }



  return (
    <>
    <div class="mainBoard">
        <div class="loginboard shadow">
            <div class="loginboardleft">
                <h2>SIGN IN</h2>
                <div className="loginlogos">
                    <img src="/glogo.png" alt="" />
                    <img src="/ilogo.webp" alt="" />
                    <img src="/fblogo.jpg" alt="" />
                </div>
                <p>Or use your account</p>
                <form onSubmit={onSubmit}>
                    <div>
                        <input type="text" onChange={onChange} value={credentials.email} name='email' placeholder='Enter your email' />
                    </div>
                    <div>
                        <input type="Password" onChange={onChange} value={credentials.password} name='password' placeholder='Enter your Password' /><br/>
                        <label id='label'>At least 8 character</label>
                    </div><br/><br/>
                    <p>Forgot your password ?</p>
                    <button type='submit' className='loginbutton'>Login</button>
                </form>
            </div>
            <div class="loginboardright">
                <h1>Hello Friend !</h1>
                <p>Enter your personal details and start your journey with us..</p>
                <a href="/signup"><button type='submit' className='signupbutton'>Sign UP</button></a>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login