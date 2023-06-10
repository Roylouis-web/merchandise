import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [searchParam, setSearchParam] = useSearchParams();
  const message = searchParam.get("message");
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => {
      return { ...prev, [name]: value }
    });
  }

  const handleSubmit = () => {
    
  }

  return (
    <div className="login-container">
      { message && <p style={{color: "red"}}>{message}</p> }
      <h1>Log in to your account</h1>
      <form>
        <input 
          type="email" 
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <br />
        <input 
          type="password" 
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
        />
        <br />
        <br />
        <button onClick={handleSubmit} type="button">Log In</button>
        </form>
        <p>or</p>
        <Link 
          to="/sign-up"
          style={{color: 'black'}}
        >
            Sign Up
        </Link>
    </div>
  );
};