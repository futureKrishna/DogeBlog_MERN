import React , {useState} from 'react'
import { useHistory  } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import '../styles/signup.css'




const Signup = () => {

    let history = useHistory();

    const [credentials, setCred] = useState({username:"" ,email:"" , password:"" , phone:"" , cpassword:""});

    // const navigate = useNavigate();

    const onSubmit = async(e) =>{

        e.preventDefault();
        const {username , email , password , phone , cpassword} = credentials;
        // console.log(credentials)
       
        const response = await fetch("http://localhost:5000/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username , email , password , phone , cpassword})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Saving the auth token  and redirecting to the content
            // localStorage.setItem('token', json.authtoken); 
            localStorage.setItem('loggedin', true); 
            localStorage.setItem('name', username); 
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


const onChange=(e)=>{
    setCred({...credentials, [e.target.name]: e.target.value })
}



  return (
    <>
    <div className="mainBoard2">
        <div className="loginboard2 shadow">
            <div className="loginboardright2">
                <h1>Hello Friend !</h1>
                <p>Enter your personal details and start your journey with us..</p>
                <a href='/loginsignup'><button type='submit' className='signupbutton2'>Login</button></a>

            </div>
            <div className="loginboardleft2">
                <h2>SIGN UP</h2>
                <div className="loginlogos2">
                    <img src="/glogo.png" alt="" />
                    <img src="/ilogo.webp" alt="" />
                    <img src="/fblogo.jpg" alt="" />
                </div>
                <p>Or use your account</p>
                <form onSubmit={onSubmit}>
                    <div>
                        <input type="text" name='username' value={credentials.name} onChange={onChange} placeholder='Enter your name' />
                    </div>
                    <div>
                        <input type="email" name='email' value={credentials.email} onChange={onChange} placeholder='Enter your email' />
                    </div>
                    <div>
                        <input type="text" name='phone' value={credentials.phone} onChange={onChange} placeholder='Enter your Phone' />
                    </div>
                    <div>
                        <input type="Password" name='password' value={credentials.password} onChange={onChange} placeholder='Enter your Password' /><br/>
                        <label id='label'>At least 8 character</label>
                    </div>
                    <div>
                        <input type="text" name='cpassword' value={credentials.cpassword} onChange={onChange} placeholder='Confirm your Password' /><br/>
                    </div>
                   <button type='submit'  className='loginbutton2'>Sign Up</button>
                </form>
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Signup