import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import Dashboard from "./Dashboard";

function Login() {

  const [user,setUser] = useState({
    email:'',
    password:''
  })
  const {authState,loginUser} = useContext(AppContext);
  const [disable,setdisable] = useState(false);
  const getdata=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    setdisable(true);
    fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      loginUser(data.token) 
    })
    .catch((e)=>console.log(e))
   
  }
  return (
    <>
    {authState.isAuth ? 
    // <h1>Hiii</h1>
    (<Navigate to="/dashboard"/>) 
    :
    (<div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handlesubmit}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" name="email" onChange={getdata} />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              onChange={getdata}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled={disable}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>)
  }
  </>
  );
}
export default Login;
