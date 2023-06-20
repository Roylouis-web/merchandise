import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const [message, setMessage] = useState("Log in");
  const [loginStatus, setLogInStatus] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ($event) => {
    const { name, value } = $event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    setMessage("Logging in...");
    setTimeout(() => {
      setMessage("Log in");
      setLogInStatus("Log in successful !");
    }, 2000);

    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  useEffect(() => {
    const status = Object.values(formData).every((value) => value);
    status ? setIsCompleted(true) : setIsCompleted(false);
  }, [formData]);

  return (
    <div className="login-page-container">
      <form className="form">
        <h1>Log In</h1>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button
          type="button"
          onClick={handleLogin}
          disabled={isCompleted ? false : true}
          className="login-btn"
        >
          {message}
        </button>
        {loginStatus !== "" && <p style={{ color: "green" }}>{loginStatus}</p>}
        <p>or</p>
        <Link to="/sign-up">Sign Up</Link>
      </form>
    </div>
  );
}
