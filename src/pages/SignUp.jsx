import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    const [users, setUser] = useState('');
    const [message, setMessage] = useState('Sign Up');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
      });
      const navigate = useNavigate();
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => {
          return { ...prev, [name]: value }
        });
      }
    
      const handleSubmit = () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password) {
            setErrorMessage('No field must be empty');
        } else {
            setErrorMessage('');
            (async () => {
               await axios.post("/api/users", {
                body: {
                   firstName: formData.firstName,
                   lastName: formData.lastName,
                   email: formData.email,
                   phone: formData.phone,
                   password: formData.password
                }
               });

               const data = await axios.get("/api/users");
               const users = data.data.users;
               const newUser = users.map(user => console.log(user.firstName));
               console.log(newUser);
            })();
            setMessage('Signing Up...')
            setTimeout(() => navigate(-2), 5000);
        }
      }
    
    return (
        <div className="sign-up-container">
          <h1>Sign up for a new account</h1>
          <form>
            <input 
              type="text" 
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="first name"
            />
            <br />
            <br />
            <input 
              type="text" 
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="last name"
            />
            <br />
            <br />
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
              type="tel" 
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="phone"
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
            <p style={{color: 'red'}}>{errorMessage}</p>
            <button onClick={handleSubmit} type="button">{ message }</button>
            </form>
        </div>
      );
};
