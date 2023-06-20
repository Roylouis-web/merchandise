import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const [message, setMessage] = useState("Sign Up");
  const [signUpStatus, setSignUpStatus] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = ($event) => {
    const { name, value } = $event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const status = Object.values(formData).every((value) => value);
    status ? setIsCompleted(true) : setIsCompleted(false);
  }, [formData]);

  const handleSignUp = () => {
    setMessage("Signing up...");
    setTimeout(() => {
      setSignUpStatus("Sign up sucessful !");
    }, 2000);

    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  return (
    <div className="sign-up-page-container">
      <form className="form">
        <h1>Sign Up</h1>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          placeholder="first name"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          placeholder="last name"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button
          type="button"
          onClick={handleSignUp}
          disabled={isCompleted ? false : true}
          className="sign-up-btn"
          onChange={handleChange}
        >
          {message}
        </button>
        {signUpStatus !== "" && (
          <p style={{ color: "green" }}>{signUpStatus}</p>
        )}
      </form>
    </div>
  );
}
